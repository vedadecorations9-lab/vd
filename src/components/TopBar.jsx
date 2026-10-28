import React from 'react';

export default function TopBar() {
  return (
    <aside className="top-bar" aria-label="Brisbane Studio Announcements">
      <div className="top-bar-inner">
        <div className="top-bar-left hide-mobile">
          <span className="top-bar-dot"></span>
          <span>Brisbane Flagship Studio & Showroom · Fortitude Valley, QLD 4006</span>
        </div>
        <div className="top-bar-center">
          <span>Complimentary Express Delivery in Greater Brisbane on Orders Over $99</span>
        </div>
        <div className="top-bar-right hide-mobile">
          <span>Fast Australia-Wide Dispatch via Australia Post</span>
        </div>
      </div>
    </aside>
  );
}
