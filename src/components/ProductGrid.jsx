import React from 'react';

const FILTER_TAGS = [
  { key: 'all', label: 'All Treasures' },
  { key: 'urli', label: 'Brass Urlis' },
  { key: 'lamps', label: 'Lamps & Lanterns' },
  { key: 'pooja', label: 'Pooja Essentials' },
  { key: 'wallart', label: 'Pichwai Art' },
  { key: 'marble', label: 'Marble & Wood' }
];

export default function ProductGrid({
  products,
  activeCategory,
  onSelectCategory,
  formatPrice,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onOpenQuickView
}) {
  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section className="top-picks-section" id="top-picks-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Curated Masterpieces</span>
            <h2 className="section-title">Top Picks For You ✨</h2>
          </div>
          <button
            className="section-link-action"
            onClick={() => onSelectCategory('all')}
          >
            <span>See All Deals</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Filter Category Tags Row */}
        <div className="filter-tags-row">
          {FILTER_TAGS.map(tag => (
            <button
              key={tag.key}
              className={`filter-tag-pill ${activeCategory === tag.key ? 'active' : ''}`}
              onClick={() => onSelectCategory(tag.key)}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid" id="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => {
              const isSaved = wishlist.includes(prod.id);
              return (
                <article key={prod.id} className="product-card">
                  <div className="card-thumb-wrap">
                    <span className={`card-badge ${prod.badgeType}`}>{prod.discount}</span>
                    <button
                      className={`wishlist-toggle-btn ${isSaved ? 'active' : ''}`}
                      onClick={() => onToggleWishlist(prod.id)}
                      title={isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                      aria-label="Wishlist"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    
                    <img src={prod.image} alt={prod.name} className="card-img" loading="lazy" />
                    
                    <button className="quick-view-btn" onClick={() => onOpenQuickView(prod.id)}>
                      Quick View
                    </button>
                  </div>

                  <div className="card-body">
                    <span className="card-category">{prod.categoryLabel}</span>
                    <h3
                      className="card-title"
                      onClick={() => onOpenQuickView(prod.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {prod.name}
                    </h3>
                    
                    <div className="card-rating-row">
                      <span className="stars-gold">★★★★★</span>
                      <span className="reviews-count">({prod.reviewsCount})</span>
                    </div>

                    <div className="card-footer-row">
                      <div className="price-wrap">
                        <span className="price-current">{formatPrice(prod.priceINR)}</span>
                        <span className="price-original">{formatPrice(prod.originalINR)}</span>
                      </div>
                      
                      <button
                        className="add-cart-circle-btn"
                        onClick={() => onAddToCart(prod.id)}
                        title="Add to Bag"
                        aria-label="Add to Bag"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px', background: 'white', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-soft)' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '8px' }}>
                No handcrafted items match your filter
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Try selecting another category or clearing your search phrase.
              </p>
              <button
                className="btn-primary"
                style={{ marginTop: '16px' }}
                onClick={() => onSelectCategory('all')}
              >
                View All Collections
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
