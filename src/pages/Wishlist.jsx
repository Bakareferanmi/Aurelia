import React from 'react'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  return (
    <div className="wrap wishlist">
      <p className="eyebrow">Saved</p>
      <h1>Wishlist</h1>
      <div className="divider-gold" />
      <div className="wishlist__empty">
        <p>Nothing saved yet — tap the heart on any piece to keep it here.</p>
        <Link to="/shop/all" className="btn btn--solid">Browse pieces</Link>
      </div>

      <style>{`
        .wishlist { padding: 48px 0 var(--section-y); }
        .wishlist h1 { margin-top: 10px; font-size: clamp(28px, 6vw, 38px); font-weight: 300; }
        .wishlist__empty {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          color: var(--graphite);
        }
      `}</style>
    </div>
  )
}
