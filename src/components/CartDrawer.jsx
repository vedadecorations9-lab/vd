import React, { useState } from 'react';
import { COUPONS } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  products,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
  formatPrice,
  onToast
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  if (!isOpen) return null;

  // Calculate pricing
  let rawSubtotalINR = 0;
  const cartItemsWithDetails = cart.map(item => {
    const prod = products.find(p => p.id === item.productId);
    if (!prod) return null;
    const itemTotal = prod.priceINR * item.qty;
    rawSubtotalINR += itemTotal;
    return { ...prod, qty: item.qty };
  }).filter(Boolean);

  let discountINR = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountINR = Math.round(rawSubtotalINR * (appliedCoupon.discountPercent / 100));
    } else if (appliedCoupon.flatDiscountINR) {
      discountINR = appliedCoupon.flatDiscountINR;
    }
  }

  const thresholdINR = 1999;
  const isFreeShipping = rawSubtotalINR >= thresholdINR;
  const shippingINR = isFreeShipping ? 0 : (cart.length > 0 ? 250 : 0);
  const grandTotalINR = Math.max(0, rawSubtotalINR - discountINR + shippingINR);
  const shippingPercent = Math.min(100, (rawSubtotalINR / thresholdINR) * 100);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (COUPONS[code]) {
      setAppliedCoupon(COUPONS[code]);
      onToast(`Coupon "${code}" applied: ${COUPONS[code].label}!`, 'success');
      setCouponCode('');
    } else {
      onToast('Invalid coupon. Try "VEDA10" or "FESTIVE20"', 'gold');
    }
  };

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <aside className="slide-drawer active" aria-label="Shopping Cart">
        <div className="drawer-header">
          <h3 className="drawer-title">
            <span>Sacred Shopping Bag</span>
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Bag">✕</button>
        </div>

        {/* Free Shipping Progress */}
        <div className="shipping-progress-box">
          <div className="shipping-progress-text">
            {isFreeShipping ? (
              <span>🎉 <strong>Complimentary Express Shipping Unlocked!</strong></span>
            ) : (
              <span>Add <strong>{formatPrice(thresholdINR - rawSubtotalINR)}</strong> more for Complimentary Express Shipping</span>
            )}
          </div>
          <div className="shipping-bar-bg">
            <div className="shipping-bar-fill" style={{ width: `${shippingPercent}%` }} />
          </div>
        </div>

        {/* Items List */}
        <div className="drawer-body">
          {cartItemsWithDetails.length > 0 ? (
            cartItemsWithDetails.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <div className="cart-item-price">{formatPrice(item.priceINR)}</div>
                  <div className="cart-qty-row">
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>-</button>
                      <span className="qty-val">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                    </div>
                    <button className="cart-item-remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="drawer-empty-state">
              <div className="empty-icon">🪔</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>Your Sacred Bag is Empty</h4>
              <p style={{ fontSize: '0.875rem' }}>Discover our handcrafted urlis, pooja thalis, and festive lamps.</p>
              <button className="btn-primary" style={{ marginTop: '12px' }} onClick={onClose}>Start Browsing</button>
            </div>
          )}
        </div>

        {/* Footer with Breakdown */}
        {cartItemsWithDetails.length > 0 && (
          <div className="drawer-footer">
            <div className="coupon-row">
              <input
                type="text"
                className="coupon-input"
                placeholder="Promo code (VEDA10, FESTIVE20)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="coupon-btn" onClick={handleApplyCoupon}>Apply</button>
            </div>

            <div className="price-breakdown-row">
              <span>Subtotal</span>
              <span>{formatPrice(rawSubtotalINR)}</span>
            </div>
            {appliedCoupon && (
              <div className="price-breakdown-row">
                <span>Artisan Privilege Discount ({appliedCoupon.label})</span>
                <span style={{ color: '#2E7D32' }}>-{formatPrice(discountINR)}</span>
              </div>
            )}
            <div className="price-breakdown-row">
              <span>Insured Courier Shipping</span>
              <span>{isFreeShipping ? 'FREE' : formatPrice(shippingINR)}</span>
            </div>
            <div className="price-breakdown-row total-row">
              <span>Grand Total</span>
              <span>{formatPrice(grandTotalINR)}</span>
            </div>

            <button className="checkout-action-btn" onClick={onCheckout}>
              Proceed to Secure Checkout →
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
