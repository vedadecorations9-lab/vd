import React from 'react';

export default function Reviews({ onOpenReviewModal }) {
  return (
    <section className="reviews-section" id="reviews-section">
      <div className="container">
        
        <div className="section-header-row">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Customer Voices</span>
            <h2 className="section-title">Loved By Thousands ❤️</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem' }}>
              4.95 / 5.0 Average Rating ★★★★★
            </span>
            <button
              className="btn-secondary"
              style={{ padding: '6px 16px', fontSize: '0.8125rem' }}
              onClick={onOpenReviewModal}
            >
              Write a Review
            </button>
          </div>
        </div>

        <div className="reviews-grid">
          
          {/* Review 1 */}
          <article className="review-card">
            <div className="review-author-row">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Ananya Sharma" className="review-avatar" />
              <div>
                <div className="review-author-name">
                  <span>Ananya Sharma</span>
                  <span className="verified-icon" title="Verified Buyer">✓</span>
                </div>
                <div className="review-author-meta">Mumbai, MH • Verified Buyer</div>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "The Mayura Peacock Urli is pure poetry. The weight of the solid brass and the gentle water reflections with floating tea lights transformed our Diwali foyer. Exceptional packaging!"
            </p>
            <span className="review-product-tag">Purchased: Mayura Royal Brass Urli</span>
          </article>

          {/* Review 2 */}
          <article className="review-card">
            <div className="review-author-row">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Vikram Malhotra" className="review-avatar" />
              <div>
                <div className="review-author-name">
                  <span>Vikram Malhotra</span>
                  <span className="verified-icon" title="Verified Buyer">✓</span>
                </div>
                <div className="review-author-meta">New Delhi • Verified Buyer</div>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "The Jaipur Jali Lantern casts breathtaking geometric shadows across our balcony wall. High-end craft at transparent artisan prices. Delivered safely in 2 days."
            </p>
            <span className="review-product-tag">Purchased: Jaipur Jali Lantern</span>
          </article>

          {/* Review 3 */}
          <article className="review-card">
            <div className="review-author-row">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Priya K." className="review-avatar" />
              <div>
                <div className="review-author-name">
                  <span>Priya K.</span>
                  <span className="verified-icon" title="Verified Buyer">✓</span>
                </div>
                <div className="review-author-meta">Bengaluru, KA • Verified Buyer</div>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "I love the variety and timeless sacred touch Veda brings. From the Ashtalakshmi thali to the sandalwood soy candle, everything feels blessed and exquisite."
            </p>
            <span className="review-product-tag">Purchased: Ashtalakshmi Thali Set</span>
          </article>

        </div>

      </div>
    </section>
  );
}
