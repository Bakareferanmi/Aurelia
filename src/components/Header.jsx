import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import logo from '../assets/aurelia-logo-pink.png'

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap header__row">
        <Link to="/" className="header__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Aurelia" />
        </Link>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <NavLink to="/shop/jewelry" onClick={() => setOpen(false)}>
            Jewelry
          </NavLink>
          <NavLink to="/shop/watches" onClick={() => setOpen(false)}>
            Watches
          </NavLink>
          <NavLink to="/shop/all" onClick={() => setOpen(false)}>
            All Pieces
          </NavLink>
        </nav>

        <div className="header__actions">
          <Link to="/cart" className="header__cart">
            Cart
            <span className="header__count">{count}</span>
          </Link>
          <button
            className="header__burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(251, 247, 243, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(20, 16, 15, 0.08);
        }
        .header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
        }
        .header__logo img {
          height: 30px;
          width: auto;
        }
        .header__nav {
          display: flex;
          gap: 40px;
        }
        .header__nav a {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
          padding-bottom: 4px;
        }
        .header__nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: var(--champagne);
          transition: width 0.3s ease;
        }
        .header__nav a:hover::after,
        .header__nav a.active::after {
          width: 100%;
        }
        .header__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .header__cart {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .header__count {
          min-width: 18px;
          height: 18px;
          padding: 0 4px;
          border-radius: 50%;
          background: var(--pink);
          color: #fff;
          font-size: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .header__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
        }
        .header__burger span {
          width: 22px;
          height: 1px;
          background: var(--ink);
        }
        @media (max-width: 760px) {
          .header__nav {
            position: absolute;
            top: 84px;
            left: 0;
            right: 0;
            background: var(--ivory);
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            border-bottom: 1px solid rgba(20,16,15,0.08);
            transition: max-height 0.35s ease;
          }
          .header__nav.is-open {
            max-height: 220px;
          }
          .header__nav a {
            padding: 16px 32px;
            width: 100%;
          }
          .header__burger {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
