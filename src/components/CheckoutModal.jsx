import React, { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, onCompleteOrder }) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleFinish = () => {
    const generated = `VEDA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generated);
    onCompleteOrder();
    setStep(3);
  };

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <div className="center-modal active" role="dialog" aria-modal="true">
        <button className="modal-close-corner-btn" onClick={onClose}>✕</button>
        <div className="checkout-modal-inner">
          
          {/* Steps Nav */}
          <div className="checkout-steps-nav">
            <div className={`step-indicator ${step === 1 ? 'active' : ''}`}>
              <span className="step-num">1</span>
              <span>Shipping Address</span>
            </div>
            <div className={`step-indicator ${step === 2 ? 'active' : ''}`}>
              <span className="step-num">2</span>
              <span>Payment Method</span>
            </div>
            <div className={`step-indicator ${step === 3 ? 'active' : ''}`}>
              <span className="step-num">3</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Step 1: Address Form */}
          {step === 1 && (
            <div className="checkout-step-pane active">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '8px' }}>Where should we deliver in Australia?</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>Complimentary local courier delivery across Greater Brisbane.</p>
              
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" defaultValue="Olivia Henderson" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Australian Mobile Number</label>
                  <input type="tel" className="form-input" defaultValue="+61 412 345 678" required />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Street Address & Apartment</label>
                <input type="text" className="form-input" defaultValue="Unit 14, 88 Macquarie Street" required />
              </div>
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="form-label">Suburb / City</label>
                  <input type="text" className="form-input" defaultValue="New Farm, Brisbane" required />
                </div>
                <div className="form-field">
                  <label className="form-label">State & Postcode</label>
                  <input type="text" className="form-input" defaultValue="QLD 4005" required />
                </div>
              </div>
              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                onClick={() => setStep(2)}
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="checkout-step-pane active">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '16px' }}>Select Australian Payment Option</h3>
              <div className="payment-method-options">
                <div
                  className={`payment-method-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="payment-icon">💳</div>
                  <div className="payment-title">Credit / Debit Card</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Visa, Mastercard, Amex</div>
                </div>
                <div
                  className={`payment-method-card ${paymentMethod === 'afterpay' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('afterpay')}
                >
                  <div className="payment-icon">🛍️</div>
                  <div className="payment-title">Afterpay / Zip</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Pay in 4 interest-free</div>
                </div>
                <div
                  className={`payment-method-card ${paymentMethod === 'applepay' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('applepay')}
                >
                  <div className="payment-icon">📱</div>
                  <div className="payment-title">Apple / Google Pay</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Instant 1-Tap Checkout</div>
                </div>
              </div>

              <div style={{ background: 'var(--color-bg-surface-soft)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '20px', fontSize: '0.8125rem' }}>
                🔒 <strong>Bank-Grade 256-Bit SSL Security:</strong> Dispatched with Australia Post transit damage insurance and signed proof of delivery.
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(1)}>Back</button>
                <button
                  className="btn-primary"
                  style={{ flex: 2, justifyContent: 'center' }}
                  onClick={handleFinish}
                >
                  Place Order & Dispatch ✨
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Order Confirmed Screen */}
          {step === 3 && (
            <div className="checkout-step-pane active">
              <div className="order-success-screen">
                <div className="order-success-icon">✓</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)' }}>Blessings Upon Your Home!</h2>
                <div className="order-id-badge">Order Confirmed: #{orderId}</div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', maxWidth: '460px', margin: '0 auto 24px auto' }}>
                  Your order has been routed to our Brisbane warehouse in Fortitude Valley, QLD. Your heirloom decor pieces will be carefully boxed with velvet cushioning and dispatched with Australia Post Express.
                </p>
                <button className="btn-primary" onClick={onClose}>Return to Storefront</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
