import React from 'react';

export default function Hero({ onShopNow, onShopLook }) {
  return (
    <section
      className="hero-fullsize-banner"
      id="home"
      style={{ backgroundImage: "url('/assets/images/hero-banner.jpg')" }}
      aria-label="Veda Decorations Brisbane Hero Banner"
    >
      {/* High-Contrast Gradient Scrim Overlay for 100% Text Legibility */}
      <div className="hero-fullsize-scrim">
        <div className="container hero-fullsize-inner">
          
          {/* Left: Written Editorial Content (High Contrast & Visible) */}
          <div className="hero-fullsize-copy">
            
            {/* Brisbane Location Eyebrow */}
            <div className="hero-full-eyebrow">
              <span className="hero-full-pill">✦ BRISBANE, QLD · ARTISANAL LUXURY DECOR</span>
              <span className="hero-full-subtext">Showroom & Studio in Fortitude Valley</span>
            </div>

            {/* Grand Headline with Gold Script Accent */}
            <h1 className="hero-full-title">
              Elevate Your Sanctuary <br />
              <span className="hero-full-title-gold">With Sacred Craft</span>
            </h1>

            {/* High-Contrast Action CTAs */}
            <div className="hero-full-cta-group">
              <button className="btn-primary-gold" onClick={onShopNow}>
                <span>Explore Brisbane Collection</span>
                <div className="btn-icon-gold-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
              
              <button className="btn-secondary-glass" onClick={onShopLook}>
                <span>Shop Room Lookbook ✨</span>
              </button>
            </div>

            {/* Brisbane Trust Strip */}
            <div className="hero-full-trust-strip">
              <div className="hero-trust-badge">
                <span className="hero-trust-icon">📍</span>
                <span>Brisbane Showroom & Stock</span>
              </div>
              <div className="hero-trust-badge">
                <span className="hero-trust-icon">🚚</span>
                <span>Same-Day QLD Dispatch</span>
              </div>
              <div className="hero-trust-badge">
                <span className="hero-trust-icon">⭐</span>
                <span>4.9/5 Rating (1,200+ AU Homes)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}