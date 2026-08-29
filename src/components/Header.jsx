import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X, Heart, MapPin, Search } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import TopBar from './TopBar.jsx'
import SearchBar from './SearchBar.jsx'
import logo from '../assets/aurelia-logo-pink.png'

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="header">
      <TopBar />

      <div className="wrap header__row">
        <button
          className="header__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

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
          <button
            className="header__icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <Link to="/wishlist" className="header__icon-btn header__wishlist" aria-label="Wishlist">
            <Heart size={19} strokeWidth={1.5} />
            <span className="header__count header__count--muted">0</span>
          </Link>
          <button className="header__icon-btn header__store" aria-label="Find a store">
            <MapPin size={19} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className="header__icon-btn header__cart" aria-label="View cart">
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && <span className="header__count">{count}</span>}
          </Link>
        </div>
      </div>

      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(251, 247, 243, 0.96);
          backdrop-filter: blur(10px);
        }
        .header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
          border-bottom: 1px solid rgba(20, 16, 15, 0.08);
        }
        .header__logo img {
          height: 30px;
          width: auto;
        }
        @media (max-width: 560px) {
          .header__row { height: 64px; }
          .header__logo img { height: 22px; }
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
          gap: 18px;
        }
        .header__icon-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--ink);
          padding: 4px;
        }
        .header__store {
          display: flex;
        }
        .header__count {
          position: absolute;
          top: -6px;
          right: -8px;
          min-width: 16px;
          height: 16px;
          padding: 0 3px;
          border-radius: 50%;
          background: var(--pink);
          color: #fff;
          font-size: 9px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .header__count--muted {
          background: var(--graphite);
        }
        .header__burger {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 4px;
          color: var(--ink);
        }
        @media (max-width: 760px) {
          .header__nav {
            position: absolute;
            top: 100%;
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
          .header__store {
            display: none;
          }
        }
        @media (max-width: 400px) {
          .header__actions { gap: 12px; }
        }
      `}</style>
    </header>
  )
}
