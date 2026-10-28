import React from 'react';
import { CURRENCIES, BRISBANE_STORE_INFO } from '../data/products';

export default function Footer({ currency, setCurrency, onSelectCategory, onOpenTrackOrder }) {
  const toggleCurrency = () => {
    const next = currency === 'AUD' ? 'USD' : currency === 'USD' ? 'INR' : 'AUD';
    setCurrency(next);
  };

  return (
    <footer className="main-footer" id="artisan-heritage">
      <div className="container">
        
        <div className="footer-top-grid">
          
          {/* 1. Brand & Brisbane Studio */}
          <div className="footer-col-brand">
            <div className="footer-logo-row">
              <img src="/assets/images/logo.png" alt="Veda Decorations Brisbane" className="footer-brand-logo" />
              <div>
                <div className="footer-logo-title">VEDA</div>
                <div className="footer-logo-tag">Brisbane, Queensland</div>
              </div>
            </div>
            
            <p className="footer-about">
              Museum-grade handcrafted Indian festive decor, heirloom brassware, carved marble, and ambient lanterns.
            </p>

            <div className="footer-brisbane-hq-box">
              <div className="hq-line">📍 {BRISBANE_STORE_INFO.address}, {BRISBANE_STORE_INFO.city} QLD {BRISBANE_STORE_INFO.postcode}</div>
              <div className="hq-line">📞 {BRISBANE_STORE_INFO.phone} · ABN {BRISBANE_STORE_INFO.abn}</div>
            </div>

            <div className="social-links">
              <a href="#instagram" className="social-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#facebook" className="social-btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#pinterest" className="social-btn" aria-label="Pinterest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              </a>
              <a href="#youtube" className="social-btn" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* 2. Collections */}
          <div>
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('all')}>All Collections</a></li>
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('urli')}>Brass Urlis & Basins</a></li>
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('pooja')}>Pooja Mandir Sets</a></li>
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('lamps')}>Ambient Jali Lanterns</a></li>
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('wallart')}>Pichwai Lotus Plates</a></li>
              <li className="footer-link-item"><a href="#top-picks-section" onClick={() => onSelectCategory('marble')}>Makrana Marble Decor</a></li>
            </ul>
          </div>

          {/* 3. Brisbane Service */}
          <div>
            <h4 className="footer-heading">Client Care</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#track" onClick={(e) => { e.preventDefault(); onOpenTrackOrder(); }}>Track Australia Post Order</a></li>
              <li className="footer-link-item"><a href="#shipping">Greater Brisbane Delivery</a></li>
              <li className="footer-link-item"><a href="#returns">14-Day Studio Return Policy</a></li>
              <li className="footer-link-item"><a href="#care">Brass & Marble Longevity Guide</a></li>
              <li className="footer-link-item"><a href="#contact">Contact Brisbane Concierge</a></li>
            </ul>
          </div>

          {/* 4. Payment & Checkout */}
          <div>
            <h4 className="footer-heading">AU Checkout & Trust</h4>
            <p style={{ fontSize: '0.78125rem', color: 'var(--color-text-light-muted)', marginBottom: '10px', lineHeight: '1.4' }}>
              Free standard dispatch across Australia over $150 AUD. Transit insurance included on every order.
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.71875rem', color: 'var(--color-gold)' }}>
              ✓ 100% Australian Owned & Operated
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>© 2026 Veda Decorations Pty Ltd (ABN 48 619 824 102). Brisbane, Queensland.</div>
          
          <div className="footer-legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>

          <div
            className="country-currency-picker"
            onClick={toggleCurrency}
            style={{ cursor: 'pointer' }}
            title="Toggle Currency"
          >
            <span>{CURRENCIES[currency]?.flag} {CURRENCIES[currency]?.code} ({CURRENCIES[currency]?.symbol})</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

      </div>
    </footer>
  );
}
