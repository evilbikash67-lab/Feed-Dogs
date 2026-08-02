import { PaymentSuccessResult } from '../types';

declare global {
  interface Window {
    Razorpay: any;
  }
}

/**
 * Dynamically loads the Razorpay checkout.js script.
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay checkout script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export interface OpenRazorpayCheckoutOptions {
  keyId: string;
  orderId: string;
  amount: number; // in paise
  currency: string;
  name: string;
  description: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  onSuccess: (result: PaymentSuccessResult) => void;
  onDismiss?: () => void;
  onError?: (error: any) => void;
}

/**
 * Triggers the Razorpay checkout popup or fallback simulator.
 */
export async function triggerRazorpayCheckout(options: OpenRazorpayCheckoutOptions): Promise<void> {
  const loaded = await loadRazorpayScript();

  if (!loaded || !window.Razorpay) {
    throw new Error('Razorpay SDK could not be loaded. Check network connection.');
  }

  const razorpayOptions = {
    key: options.keyId,
    amount: options.amount,
    currency: options.currency,
    name: options.name,
    description: options.description,
    image: 'https://cdn.razorpay.com/static/assets/logo/rzp.png',
    order_id: options.orderId,
    prefill: options.prefill,
    theme: {
      color: '#0F172A' // Dark Slate Theme
    },
    handler: function (response: any) {
      options.onSuccess({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature
      });
    },
    modal: {
      ondismiss: function () {
        if (options.onDismiss) {
          options.onDismiss();
        }
      }
    }
  };

  const rzp = new window.Razorpay(razorpayOptions);

  rzp.on('payment.failed', function (response: any) {
    if (options.onError) {
      options.onError(response.error);
    }
  });

  rzp.open();
}
