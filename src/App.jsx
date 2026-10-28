import React, { useState, useEffect } from 'react';
import { PRODUCTS, CURRENCIES } from './data/products';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import BentoPromos from './components/BentoPromos';
import Lookbook from './components/Lookbook';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CategoriesDrawer from './components/CategoriesDrawer';
import QuickViewModal from './components/QuickViewModal';
import CheckoutModal from './components/CheckoutModal';
import TrackOrderModal from './components/TrackOrderModal';
import ReviewModal from './components/ReviewModal';
import AdminPanel from './components/AdminPanel';
import MobileBottomBar from './components/MobileBottomBar';
import Toast from './components/Toast';
import { Agentation } from 'agentation';

export default function App() {
  // --- Persistent State (Default to AUD for Brisbane, QLD) ---
  const [currency, setCurrencyState] = useState(() => {
    return localStorage.getItem('veda_currency') || 'AUD';
  });

  const [products, setProducts] = useState(PRODUCTS);

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('veda_cart')) || [{ productId: 'veda-01', qty: 1 }];
    } catch {
      return [{ productId: 'veda-01', qty: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('veda_wishlist')) || ['veda-02', 'veda-03'];
    } catch {
      return ['veda-02', 'veda-03'];
    }
  });

  // --- UI Modals & Drawers ---
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewId, setQuickViewId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('veda_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('veda_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const setCurrency = (code) => {
    if (CURRENCIES[code]) {
      setCurrencyState(code);
      localStorage.setItem('veda_currency', code);
      addToast(`Currency updated to ${code} (${CURRENCIES[code].symbol})`, 'gold');
    }
  };

  // Toast Handler
  const addToast = (message, type = 'gold') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Price Formatter
  const formatPrice = (amountINR) => {
    const curr = CURRENCIES[currency] || CURRENCIES.AUD;
    const converted = Math.round(amountINR * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  // Cart Operations
  const handleAddToCart = (productId, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item =>
          item.productId === productId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { productId, qty }];
    });
    const prod = products.find(p => p.id === productId);
    addToast(`Added "${prod?.name || 'Item'}" to your bag`, 'success');
  };

  const handleUpdateCartQty = (productId, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.productId === productId) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
    addToast('Item removed from bag', 'info');
  };

  const handleCompleteOrder = () => {
    setCart([]);
    addToast('Order confirmed! Dispatched from Brisbane studio tomorrow.', 'success');
  };

  // Wishlist Operations
  const handleToggleWishlist = (productId) => {
    const prod = products.find(p => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      addToast(`Removed from Wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, productId]);
      addToast(`Saved "${prod?.name || 'Item'}" to Wishlist`, 'gold');
    }
  };

  // Category Selection
  const handleSelectCategory = (catKey) => {
    setActiveCategory(catKey);
    const el = document.getElementById('top-picks-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Admin Operations
  const handleAddProduct = (newProd) => {
    setProducts(prev => [newProd, ...prev]);
  };

  const handleUpdateProductStock = (id, newStock) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, stock: newStock } : p))
    );
    addToast('Product stock updated in Brisbane warehouse', 'gold');
  };

  const quickViewProduct = quickViewId ? products.find(p => p.id === quickViewId) : null;
  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // If Admin Panel is Open, render full Admin HQ View
  if (isAdminOpen) {
    return (
      <div className="veda-admin-app">
        <AdminPanel
          onClose={() => setIsAdminOpen(false)}
          products={products}
          onAddProduct={handleAddProduct}
          onUpdateProductStock={handleUpdateProductStock}
          onToast={addToast}
        />
        <Toast toasts={toasts} />
      </div>
    );
  }

  return (
    <div className="veda-app">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Unified Luxury Editorial Header */}
      <Header
        currency={currency}
        setCurrency={setCurrency}
        formatPrice={formatPrice}
        products={products}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenCategories={() => setIsCategoriesOpen(true)}
        onOpenQuickView={(id) => setQuickViewId(id)}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenMobileMenu={() => setIsCategoriesOpen(true)}
      />

      <main>
        {/* 3. Full-Size Hero Banner (Edge-to-Edge with High Text Visibility) */}
        <Hero
          onShopNow={() => handleSelectCategory('all')}
          onShopLook={() => {
            const el = document.getElementById('lookbook-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Circular Category Quick Browse */}
        <CategoryBar
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Top Picks For You Product Grid */}
        <ProductGrid
          products={products}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          formatPrice={formatPrice}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onOpenQuickView={(id) => setQuickViewId(id)}
        />

        {/* 6. 3-Column Promo Bento Banners */}
        <BentoPromos
          onSelectCategory={handleSelectCategory}
          onShopLook={() => {
            const el = document.getElementById('lookbook-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Interactive Room Lookbook */}
        <Lookbook
          onOpenQuickView={(id) => setQuickViewId(id)}
          onAddToCart={handleAddToCart}
          formatPrice={formatPrice}
        />

        {/* 8. Newsletter */}
        <Newsletter onToast={addToast} />
      </main>

      {/* 12. Footer */}
      <Footer
        currency={currency}
        setCurrency={setCurrency}
        onSelectCategory={handleSelectCategory}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
      />

      {/* 13. Mobile Bottom Navigation Bar (For phone compatibility) */}
      <MobileBottomBar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCategories={() => setIsCategoriesOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* --- Drawers & Modals --- */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        products={products}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        formatPrice={formatPrice}
        onToast={addToast}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        products={products}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        formatPrice={formatPrice}
      />

      <CategoriesDrawer
        isOpen={isCategoriesOpen}
        onClose={() => setIsCategoriesOpen(false)}
        onSelectCategory={handleSelectCategory}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewId(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        formatPrice={formatPrice}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onCompleteOrder={handleCompleteOrder}
      />

      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
        onToast={addToast}
      />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onToast={addToast}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} />

      {/* Visual Feedback for AI Coding Agents */}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}
