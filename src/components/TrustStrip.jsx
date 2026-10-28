import React from 'react';

export default function TrustStrip() {
  return (
    <section className="service-trust-section">
      <div className="container">
        <div className="service-grid">
          
          <div className="service-card">
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div>
              <h4 className="service-title">Brisbane Express Delivery</h4>
              <p className="service-sub">Free over $99 · Same-day dispatch QLD</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </div>
            <div>
              <h4 className="service-title">14-Day Easy Returns</h4>
              <p className="service-sub">Direct to our Fortitude Valley studio</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div>
              <h4 className="service-title">Secure AU Checkout</h4>
              <p className="service-sub">Afterpay, Zip, Cards & Apple Pay</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <h4 className="service-title">Brisbane Concierge Support</h4>
              <p className="service-sub">Showroom appointments available</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
