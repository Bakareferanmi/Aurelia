import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__wordmark">Aurelia</p>
          <p className="footer__tag">Fine jewelry &amp; timepieces, made in small batches.</p>
        </div>

        <div>
          <p className="footer__heading">Shop</p>
          <ul>
            <li><Link to="/shop/jewelry">Jewelry</Link></li>
            <li><Link to="/shop/watches">Watches</Link></li>
            <li><Link to="/shop/all">All Pieces</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer__heading">Care</p>
          <ul>
            <li><a href="#">Shipping &amp; returns</a></li>
            <li><a href="#">Sizing guide</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div>
          <p className="footer__heading">Stay in the light</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn btn--pale">Join</button>
          </form>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} Aurelia. All rights reserved.</span>
        <span>Lagos · Made to order</span>
      </div>

      <style>{`
        .footer {
          background: var(--ink);
          color: rgba(255,255,255,0.75);
          padding: 72px 0 28px;
          margin-top: 100px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .footer__wordmark {
          font-family: var(--font);
          font-size: 24px;
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--pink);
          margin: 0;
        }
        .footer__tag {
          margin-top: 14px;
          font-size: 13px;
          line-height: 1.7;
          max-width: 240px;
          color: rgba(255,255,255,0.55);
        }
        .footer__heading {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--champagne);
          margin: 0 0 18px;
        }
        .footer ul li {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .footer__form {
          display: flex;
          gap: 8px;
        }
        .footer__form input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: var(--radius);
          padding: 12px 14px;
          color: #fff;
          font-family: var(--font);
          font-size: 13px;
        }
        .footer__form input::placeholder {
          color: rgba(255,255,255,0.45);
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 760px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  )
}
