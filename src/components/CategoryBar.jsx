import React from 'react';

const CATEGORIES = [
  { 
    key: 'urli', 
    label: 'Brass Urli', 
    image: '/assets/images/product-urli.jpg',
    alt: 'Handcrafted Brass Urli with Floating Petals'
  },
  { 
    key: 'pooja', 
    label: 'Pooja Decor', 
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80',
    alt: 'Sacred Pooja Mandir Thali & Accents'
  },
  { 
    key: 'lamps', 
    label: 'Ambient Lamps', 
    image: '/assets/images/product-lantern.jpg',
    alt: 'Jaipur Jali Architectural Brass Lantern'
  },
  { 
    key: 'wallart', 
    label: 'Pichwai Art', 
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=400&q=80',
    alt: 'Heritage Pichwai Lotus Fresco Plate'
  },
  { 
    key: 'marble', 
    label: 'Marble Decor', 
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=400&q=80',
    alt: 'Makrana Fluted Carved Marble Catchall Bowl'
  },
  { 
    key: 'toran', 
    label: 'Festive Torans', 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
    alt: 'Silk & Gold Zari Doorway Toran'
  },
  { 
    key: 'wax', 
    label: 'Scented Wax', 
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&q=80',
    alt: 'Sandalwood & Saffron Soy Urli Candle'
  },
  { 
    key: 'bells', 
    label: 'Bells & Chimes', 
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80',
    alt: 'Sonorous Bronze Hanging Bell Windchime'
  },
  { 
    key: 'all', 
    label: 'View All', 
    image: '/assets/images/logo.png',
    alt: 'Browse All Veda Collections',
    isEmblem: true
  }
];

export default function CategoryBar({ activeCategory, onSelectCategory }) {
  return (
    <section className="categories-bar-section" aria-label="Product Categories">
      <div className="container">
        <div className="category-row">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              type="button"
              className={`cat-circle-card ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.key)}
              aria-label={`Filter by ${cat.label}`}
            >
              <div className="cat-icon-frame">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className={`cat-thumb-img ${cat.isEmblem ? 'cat-emblem-img' : ''}`}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback gracefully to logo if external unsplash fails
                    e.currentTarget.src = '/assets/images/logo.png';
                  }}
                />
              </div>
              <span className="cat-title">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
