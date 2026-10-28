import React, { useState } from 'react';

export default function Newsletter({ onToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onToast(`Thank you! Welcome gift code sent to ${email}`, 'success');
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          
          <div className="newsletter-left">
            <div className="newsletter-icon-wrap" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <h3 className="newsletter-title">Stay in the Loop</h3>
              <p className="newsletter-desc">
                Get exclusive festive deals, limited artisan batch releases, and a ₹500 welcome voucher straight to your inbox.
              </p>
            </div>
          </div>

          <div className="newsletter-form-wrap">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <div className="newsletter-privacy">
              <span>🔒</span>
              <span>We respect your sacred privacy. Unsubscribe anytime with 1 click.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
