import React, { useState, useRef, useEffect } from 'react';

export default function Header({
  currency,
  setCurrency,
  formatPrice,
  products,
  activeCategory,
  onSelectCategory,
  onOpenCategories,
  onOpenQuickView,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenTrackOrder,
  onOpenAdmin,
  onOpenMobileMenu
}) {
  const [searchVal, setSearchVal] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [collectionsMenuOpen, setCollectionsMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const collectionsRef = useRef(null);

  // Filter products for live visual search
  const searchResults = searchVal.trim().length >= 2
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchVal.toLowerCase()) ||
        p.category.toLowerCase().includes(searchVal.toLowerCase()) ||
        (p.material && p.material.toLowerCase().includes(searchVal.toLowerCase()))
      ).slice(0, 6)
    : [];

  // Focus input when search opens
  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchModalOpen]);

  // Handle Escape key & outside clicks
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setCollectionsMenuOpen(false);
      }
    }
    function handleClickOutside(e) {
      if (collectionsRef.current && !collectionsRef.current.contains(e.target)) {
        setCollectionsMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const CATEGORY_ITEMS = [
    { id: 'all', label: 'All Creations', tag: 'Curated' },
    { id: 'urli', label: 'Brass Urlis & Basins', tag: 'Bestseller' },
    { id: 'lamps', label: 'Ambient Jali Lamps', tag: 'Handmade' },
    { id: 'pooja', label: 'Sacred Pooja Decor', tag: 'Heirloom' },
    { id: 'wallart', label: 'Udaipur Pichwai Art', tag: 'Fresco' },
    { id: 'marble', label: 'Makrana Marble Catchalls', tag: 'Sculpted' },
  ];

  return (
    <>
      <header className="luxury-navbar" role="banner">
        <div className="luxury-navbar-inner">
          
          {/* LEFT ZONE: Mobile Menu Toggle + Brand Lockup */}
          <div className="nav-zone-left">
            <button
              className="nav-mobile-btn show-mobile"
              onClick={onOpenMobileMenu}
              aria-label="Open navigation menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Brand Logo Lockup */}
            <a href="#home" className="luxury-brand-lockup" aria-label="Veda Decorations Brisbane Home">
              <img
                src="/assets/images/logo.png"
                alt="Veda Decorations Logo"
                className="luxury-brand-avatar"
              />
              <div className="luxury-brand-text">
                <div className="brand-title-row">
                  <span className="brand-wordmark">VEDA</span>
                </div>
                <span className="brand-heritage-kicker">Artisanal Heritage Decor</span>
              </div>
            </a>
          </div>

          {/* CENTER ZONE: Editorial Navigation Links */}
          <nav className="nav-zone-center hide-mobile" aria-label="Main Navigation">
            <ul className="nav-menu-list">
              
              {/* Collection Dropdown */}
              <li className="nav-menu-item dropdown-parent" ref={collectionsRef}>
                <button
                  type="button"
                  className={`nav-link-btn ${collectionsMenuOpen ? 'active' : ''}`}
                  onClick={() => setCollectionsMenuOpen(!collectionsMenuOpen)}
                  onMouseEnter={() => setCollectionsMenuOpen(true)}
                  aria-expanded={collectionsMenuOpen}
                >
                  <span>Collection</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {collectionsMenuOpen && (
                  <div
                    className="luxury-nav-dropdown"
                    onMouseLeave={() => setCollectionsMenuOpen(false)}
                  >
                    <div className="dropdown-category-grid">
                      {CATEGORY_ITEMS.map(cat => (
                        <button
                          key={cat.id}
                          className={`dropdown-cat-card ${activeCategory === cat.id ? 'selected' : ''}`}
                          onClick={() => {
                            onSelectCategory(cat.id);
                            setCollectionsMenuOpen(false);
                            const el = document.getElementById('top-picks-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span className="cat-card-title">{cat.label}</span>
                          <span className="cat-card-tag">{cat.tag}</span>
                        </button>
                      ))}
                    </div>
                    <div className="dropdown-footer-bar">
                      <button
                        className="dropdown-all-btn"
                        onClick={() => {
                          onOpenCategories();
                          setCollectionsMenuOpen(false);
                        }}
                      >
                        Explore All Decor Categories & Materials →
                      </button>
                    </div>
                  </div>
                )}
              </li>

              {/* Festive Special */}
              <li className="nav-menu-item">
                <a
                  href="#top-picks-section"
                  className="nav-link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('urli');
                    const el = document.getElementById('top-picks-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Festive Decor</span>
                  <span className="nav-micro-badge">SALE</span>
                </a>
              </li>

              {/* Room Lookbook */}
              <li className="nav-menu-item">
                <a
                  href="#lookbook-section"
                  className="nav-link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('lookbook-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Lookbook</span>
                </a>
              </li>

              {/* Artisan Heritage Stories */}
              <li className="nav-menu-item">
                <a href="#artisan-heritage" className="nav-link-btn">
                  <span>Artisan Stories</span>
                </a>
              </li>

              {/* Brisbane Studio */}
              <li className="nav-menu-item">
                <a
                  href="#track-order"
                  className="nav-link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenTrackOrder();
                  }}
                >
                  <span>Track Order</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* RIGHT ZONE: Search Trigger + Admin HQ + Wishlist + Cart */}
          <div className="nav-zone-right">
            
            {/* Quick Search Trigger Pill */}
            <button
              type="button"
              className="nav-search-trigger"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search decor collections"
              title="Search handcrafted decor"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className="search-trigger-placeholder hide-mobile">Search pieces...</span>
              <kbd className="search-shortcut hide-mobile">⌘K</kbd>
            </button>

            {/* Admin HQ Pill */}
            <button
              type="button"
              className="admin-hq-pill-btn"
              onClick={onOpenAdmin}
              title="Open Veda Admin HQ"
              aria-label="Open Admin Dashboard"
            >
              <span className="admin-hq-pulse"></span>
              <span className="admin-hq-text">Admin HQ</span>
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="nav-icon-action-btn hide-mobile"
              onClick={onOpenWishlist}
              title="Saved Wishlist"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {wishlistCount > 0 && <span className="nav-micro-counter">{wishlistCount}</span>}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              type="button"
              className="nav-cart-btn"
              onClick={onOpenCart}
              title="View Shopping Bag"
              aria-label={`Cart with ${cartCount} items`}
            >
              <div className="cart-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="cart-badge-number">{cartCount}</span>
              </div>
              <span className="cart-btn-label hide-mobile">Bag</span>
            </button>

          </div>

        </div>
      </header>

      {/* =========================================================================
         LUXURY LIVE SEARCH OVERLAY MODAL
         ========================================================================= */}
      {searchModalOpen && (
        <div className="search-overlay-backdrop" onClick={() => setSearchModalOpen(false)}>
          <div className="search-overlay-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Search Input Box */}
            <div className="search-modal-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E251C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                className="search-modal-input"
                placeholder="Search brass urlis, pooja thalis, jali lanterns, marble..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              {searchVal && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchVal('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <button
                type="button"
                className="search-close-esc-btn"
                onClick={() => setSearchModalOpen(false)}
                title="Close search"
              >
                ESC
              </button>
            </div>

            {/* Quick Trend Tags */}
            <div className="search-quick-tags">
              <span className="quick-tags-label">Trending in Brisbane:</span>
              {['Mayura Urli', 'Pooja Thali', 'Jali Lanterns', 'Pichwai Art', 'Marble Catchall'].map(tag => (
                <button
                  key={tag}
                  type="button"
                  className="search-tag-chip"
                  onClick={() => setSearchVal(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Live Visual Search Results */}
            <div className="search-results-container">
              {searchVal.trim().length >= 2 ? (
                searchResults.length > 0 ? (
                  <div className="search-results-grid">
                    {searchResults.map(p => (
                      <div
                        key={p.id}
                        className="search-result-card"
                        onClick={() => {
                          onOpenQuickView(p.id);
                          setSearchModalOpen(false);
                          setSearchVal('');
                        }}
                      >
                        <img src={p.image} alt={p.name} className="search-result-image" />
                        <div className="search-result-content">
                          <span className="result-cat-tag">{p.categoryLabel}</span>
                          <h4 className="result-title">{p.name}</h4>
                          <div className="result-pricing-row">
                            <span className="result-current-price">{formatPrice(p.priceINR)}</span>
                            {p.originalINR && (
                              <span className="result-original-price">{formatPrice(p.originalINR)}</span>
                            )}
                          </div>
                        </div>
                        <span className="result-view-pill">Quick View →</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="search-empty-state">
                    <p>No handcrafted creations matching &ldquo;{searchVal}&rdquo; found.</p>
                    <span className="empty-hint">Try searching for &quot;Urli&quot;, &quot;Lantern&quot;, &quot;Marble&quot;, or &quot;Brass&quot;</span>
                  </div>
                )
              ) : (
                <div className="search-suggestions-prompt">
                  <span>Type at least 2 characters to browse our Brisbane warehouse collection.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}