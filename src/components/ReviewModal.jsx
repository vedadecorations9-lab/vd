import React, { useState } from 'react';

export default function ReviewModal({ isOpen, onClose, onToast }) {
  const [stars, setStars] = useState(5);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast('Thank you! Your verified artisan review has been published.', 'success');
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <div className="center-modal active" role="dialog" aria-modal="true">
        <button className="modal-close-corner-btn" onClick={onClose}>✕</button>
        <div style={{ padding: '36px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '6px' }}>Share Your Decor Experience</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>Help fellow decor lovers discover authentic heritage treasures.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Your Rating</label>
              <div className="star-rating-picker" id="star-picker">
                {[1, 2, 3, 4, 5].map(num => (
                  <span
                    key={num}
                    className={num <= stars ? 'active' : ''}
                    onClick={() => setStars(num)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Shalini Roy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Your City</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Pune, MH"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Product Reviewed</label>
              <select className="form-input" style={{ cursor: 'pointer' }}>
                <option>Mayura Lotus Royal Brass Urli</option>
                <option>Jaipur Architectural Jali Lantern</option>
                <option>Udaipur Pichwai Lotus Fresco Plate</option>
                <option>Ashtalakshmi Sacred Pooja Thali Set</option>
                <option>Makrana Fluted Marble Catchall Bowl</option>
                <option>Sandalwood & Saffron Soy Urli Candle</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">Review Experience</label>
              <textarea
                className="form-input"
                rows="4"
                placeholder="How did this piece enhance your home sanctuary?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Publish Verified Review ✨
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
