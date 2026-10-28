/**
 * VEDA DECORATIONS - E-COMMERCE CORE APPLICATION
 * Modern, Clean, Modular Vanilla JavaScript Architecture
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATA
// ==========================================================================
const PRODUCTS = [
  {
    id: 'veda-01',
    name: 'Mayura Lotus Royal Brass Urli',
    category: 'urli',
    categoryLabel: 'Brass Urli',
    priceINR: 4850,
    originalINR: 6200,
    discount: '-22%',
    rating: 5.0,
    reviewsCount: 1420,
    badge: 'Bestseller',
    badgeType: 'badge-sale',
    image: './assets/images/product-urli.jpg',
    description: 'Hand-hammered heavy virgin brass urli featuring intricate peacock handles and concentric lotus petal engravings. Designed for floating scented tea lights, rosebuds, and fresh marigold water basins during celebrations.',
    origin: 'Moradabad, Uttar Pradesh',
    material: '100% Solid Brass with Antique Patina',
    dimensions: '14" Dia × 4.5" Height | Weight: 3.4 kg'
  },
  {
    id: 'veda-02',
    name: 'Jaipur Architectural Jali Lantern',
    category: 'lamps',
    categoryLabel: 'Ambient Lamps',
    priceINR: 3950,
    originalINR: 4999,
    discount: '-20%',
    rating: 4.9,
    reviewsCount: 965,
    badge: 'Masterpiece',
    badgeType: 'badge-craft',
    image: './assets/images/product-lantern.jpg',
    description: 'Inspired by the arched windows of Amber Fort, this tall handcrafted brass lantern features laser-cut geometric lattice jali work. Emits an ethereal warm golden illumination casting delicate mandalas onto surrounding surfaces.',
    origin: 'Jaipur, Rajasthan',
    material: 'High-Gauge Antiqued Brass & Tempered Glass',
    dimensions: '6.5" × 6.5" Base × 16" Height | Weight: 2.1 kg'
  },
  {
    id: 'veda-03',
    name: 'Udaipur Pichwai Lotus Fresco Plate',
    category: 'wallart',
    categoryLabel: 'Pichwai & Wall Art',
    priceINR: 7600,
    originalINR: 9500,
    discount: '-20%',
    rating: 4.95,
    reviewsCount: 840,
    badge: 'Heritage Art',
    badgeType: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
    description: 'Museum-grade Pichwai decorative medallion hand-painted using authentic natural stone pigments and 24k gold leaf embellishments, depicting Shrinathji sacred lotus blooms in tranquil symmetry.',
    origin: 'Nathdwara, Rajasthan',
    material: 'Natural Mineral Pigments & Gold Leaf on Teak Plate',
    dimensions: '18" Diameter × 1.5" Depth | Weight: 2.8 kg'
  },
  {
    id: 'veda-04',
    name: 'Ashtalakshmi Sacred Pooja Thali Set',
    category: 'pooja',
    categoryLabel: 'Pooja Decor',
    priceINR: 5400,
    originalINR: 7200,
    discount: '-25%',
    rating: 4.9,
    reviewsCount: 1108,
    badge: 'Festive Special',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive 7-piece auspicious pooja set embossed with the 8 manifestations of Goddess Lakshmi. Includes engraved brass plate, bell with Nandi handle, panchamrut cup, incense burner, and dual kumkum bowls.',
    origin: 'Kumbakonam, Tamil Nadu',
    material: 'Auspicious Heavy Brass with 24k Gold Accents',
    dimensions: '12.5" Thali Diameter | Set Weight: 1.9 kg'
  },
  {
    id: 'veda-05',
    name: 'Makrana Fluted Marble Catchall Bowl',
    category: 'marble',
    categoryLabel: 'Marble Decor',
    priceINR: 3200,
    originalINR: 4200,
    discount: '-24%',
    rating: 4.85,
    reviewsCount: 630,
    badge: 'Hand-carved',
    badgeType: 'badge-craft',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
    description: 'Turned from a single block of authentic pure white Makrana marble—the historic stone of the Taj Mahal. Features softly scalloped fluted petal edges, ideal for dry florals or luxury vanity treasures.',
    origin: 'Makrana, Rajasthan',
    material: '100% Solid Natural White Marble',
    dimensions: '9" Diameter × 3" Height | Weight: 2.4 kg'
  },
  {
    id: 'veda-06',
    name: 'Sahasrara 108-Wick Brass Deepam Tower',
    category: 'lamps',
    categoryLabel: 'Ambient Lamps',
    priceINR: 9200,
    originalINR: 11500,
    discount: '-20%',
    rating: 5.0,
    reviewsCount: 420,
    badge: 'Limited Batch',
    badgeType: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80',
    description: 'Magnificent 5-tier traditional brass oil lamp tower representing cosmic illumination. Hand-turned with precision oil channels to hold 108 steady cotton wicks for grand festive occasions.',
    origin: 'Nachiyar Koil, Tamil Nadu',
    material: 'Solid Sand-Cast Brass with Protective Lacquer',
    dimensions: '24" Height × 9.5" Base Dia | Weight: 4.9 kg'
  },
  {
    id: 'veda-07',
    name: 'Varanasi Zari Embroidered Door Toran',
    category: 'toran',
    categoryLabel: 'Torans & Garlands',
    priceINR: 2650,
    originalINR: 3400,
    discount: '-22%',
    rating: 4.8,
    reviewsCount: 780,
    badge: 'Hand-Woven',
    badgeType: 'badge-craft',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Auspicious doorway band hand-woven on pure raw dupion silk with real antique gold zari brocade, finished with tiny sonorous brass ghungroo bells and green bead tassels.',
    origin: 'Varanasi, Uttar Pradesh',
    material: 'Raw Dupion Silk, Metallic Zari & Brass Bells',
    dimensions: '38" Length × 8" Hanging Drop'
  },
  {
    id: 'veda-08',
    name: 'Sandalwood & Saffron Soy Urli Candle',
    category: 'wax',
    categoryLabel: 'Scented Wax',
    priceINR: 1750,
    originalINR: 2200,
    discount: '-20%',
    rating: 4.9,
    reviewsCount: 1540,
    badge: 'Organic',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    description: 'Smokeless 65-hour clean burn candle hand-poured with pure Mysore sandalwood essential oil and Kashmiri saffron stamens into a reusable hammered solid brass bowl.',
    origin: 'Mysore, Karnataka',
    material: '100% Natural Soy Wax, Pure Essential Oils & Brass',
    dimensions: '5" Bowl Diameter | 420g Wax'
  },
  {
    id: 'veda-09',
    name: 'Kansa Sonorous Bell Chandelier Windchime',
    category: 'bells',
    categoryLabel: 'Windchimes & Bells',
    priceINR: 3600,
    originalINR: 4500,
    discount: '-20%',
    rating: 4.95,
    reviewsCount: 680,
    badge: 'Acoustic Bronze',
    badgeType: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Cast from sacred bell-metal bronze (Kansa), tuned to produce sustained meditative acoustic harmonic frequencies whenever caressed by natural breeze.',
    origin: 'Almora, Uttarakhand',
    material: 'Sacred Kansa Bronze Alloy & Natural Braided Jute',
    dimensions: '32" Total Hanging Height | 7 Tuned Bells'
  },
  {
    id: 'veda-10',
    name: 'Kashmir Walnut Wood Trellis Keepsake Box',
    category: 'marble',
    categoryLabel: 'Marble & Wood Decor',
    priceINR: 4200,
    originalINR: 5200,
    discount: '-19%',
    rating: 4.88,
    reviewsCount: 512,
    badge: 'Master Carving',
    badgeType: 'badge-craft',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    description: 'Carved by master artisans from aged Kashmir wild walnut wood with intricate openwork pinjrakari jaal latticework, lined with emerald velvet.',
    origin: 'Srinagar, Kashmir',
    material: 'Seasoned Wild Walnut Wood & Velvet',
    dimensions: '9" × 6" × 4" Height | Weight: 980g'
  }
];

// ==========================================================================
// 2. CURRENCY & PRICING ENGINE
// ==========================================================================
const CURRENCIES = {
  INR: { code: 'INR', symbol: '₹', rate: 1.0, flag: '🇮🇳' },
  USD: { code: 'USD', symbol: '$', rate: 0.012, flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.011, flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.0095, flag: '🇬🇧' }
};

let currentCurrency = 'INR';

function formatPrice(amountINR) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(amountINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function setCurrency(code) {
  if (CURRENCIES[code]) {
    currentCurrency = code;
    localStorage.setItem('veda_currency', code);
    updateCurrencyUI();
    renderProducts();
    updateCartUI();
    showToast(`Currency updated to ${code} (${CURRENCIES[code].symbol})`, 'gold');
  }
}

function updateCurrencyUI() {
  const curr = CURRENCIES[currentCurrency];
  const btn = document.getElementById('currency-btn-label');
  if (btn) btn.innerHTML = `${curr.flag} ${curr.code} (${curr.symbol})`;
  
  const footerPicker = document.getElementById('footer-currency-label');
  if (footerPicker) footerPicker.innerHTML = `${curr.flag} ${curr.code} (${curr.symbol})`;

  document.querySelectorAll('.currency-opt').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.code === currentCurrency);
  });
}

// ==========================================================================
// 3. CART & WISHLIST STORAGE ENGINE
// ==========================================================================
let cart = JSON.parse(localStorage.getItem('veda_cart')) || [
  { productId: 'veda-01', qty: 1 }
];

let wishlist = JSON.parse(localStorage.getItem('veda_wishlist')) || ['veda-02', 'veda-03'];

let appliedCoupon = null;
const COUPONS = {
  'VEDA10': { discountPercent: 10, label: '10% OFF Welcome' },
  'FESTIVE20': { discountPercent: 20, label: '20% Festive Special' },
  'VEDA500': { flatDiscountINR: 500, label: '₹500 Flat Artisan Gift' }
};

function saveCart() {
  localStorage.setItem('veda_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('veda_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function addToCart(productId, qty = 1) {
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, qty });
  }
  saveCart();
  
  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added "${product.name}" to your bag`, 'success');

  // Trigger bounce on cart icon
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  showToast('Item removed from bag', 'info');
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (index >= 0) {
    wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`Saved "${product.name}" to Wishlist`, 'gold');
  }
  saveWishlist();
  renderProducts();
}

// ==========================================================================
// 4. CART DRAWER & UI UPDATES
// ==========================================================================
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalCount;

  const drawerContainer = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');
  const progressText = document.getElementById('shipping-progress-text');
  const progressFill = document.getElementById('shipping-progress-fill');

  if (!drawerContainer) return;

  if (cart.length === 0) {
    drawerContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon">🪔</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary);">Your Sacred Bag is Empty</h4>
        <p style="font-size: 0.875rem;">Discover our handcrafted urlis, pooja thalis and festive lamps.</p>
        <button class="btn-primary" style="margin-top: 12px;" onclick="closeDrawer('cart-drawer')">Start Browsing</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (discountEl) discountEl.textContent = formatPrice(0);
    if (shippingEl) shippingEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = `Add ${formatPrice(1999)} more to unlock Free Shipping`;
    return;
  }

  // Calculate pricing
  let rawSubtotalINR = 0;
  drawerContainer.innerHTML = cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (!prod) return '';
    const itemTotalINR = prod.priceINR * item.qty;
    rawSubtotalINR += itemTotalINR;

    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${prod.name}</h4>
          <div class="cart-item-price">${formatPrice(prod.priceINR)}</div>
          <div class="cart-qty-row">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty('${prod.id}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${prod.id}', 1)">+</button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeFromCart('${prod.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Discount calculation
  let discountINR = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountINR = Math.round(rawSubtotalINR * (appliedCoupon.discountPercent / 100));
    } else if (appliedCoupon.flatDiscountINR) {
      discountINR = appliedCoupon.flatDiscountINR;
    }
  }

  // Free shipping threshold = INR 1,999
  const thresholdINR = 1999;
  const isFreeShipping = rawSubtotalINR >= thresholdINR;
  const shippingINR = isFreeShipping ? 0 : 250;
  const grandTotalINR = Math.max(0, rawSubtotalINR - discountINR + shippingINR);

  // Update progress bar
  if (progressFill && progressText) {
    const percent = Math.min(100, (rawSubtotalINR / thresholdINR) * 100);
    progressFill.style.width = `${percent}%`;
    if (isFreeShipping) {
      progressText.innerHTML = `🎉 <strong>Complimentary Express Shipping Unlocked!</strong>`;
    } else {
      const remainingINR = thresholdINR - rawSubtotalINR;
      progressText.innerHTML = `Add <strong>${formatPrice(remainingINR)}</strong> more for Complimentary Express Shipping`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = formatPrice(rawSubtotalINR);
  if (discountEl) discountEl.textContent = appliedCoupon ? `-${formatPrice(discountINR)}` : formatPrice(0);
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'FREE' : formatPrice(shippingINR);
  if (totalEl) totalEl.textContent = formatPrice(grandTotalINR);
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) badge.textContent = wishlist.length;

  const wishlistContainer = document.getElementById('wishlist-drawer-items');
  if (!wishlistContainer) return;

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon">🤍</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem;">No Saved Treasures Yet</h4>
        <p style="font-size: 0.875rem;">Click the heart icon on any product to curate your festive decor wishlist.</p>
      </div>
    `;
    return;
  }

  wishlistContainer.innerHTML = wishlist.map(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return '';
    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${prod.name}</h4>
          <div class="cart-item-price">${formatPrice(prod.priceINR)}</div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button class="btn-primary" style="padding: 6px 14px; font-size: 0.75rem;" onclick="addToCart('${prod.id}'); toggleWishlist('${prod.id}');">Move to Bag</button>
            <button class="cart-item-remove-btn" onclick="toggleWishlist('${prod.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 5. PRODUCT RENDERING & FILTERING
// ==========================================================================
let activeCategory = 'all';
let searchQuery = '';

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: white; border-radius: var(--radius-md); border: 1px dashed var(--border-soft);">
        <p style="font-size: 1.125rem; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">No handcrafted items match your filter</p>
        <p style="font-size: 0.875rem; color: var(--color-text-muted);">Try selecting another category or clearing your search phrase.</p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="resetFilters()">View All Collections</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const isSaved = wishlist.includes(prod.id);
    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="card-thumb-wrap">
          <span class="card-badge ${prod.badgeType}">${prod.discount}</span>
          <button class="wishlist-toggle-btn ${isSaved ? 'active' : ''}" 
                  onclick="toggleWishlist('${prod.id}')" 
                  title="${isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}" 
                  aria-label="Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${prod.image}" alt="${prod.name}" class="card-img" loading="lazy">
          
          <button class="quick-view-btn" onclick="openQuickView('${prod.id}')">
            Quick View
          </button>
        </div>

        <div class="card-body">
          <span class="card-category">${prod.categoryLabel}</span>
          <h3 class="card-title" onclick="openQuickView('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
          
          <div class="card-rating-row">
            <span class="stars-gold">★★★★★</span>
            <span class="reviews-count">(${prod.reviewsCount})</span>
          </div>

          <div class="card-footer-row">
            <div class="price-wrap">
              <span class="price-current">${formatPrice(prod.priceINR)}</span>
              <span class="price-original">${formatPrice(prod.originalINR)}</span>
            </div>
            
            <button class="add-cart-circle-btn" 
                    onclick="addToCart('${prod.id}')" 
                    title="Add to Bag" 
                    aria-label="Add to Bag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function filterCategory(catKey) {
  activeCategory = catKey;
  
  // Update circular category row active state
  document.querySelectorAll('.cat-circle-card').forEach(card => {
    card.classList.toggle('active', card.dataset.category === catKey);
  });

  // Update filter pill row active state
  document.querySelectorAll('.filter-tag-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.category === catKey);
  });

  renderProducts();

  // Scroll gently to products section if clicked from top
  const el = document.getElementById('top-picks-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  filterCategory('all');
}

// ==========================================================================
// 6. LIVE SEARCH ENGINE
// ==========================================================================
function setupSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-results-dropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    searchQuery = val;
    renderProducts();

    if (val.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(val) || 
      p.categoryLabel.toLowerCase().includes(val)
    ).slice(0, 5);

    if (matches.length > 0) {
      dropdown.innerHTML = matches.map(m => `
        <div class="search-result-item" onclick="openQuickView('${m.id}'); document.getElementById('search-results-dropdown').classList.remove('active');">
          <img src="${m.image}" alt="${m.name}" class="search-result-thumb">
          <div class="search-result-info">
            <div class="search-result-name">${m.name}</div>
            <div class="search-result-price">${formatPrice(m.priceINR)} <span style="font-size: 0.7rem; color: var(--color-text-subtle); text-decoration: line-through;">${formatPrice(m.originalINR)}</span></div>
          </div>
        </div>
      `).join('');
      dropdown.classList.add('active');
    } else {
      dropdown.innerHTML = `<div style="padding: 12px; font-size: 0.8125rem; color: var(--color-text-muted); text-align: center;">No matching decor pieces found</div>`;
      dropdown.classList.add('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// ==========================================================================
// 7. MODALS & DRAWERS SYSTEM
// ==========================================================================
function openDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function closeAllModals() {
  document.querySelectorAll('.slide-drawer, .center-modal, .mobile-nav-drawer').forEach(el => {
    el.classList.remove('active');
  });
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-gallery">
        <img src="${prod.image}" alt="${prod.name}" class="quickview-main-img">
      </div>
      <div class="quickview-info">
        <span class="quickview-category">${prod.categoryLabel} • ${prod.origin}</span>
        <h2 class="quickview-title">${prod.name}</h2>
        <div class="quickview-price-row">
          <span class="quickview-current-price">${formatPrice(prod.priceINR)}</span>
          <span class="quickview-original-price">${formatPrice(prod.originalINR)}</span>
          <span class="tag-badge" style="font-size: 0.75rem;">${prod.discount}</span>
        </div>
        <p class="quickview-desc">${prod.description}</p>
        
        <div class="spec-list">
          <div><span class="spec-item-label">Craft Origin:</span> <div class="spec-item-val">${prod.origin}</div></div>
          <div><span class="spec-item-label">Material:</span> <div class="spec-item-val">${prod.material}</div></div>
          <div style="grid-column: 1 / -1;"><span class="spec-item-label">Dimensions & Weight:</span> <div class="spec-item-val">${prod.dimensions}</div></div>
        </div>

        <div style="display: flex; gap: 14px; margin-top: auto;">
          <button class="btn-primary" style="flex: 1; justify-content: center;" onclick="addToCart('${prod.id}'); closeAllModals(); openDrawer('cart-drawer');">
            Add to Bag • ${formatPrice(prod.priceINR)}
          </button>
          <button class="btn-secondary" onclick="toggleWishlist('${prod.id}')" title="Wishlist">
            🤍 Save
          </button>
        </div>
      </div>
    </div>
  `;

  const backdrop = document.getElementById('modal-backdrop');
  modal.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==========================================================================
// 8. CHECKOUT MULTI-STEP FLOW
// ==========================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add products first.', 'gold');
    return;
  }
  closeDrawer('cart-drawer');
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    goToCheckoutStep(1);
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function goToCheckoutStep(step) {
  document.querySelectorAll('.step-indicator').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.step) === step);
  });
  document.querySelectorAll('.checkout-step-pane').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.step) === step);
  });
}

function selectPaymentMethod(cardEl, method) {
  document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');
}

function completeCheckout() {
  const orderId = `VEDA-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderBadge = document.getElementById('order-confirmed-id');
  if (orderBadge) orderBadge.textContent = `Order Confirmed: #${orderId}`;

  // Clear cart
  cart = [];
  saveCart();

  goToCheckoutStep(3);
  showToast('Order placed successfully! Welcome to Veda Family.', 'success');
}

// ==========================================================================
// 9. TRACK ORDER & WRITE REVIEW MODALS
// ==========================================================================
function openTrackOrderModal() {
  const modal = document.getElementById('track-order-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function handleTrackLookup() {
  const input = document.getElementById('tracking-id-input');
  const result = document.getElementById('tracking-timeline-result');
  if (input && result) {
    result.style.display = 'block';
    showToast(`Displaying tracking updates for ${input.value || '#VEDA-882194'}`, 'gold');
  }
}

function openReviewModal() {
  const modal = document.getElementById('review-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function setStarRating(num) {
  const stars = document.querySelectorAll('#star-picker span');
  stars.forEach((s, idx) => {
    s.classList.toggle('active', idx < num);
  });
}

function submitCustomerReview(e) {
  e.preventDefault();
  closeAllModals();
  showToast('Thank you! Your verified artisan review has been published.', 'success');
}

// ==========================================================================
// 10. TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : type === 'gold' ? '🪔' : 'ℹ';
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 11. COUPON CODE LOGIC
// ==========================================================================
function applyCoupon() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (COUPONS[code]) {
    appliedCoupon = COUPONS[code];
    updateCartUI();
    showToast(`Coupon "${code}" applied: ${appliedCoupon.label}!`, 'success');
    input.value = '';
  } else {
    showToast('Invalid coupon code. Try "VEDA10" or "FESTIVE20"', 'gold');
  }
}

// ==========================================================================
// 12. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load saved currency
  const savedCurrency = localStorage.getItem('veda_currency');
  if (savedCurrency && CURRENCIES[savedCurrency]) {
    currentCurrency = savedCurrency;
  }
  updateCurrencyUI();

  // Render initial components
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupSearch();

  // Currency dropdown toggle
  const currBtn = document.getElementById('currency-btn');
  const currMenu = document.getElementById('currency-menu');
  if (currBtn && currMenu) {
    currBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currMenu.classList.toggle('active');
    });
    document.addEventListener('click', () => currMenu.classList.remove('active'));
  }

  // Backdrop click to close modals
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeAllModals);
  }

  // Hotspot Click in Lookbook
  document.querySelectorAll('.hotspot-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const prodId = pin.dataset.productId;
      openQuickView(prodId);
    });
  });

  // Newsletter Submit
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      if (input && input.value) {
        showToast(`Thank you! Welcome gift code sent to ${input.value}`, 'success');
        input.value = '';
      }
    });
  }
});
