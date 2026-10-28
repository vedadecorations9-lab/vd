import React from 'react';

export default function Lookbook({ onOpenQuickView, onAddToCart, formatPrice }) {
  return (
    <section className="lookbook-section" id="lookbook-section">
      <div className="container">
        <div className="lookbook-container">
          
          {/* Interactive Stage with Hotspots */}
          <div className="lookbook-stage">
            <img src="/assets/images/hero-banner.jpg" alt="Veda Styled Festive Living Room" className="lookbook-img" />
            
            {/* Hotspot 1: Brass Urli */}
            <div
              className="hotspot-pin"
              style={{ top: '64%', left: '62%' }}
              onClick={() => onOpenQuickView('veda-01')}
              title="Click to view Mayura Urli"
            >
              <span>+</span>
            </div>

            {/* Hotspot 2: Architectural Lantern */}
            <div
              className="hotspot-pin"
              style={{ top: '56%', left: '28%' }}
              onClick={() => onOpenQuickView('veda-02')}
              title="Click to view Jaipur Lantern"
            >
              <span>+</span>
            </div>

            {/* Hotspot 3: Pichwai Wall Plate */}
            <div
              className="hotspot-pin"
              style={{ top: '30%', left: '82%' }}
              onClick={() => onOpenQuickView('veda-03')}
              title="Click to view Pichwai Art"
            >
              <span>+</span>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lookbook-sidebar">
            <span className="lookbook-eyebrow">Interactive Visualizer</span>
            <h2 className="lookbook-title">Shop The Grand Living Look</h2>
            <p className="lookbook-desc">
              Hover and tap the glowing golden pins on our styled living sanctuary to inspect artisan dimensions, craft materials, and add directly to your bag.
            </p>

            <div className="lookbook-featured-card">
              <img src="/assets/images/product-urli.jpg" alt="Mayura Royal Urli" className="lookbook-card-thumb" />
              <div className="lookbook-card-info">
                <h4 className="lookbook-card-title">Mayura Lotus Royal Brass Urli</h4>
                <div className="lookbook-card-price">{formatPrice(4850)}</div>
              </div>
              <button
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
                onClick={() => onAddToCart('veda-01')}
              >
                Add to Bag
              </button>
            </div>

            <button
              className="btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
              onClick={() => onOpenQuickView('veda-02')}
            >
              Inspect Ambient Lantern
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
