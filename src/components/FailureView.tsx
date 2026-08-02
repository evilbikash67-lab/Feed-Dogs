import React from 'react';

interface FailureViewProps {
  error: string;
  onRetry: () => void;
}

export const FailureView: React.FC<FailureViewProps> = ({ error, onRetry }) => {
  return (
    <div className="max-w-xl mx-auto bg-white border border-[#E3D9C6] p-6 sm:p-8 text-[#2c221e] space-y-6 shadow-xs my-8">
      
      <div className="text-center space-y-2 border-b border-[#E3D9C6] pb-4">
        <span className="text-2xl">⚠️</span>
        <h2 className="font-serif font-bold text-2xl text-[#1b3b2b]">Payment Was Not Completed</h2>
        <p className="text-xs text-[#5a483c]">
          The donation process was interrupted or closed before completion.
        </p>
      </div>

      <div className="p-3 bg-[#FAF8F4] border border-[#E8E2D5] text-xs text-[#5a483c] space-y-1">
        <p className="font-bold text-[#1b3b2b]">Message details:</p>
        <p className="font-mono text-[11px] text-[#c25928]">{error || 'Checkout window closed or session expired.'}</p>
      </div>

      <div className="p-3 bg-[#F5F0E6] border border-[#E3D9C6] text-xs text-[#5a483c] space-y-1">
        <p className="font-bold text-[#1b3b2b]">To try again using Razorpay Test Mode:</p>
        <p>• Card: <strong>4111 1111 1111 1111</strong></p>
        <p>• Expiry: <strong>12/28</strong> | CVV: <strong>123</strong> | OTP: <strong>123456</strong></p>
      </div>

      <div className="pt-2 text-center">
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer"
        >
          Try Payment Again
        </button>
      </div>

    </div>
  );
};
