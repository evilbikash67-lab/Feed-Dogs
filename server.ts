import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import { createServer as createViteServer } from 'vite';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logger
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Health Check Endpoint (Required for Render & status monitoring)
  app.get('/health', (req, res) => {
    res.status(200).json({
      status: 'ok',
      service: 'feed-a-dog-ngo',
      organization: 'Feed A Dog Foundation',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      razorpayConfigured: Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET)
    });
  });

  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', time: new Date().toISOString() });
  });

  // Get current Razorpay configuration status and public key ID
  app.get('/api/config', (req, res) => {
    const keyId = process.env.RAZORPAY_KEY_ID || '';
    const hasSecret = Boolean(process.env.RAZORPAY_KEY_SECRET);

    res.json({
      keyId,
      isConfigured: Boolean(keyId && hasSecret),
      isTestMode: keyId.startsWith('rzp_test_') || !keyId,
      environment: process.env.NODE_ENV || 'development'
    });
  });

  // POST /api/create-order
  app.post('/api/create-order', async (req, res) => {
    try {
      const { amount = 499, currency = 'INR', receipt, customKeyId, customKeySecret } = req.body;

      const keyId = customKeyId || process.env.RAZORPAY_KEY_ID;
      const keySecret = customKeySecret || process.env.RAZORPAY_KEY_SECRET;

      // Amount in Razorpay is in smallest currency unit (paise for INR)
      const amountInPaise = Math.round(Number(amount) * 100);
      const orderReceipt = receipt || `rcpt_${Date.now()}`;

      console.log(`Creating order for amount: ₹${amount} (${amountInPaise} paise)`);

      // If valid Razorpay credentials are present, attempt live Razorpay API order creation
      if (keyId && keySecret && keyId !== 'rzp_test_xxxxxxxxxxxxxx') {
        try {
          const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret
          });

          const options = {
            amount: amountInPaise,
            currency: currency,
            receipt: orderReceipt,
            notes: {
              cause: 'Feed A Dog NGO',
              description: 'Stray Dog Meal Donation',
              dogCount: String(req.body.dogCount || Math.floor(Number(amount) / 10) || 1)
            }
          };

          const order = await razorpay.orders.create(options);
          console.log('Razorpay live test order created successfully:', order.id);

          return res.json({
            success: true,
            order,
            keyId,
            isSimulated: false,
            message: 'Order created via Razorpay API'
          });
        } catch (razorpayErr: any) {
          console.warn('Razorpay API creation failed, falling back to simulated order:', razorpayErr?.error?.description || razorpayErr.message);
          // Fall through to test fallback order if real API key failed or rejected
        }
      }

      // Fallback/Demo Order creation if keys are missing or test mode preview
      const fallbackOrderId = `order_test_${Date.now().toString(36)}${Math.random().toString(36).substring(2, 6)}`;
      const simulatedOrder = {
        id: fallbackOrderId,
        entity: 'order',
        amount: amountInPaise,
        amount_paid: 0,
        amount_due: amountInPaise,
        currency: currency,
        receipt: orderReceipt,
        status: 'created',
        attempts: 0,
        notes: {
          cause: 'Feed A Dog NGO',
          description: 'Stray Dog Meal Donation (Simulated)',
          dogCount: String(req.body.dogCount || Math.floor(Number(amount) / 10) || 1)
        },
        created_at: Math.floor(Date.now() / 1000)
      };

      return res.json({
        success: true,
        order: simulatedOrder,
        keyId: keyId || 'rzp_test_demo_key',
        isSimulated: true,
        message: 'Order created in test verification mode'
      });
    } catch (err: any) {
      console.error('Error in /api/create-order:', err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Failed to create Razorpay order'
      });
    }
  });

  // POST /api/verify-payment
  app.post('/api/verify-payment', (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        customKeySecret
      } = req.body;

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields: razorpay_order_id, razorpay_payment_id, and razorpay_signature are required'
        });
      }

      const secret = customKeySecret || process.env.RAZORPAY_KEY_SECRET || 'demo_secret_key';

      // Razorpay Signature Calculation Rule:
      // HMAC_SHA256(order_id + "|" + payment_id, secret)
      const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
      const generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

      // Check if signatures match
      const isSignatureValid = generatedSignature === razorpay_signature;

      console.log(`Payment Verification for Order ${razorpay_order_id}:`, {
        paymentId: razorpay_payment_id,
        isSignatureValid,
        generatedSignature,
        receivedSignature: razorpay_signature
      });

      if (isSignatureValid) {
        return res.json({
          success: true,
          message: 'Razorpay payment signature verified successfully',
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          signature: razorpay_signature,
          generatedSignature,
          isSignatureValid: true,
          verifiedAt: new Date().toISOString()
        });
      } else {
        return res.status(400).json({
          success: false,
          error: 'Invalid Razorpay payment signature mismatch',
          message: 'Signature verification failed. The payment response may have been tampered with or incorrect key secret was used.',
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          receivedSignature: razorpay_signature,
          generatedSignature,
          isSignatureValid: false
        });
      }
    } catch (err: any) {
      console.error('Error in /api/verify-payment:', err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Error during payment signature verification'
      });
    }
  });

  // POST /api/simulate-failure
  app.post('/api/simulate-failure', (req, res) => {
    const { code = 'PAYMENT_CANCELLED', reason = 'User closed Razorpay checkout popup' } = req.body;
    return res.status(400).json({
      success: false,
      code,
      error: reason,
      timestamp: new Date().toISOString()
    });
  });

  // Vite development middleware or static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Feed A Dog NGO Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
});
