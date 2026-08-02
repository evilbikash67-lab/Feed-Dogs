export interface RazorpayOrder {
  id: string;
  entity?: string;
  amount: number;
  amount_paid?: number;
  amount_due?: number;
  currency: string;
  receipt?: string;
  status: string;
  created_at?: number;
  notes?: Record<string, string>;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  dedication?: string;
}

export interface DonationTier {
  id: string;
  title: string;
  amount: number;
  dogCount: number;
  badge: string;
  tagline: string;
  description: string;
  popular?: boolean;
  bgGradient: string;
  iconColor: string;
}

export interface PaymentSuccessResult {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerificationResponse {
  success: boolean;
  message: string;
  orderId: string;
  paymentId: string;
  signature?: string;
  generatedSignature?: string;
  isSignatureValid?: boolean;
  verifiedAt?: string;
  error?: string;
}

export interface ConfigStatus {
  keyId: string;
  isConfigured: boolean;
  isTestMode: boolean;
  environment: string;
}

export interface CustomKeys {
  keyId: string;
  keySecret: string;
}

export type ModalType = 'about' | 'privacy' | 'terms' | 'contact' | 'renderGuide' | null;
