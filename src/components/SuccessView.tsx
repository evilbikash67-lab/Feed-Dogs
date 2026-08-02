import React, { useState } from 'react';
import { VerificationResponse, CustomerDetails } from '../types';

interface SuccessViewProps {
  result: VerificationResponse;
  customer: CustomerDetails;
  amount: number;
  dogCount?: number;
  onReset: () => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({
  result,
  customer,
  amount,
  dogCount = Math.max(1, Math.floor(amount / 10)),
  onReset
}) => {
  const [copied, setCopied] = useState(false);

  const receiptReference = `FEEDDOG-REC-${result.paymentId || 'TXN100'}`;

  const handleCopyReceiptRef = () => {
    navigator.clipboard.writeText(`NGO Receipt Ref: ${receiptReference} | Amount: ₹${amount} | Donor: ${customer.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCertificate = () => {
    const certContent = `
==========================================================
             FEED A DOG WELFARE TRUST (#DEL/NGO/2023)
             OFFICIAL DONATION CERTIFICATE
==========================================================

Thank you, ${customer.name}!

This certificate certifies that your generous donation of ₹${amount}.00 INR
has been received and verified successfully.

IMPACT STATEMENT:
🐾 You have helped feed ${dogCount} stray dog(s) on our street feeding routes today!

DONATION & RECEIPT DETAILS:
- Donor Name: ${customer.name}
- Email: ${customer.email}
- Dedication: ${customer.dedication || 'General Stray Meal Fund'}
- Amount: ₹${amount}.00 INR
- Date: ${new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })}
- Order Reference ID: ${result.orderId}
- Payment Transaction ID: ${result.paymentId}
- Tax Exemption Status: Section 80G Certified

On behalf of street dogs everywhere, thank you for your compassion! ❤️

Feed A Dog Welfare Trust
Plot 14, Lane 3, Anand Nagar, Sanganer Road, Jaipur, Rajasthan 302015
Website: https://feedadog.org
==========================================================
    `.trim();

    const blob = new Blob([certContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FeedADog-Certificate-${result.paymentId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-[#E3D9C6] p-6 sm:p-8 text-[#2c221e] space-y-6 shadow-xs my-8">
      
      {/* Header */}
      <div className="text-center space-y-2 border-b border-[#E3D9C6] pb-4">
        <span className="text-2xl">🐾</span>
        <h2 className="font-serif font-bold text-2xl text-[#1b3b2b]">
          Thank you for feeding stray dogs today
        </h2>
        <p className="text-sm font-medium text-[#c25928]">
          Your ₹{amount} contribution sponsors {dogCount} warm meal bowl{dogCount > 1 ? 's' : ''} on today's route.
        </p>
      </div>

      {/* Verification Note */}
      <div className="p-3 bg-[#F5F0E6] border border-[#E3D9C6] text-xs text-[#1b3b2b] font-medium flex justify-between items-center">
        <span>✓ Payment Verified & Authenticated</span>
        <span className="font-mono text-[11px] font-bold text-[#5a483c]">80G Tax Exemption Eligible</span>
      </div>

      {/* Details Table */}
      <div className="bg-[#FAF8F4] border border-[#E8E2D5] p-4 text-xs space-y-2.5">
        <div className="flex justify-between pb-1.5 border-b border-[#E8E2D5]">
          <span className="text-[#5a483c]">Donor Name:</span>
          <span className="font-bold text-[#1b3b2b]">{customer.name}</span>
        </div>

        <div className="flex justify-between pb-1.5 border-b border-[#E8E2D5]">
          <span className="text-[#5a483c]">Amount Donated:</span>
          <span className="font-serif font-bold text-sm text-[#c25928]">₹{amount}.00 INR</span>
        </div>

        <div className="flex justify-between pb-1.5 border-b border-[#E8E2D5]">
          <span className="text-[#5a483c]">Meals Provided:</span>
          <span className="font-bold text-[#1b3b2b]">{dogCount} Dog Bowl(s)</span>
        </div>

        {customer.dedication && (
          <div className="flex justify-between pb-1.5 border-b border-[#E8E2D5]">
            <span className="text-[#5a483c]">Dedication:</span>
            <span className="font-medium text-[#2c221e] italic">"{customer.dedication}"</span>
          </div>
        )}

        <div className="flex justify-between pb-1.5 border-b border-[#E8E2D5]">
          <span className="text-[#5a483c]">Razorpay Payment ID:</span>
          <span className="font-mono font-bold text-[#1b3b2b]">{result.paymentId}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#5a483c]">Order Ref ID:</span>
          <span className="font-mono font-medium text-[#5a483c]">{result.orderId}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <button
          onClick={handleDownloadCertificate}
          className="py-2.5 px-3 bg-[#1b3b2b] hover:bg-[#12281d] text-white font-medium transition-colors cursor-pointer text-center"
        >
          Download Tax Certificate
        </button>

        <button
          onClick={handleCopyReceiptRef}
          className="py-2.5 px-3 bg-[#FAF8F4] hover:bg-[#F5F0E6] border border-[#E3D9C6] text-[#2c221e] font-medium transition-colors cursor-pointer text-center"
        >
          {copied ? 'Copied Reference!' : 'Copy Receipt Details'}
        </button>

        <button
          onClick={onReset}
          className="sm:col-span-2 py-2.5 px-3 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium transition-colors cursor-pointer text-center"
        >
          Make Another Donation
        </button>
      </div>

    </div>
  );
};
