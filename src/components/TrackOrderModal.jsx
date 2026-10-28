import React, { useState } from 'react';

export default function TrackOrderModal({ isOpen, onClose, onToast }) {
  const [orderInput, setOrderInput] = useState('VEDA-882194');
  const [showResult, setShowResult] = useState(true);

  if (!isOpen) return null;

  const handleTrack = () => {
    setShowResult(true);
    onToast(`Displaying tracking updates for ${orderInput}`, 'gold');
  };

  return (
    <>
      <div className="modal-backdrop active" onClick={onClose} />
      <div className="center-modal active" role="dialog" aria-modal="true">
        <button className="modal-close-corner-btn" onClick={onClose}>✕</button>
        <div style={{ padding: '36px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '8px' }}>Track Your Sacred Shipment</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>Enter your Order ID (e.g. VEDA-882194) or registered phone number.</p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <input
              type="text"
              className="form-input"
              style={{ flex: 1 }}
              value={orderInput}
              onChange={(e) => setOrderInput(e.target.value)}
              placeholder="Enter Order ID"
            />
            <button className="btn-primary" onClick={handleTrack}>Track Now</button>
          </div>

          {showResult && (
            <div>
              <div style={{ background: 'var(--color-bg-surface-soft)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', marginBottom: '16px' }}>
                📦 <strong>Package:</strong> 1x Mayura Lotus Royal Brass Urli • <strong>Carrier:</strong> Australia Post Express Air (QLD)
              </div>

              <div className="tracking-timeline">
                <div className="timeline-step completed">
                  <div className="timeline-dot">✓</div>
                  <div className="timeline-title">Artisan Inspected & Quality Certified</div>
                  <div className="timeline-time">Heirloom Guild Inspection • Oct 25, 11:30 AM</div>
                </div>
                <div className="timeline-step completed">
                  <div className="timeline-dot">✓</div>
                  <div className="timeline-title">Packed in Velvet Reinforced Crate</div>
                  <div className="timeline-time">Veda Brisbane Logistics Hub, Fortitude Valley QLD • Oct 26, 04:15 PM</div>
                </div>
                <div className="timeline-step current">
                  <div className="timeline-dot">🦘</div>
                  <div className="timeline-title">In Transit - Australia Post Express Delivery Van</div>
                  <div className="timeline-time">Out for Local Greater Brisbane Delivery • Today, 08:45 AM AEST</div>
                </div>
                <div className="timeline-step">
                  <div className="timeline-dot">○</div>
                  <div className="timeline-title">Sacred Home Delivery Confirmation</div>
                  <div className="timeline-time">Estimated Today by 02:00 PM AEST</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
