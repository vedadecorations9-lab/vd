import React from 'react';

export default function BentoPromos({ onSelectCategory, onShopLook }) {
  return (
    <section className="promo-bento-section">
      <div className="container">
        <div className="bento-grid">
          
          {/* Bento 1: Fresh Festive Styles */}
          <article className="bento-card tint-sage">
            <div className="bento-header">
              <div className="bento-tag">New Season Arrivals</div>
              <h3 className="bento-title">Fresh Festive Styles Just In</h3>
              <button
                className="bento-cta"
                onClick={() => onSelectCategory('urli')}
              >
                <span>Explore Urli Sets</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            <img src="/assets/images/product-urli.jpg" alt="Brass Urli Accent" className="bento-art-asset" />
          </article>

          {/* Bento 2: Living Room Sanctuary */}
          <article className="bento-card tint-sand">
            <div className="bento-header">
              <div className="bento-tag">Sanctuary Styling</div>
              <h3 className="bento-title">Make Your Space Better</h3>
              <button
                className="bento-cta"
                onClick={onShopLook}
              >
                <span>View Inspiration</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" alt="Living Room Decor" className="bento-art-asset" />
          </article>

          {/* Bento 3: Ambient Illumination */}
          <article className="bento-card tint-blue">
            <div className="bento-header">
              <div className="bento-tag">Sacred Illumination</div>
              <h3 className="bento-title">Lamps That Breathe Warmth</h3>
              <button
                className="bento-cta"
                onClick={() => onSelectCategory('lamps')}
              >
                <span>Shop Lanterns</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            <img src="/assets/images/product-lantern.jpg" alt="Jaipur Brass Lantern" className="bento-art-asset" />
          </article>

        </div>
      </div>
    </section>
  );
}
