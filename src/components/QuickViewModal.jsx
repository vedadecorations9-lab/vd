import React from 'react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  formatPrice
}) {
  if (!product) return null;

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <div className="center-modal active" role="dialog" aria-modal="true">
        <button className="modal-close-corner-btn" onClick={onClose} aria-label="Close modal">✕</button>
        <div className="quickview-layout">
          <div className="quickview-gallery">
            <img src={product.image} alt={product.name} className="quickview-main-img" />
          </div>
          <div className="quickview-info">
            <span className="quickview-category">{product.categoryLabel} • {product.origin}</span>
            <h2 className="quickview-title">{product.name}</h2>
            <div className="quickview-price-row">
              <span className="quickview-current-price">{formatPrice(product.priceINR)}</span>
              <span className="quickview-original-price">{formatPrice(product.originalINR)}</span>
              <span className="tag-badge" style={{ fontSize: '0.75rem' }}>{product.discount}</span>
            </div>
            <p className="quickview-desc">{product.description}</p>
            
            <div className="spec-list">
              <div><span className="spec-item-label">Craft Origin:</span> <div className="spec-item-val">{product.origin}</div></div>
              <div><span className="spec-item-label">Material:</span> <div className="spec-item-val">{product.material}</div></div>
              <div style={{ gridColumn: '1 / -1' }}>
                <span className="spec-item-label">Dimensions & Weight:</span> <div className="spec-item-val">{product.dimensions}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', marginTop: 'auto' }}>
              <button
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  onAddToCart(product.id);
                  onClose();
                }}
              >
                Add to Bag • {formatPrice(product.priceINR)}
              </button>
              <button
                className="btn-secondary"
                onClick={() => onToggleWishlist(product.id)}
                title="Wishlist"
              >
                {isWishlisted ? '❤️ Saved' : '🤍 Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
