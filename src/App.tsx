import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DonationCards } from './components/DonationCards';
import { ImpactSection } from './components/ImpactSection';
import { SuccessView } from './components/SuccessView';
import { FailureView } from './components/FailureView';
import { Footer } from './components/Footer';
import { AboutView, ContactView, PrivacyPolicyView, TermsView, GalleryView, TestimonialsSection, FaqSection } from './components/NgoPages';
import { triggerRazorpayCheckout } from './utils/razorpay';
import { CustomerDetails, ConfigStatus, VerificationResponse } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'donate' | 'about' | 'impact' | 'gallery' | 'contact' | 'privacy' | 'terms'>('home');
  const [config, setConfig] = useState<ConfigStatus | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentSuccessResult, setPaymentSuccessResult] = useState<VerificationResponse | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  const [lastDonatedAmount, setLastDonatedAmount] = useState<number>(20);
  const [lastDogCount, setLastDogCount] = useState<number>(2);

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '9876543210',
    dedication: 'For stray pups everywhere ❤️'
  });

  // Fetch Razorpay configuration status on mount silently
  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/config');
      if (res.ok) {
        const data = await res.json();
        setConfig(data);
      }
    } catch (err) {
      console.warn('Config fetch warning:', err);
    }
  };

  const handleInitiatePayment = async (amount: number = 20, dogCount: number = 2) => {
    setIsLoading(true);
    setPaymentError(null);
    setPaymentSuccessResult(null);
    setLastDonatedAmount(amount);
    setLastDogCount(dogCount);

    try {
      // Step 1: Create Order on Express Backend
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: 'INR',
          notes: {
            cause: 'Feed A Dog NGO Stray Relief',
            dogCount,
            donorName: customer.name
          }
        })
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success || !orderData.order) {
        throw new Error(orderData.error || 'Failed to create donation order on server');
      }

      const order = orderData.order;
      const keyIdToUse = orderData.keyId || config?.keyId || 'rzp_test_demo_key';

      // Step 2: Open Razorpay Checkout Modal
      await triggerRazorpayCheckout({
        keyId: keyIdToUse,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency || 'INR',
        name: 'Feed A Dog NGO',
        description: `Stray Dog Meal Fund - ₹${amount} (${dogCount} Meal Bowls)`,
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: customer.phone
        },
        onSuccess: async (paymentResult) => {
          // Step 3: Verify Signature on Backend
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(paymentResult)
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setPaymentSuccessResult(verifyData);
            } else {
              setPaymentError(verifyData.error || verifyData.message || 'Payment signature verification failed');
            }
          } catch (verifyErr: any) {
            setPaymentError(verifyErr.message || 'Failed to communicate with signature verification service');
          } finally {
            setIsLoading(false);
          }
        },
        onDismiss: () => {
          setIsLoading(false);
          setPaymentError('Donation cancelled: The checkout window was closed before completing your payment.');
        },
        onError: (err: any) => {
          setIsLoading(false);
          setPaymentError(err?.description || err?.reason || 'Checkout encountered an issue. Please try again.');
        }
      });

    } catch (err: any) {
      console.error('Error initiating donation:', err);
      setPaymentError(err.message || 'Donation initiation failed. Please try again.');
      setIsLoading(false);
    }
  };

  const handleResetPaymentState = () => {
    setPaymentSuccessResult(null);
    setPaymentError(null);
    setIsLoading(false);
  };

  const scrollToDonationSection = () => {
    setActiveTab('home');
    setTimeout(() => {
      const el = document.getElementById('donation-cards-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToImpactSection = () => {
    setActiveTab('home');
    setTimeout(() => {
      const el = document.getElementById('impact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#2c221e] flex flex-col font-sans antialiased selection:bg-[#c25928] selection:text-white">
      
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDonateClick={scrollToDonationSection}
      />

      {/* Main NGO Views */}
      <main className="flex-1">
        {(activeTab === 'home' || activeTab === 'donate') && (
          <div>
            {/* Hero Section */}
            <Hero
              onDonateClick={scrollToDonationSection}
              onImpactClick={scrollToImpactSection}
            />

            {/* Donation Cards & Razorpay Flow */}
            {paymentSuccessResult ? (
              <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SuccessView
                  result={paymentSuccessResult}
                  customer={customer}
                  amount={lastDonatedAmount}
                  dogCount={lastDogCount}
                  onReset={handleResetPaymentState}
                />
              </section>
            ) : paymentError ? (
              <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <FailureView
                  error={paymentError}
                  onRetry={handleResetPaymentState}
                />
              </section>
            ) : (
              <>
                <DonationCards
                  customer={customer}
                  setCustomer={setCustomer}
                  onInitiatePayment={handleInitiatePayment}
                  isLoading={isLoading}
                  config={config}
                />

                <ImpactSection
                  onDonateNowClick={scrollToDonationSection}
                />

                <TestimonialsSection />

                <FaqSection />
              </>
            )}
          </div>
        )}

        {activeTab === 'about' && (
          <AboutView onDonateClick={scrollToDonationSection} />
        )}

        {activeTab === 'impact' && (
          <div className="py-6">
            <ImpactSection onDonateNowClick={scrollToDonationSection} />
          </div>
        )}

        {activeTab === 'gallery' && (
          <GalleryView />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}

        {activeTab === 'privacy' && (
          <PrivacyPolicyView />
        )}

        {activeTab === 'terms' && (
          <TermsView />
        )}
      </main>

      {/* Official NGO Footer */}
      <Footer onNavigate={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

    </div>
  );
}
