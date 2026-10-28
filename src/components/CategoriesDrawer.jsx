import React from 'react';

const CATEGORIES = [
  { key: 'urli', label: 'Brass Urlis & Bowls', emoji: '🪔' },
  { key: 'pooja', label: 'Pooja Mandir Thalis', emoji: '🪷' },
  { key: 'lamps', label: 'Jaipur Lattice Lanterns', emoji: '🏮' },
  { key: 'wallart', label: 'Pichwai Lotus Fresco', emoji: '🖼️' },
  { key: 'marble', label: 'White Makrana Marble', emoji: '🏛️' },
  { key: 'toran', label: 'Silk Zari Door Torans', emoji: '🌿' },
  { key: 'wax', label: 'Sandalwood Soy Candles', emoji: '🕯️' },
  { key: 'bells', label: 'Tuned Bronze Windchimes', emoji: '🔔' },
  { key: 'all', label: 'View Complete Catalog', emoji: '✨' }
];

export default function CategoriesDrawer({ isOpen, onClose, onSelectCategory }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <aside
        className="slide-drawer active"
        style={{ right: 'auto', left: 0, transform: 'translateX(0)' }}
        aria-label="Category Navigation"
      >
        <div className="drawer-header">
          <h3 className="drawer-title">Explore Collections</h3>
          <button className="drawer-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="drawer-body">
          {CATEGORIES.map(cat => (
            <div
              key={cat.key}
              className="mobile-nav-item"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onSelectCategory(cat.key);
                onClose();
              }}
            >
              <span>{cat.emoji} {cat.label}</span>
              <span>→</span>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
