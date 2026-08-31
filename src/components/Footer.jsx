import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MessageCircle, AtSign, Music2 } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Jewelry', to: '/shop/jewelry' },
      { label: 'Watches', to: '/shop/watches' },
      { label: 'All Pieces', to: '/shop/all' },
    ],
  },
  {
    title: 'Care',
    links: [
      { label: 'Shipping & returns', to: '#' },
      { label: 'Sizing guide', to: '#' },
      { label: 'Contact us', to: '#' },
    ],
  },
]

const paymentBadges = ['VISA', 'MASTERCARD', 'VERVE', 'PAYPAL', 'APPLE PAY']

export default function Footer() {
  const [openCol, setOpenCol] = useState(null)

  function toggle(title) {
    setOpenCol((c) => (c === title ? null : title))
  }

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="footer__wordmark">Aurelia</p>
          <p className="footer__tag">Fine jewelry &amp; timepieces, made in small batches.</p>
          <div className="footer__socials">
            <a href="#" aria-label="WhatsApp"><MessageCircle size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Instagram"><AtSign size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="TikTok"><Music2 size={18} strokeWidth={1.5} /></a>
          </div>
        </div>

        {columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <button
              className="footer__col-head"
              onClick={() => toggle(col.title)}
            >
              <span>{col.title}</span>
              <ChevronDown
                size={16}
                strokeWidth={1.5}
                className={`footer__chevron ${openCol === col.title ? 'is-open' : ''}`}
              />
            </button>
            <ul className={openCol === col.title ? 'is-open' : ''}>
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to.startsWith('/') ? (
                    <Link to={link.to}>{link.label}</Link>
                  ) : (
                    <a href={link.to}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__newsletter">
          <p className="footer__heading">Stay in the light</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>

      <div className="wrap footer__payments">
        {paymentBadges.map((b) => (
          <span className="footer__badge" key={b}>{b}</span>
        ))}
      </div>

      <div className="wrap footer__bottom">
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
        <span>© {new Date().getFullYear()} Aurelia. All rights reserved. Lagos · Made to order</span>
      </div>

      <style>{`
        .footer {
          background: var(--ink);
          color: rgba(255,255,255,0.75);
          padding: 72px 0 28px;
          margin-top: var(--section-y);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 40px;
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
        .footer__socials {
          display: flex;
          gap: 14px;
          margin-top: 20px;
        }
        .footer__socials a {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.85);
        }
        .footer__col-head {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          color: var(--champagne);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0 0 18px;
          cursor: default;
        }
        .footer__chevron {
          display: none;
        }
        .footer ul li {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .footer__newsletter .footer__heading {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--champagne);
          margin: 0 0 18px;
        }
        .footer__form {
          display: flex;
          gap: 8px;
        }
        .footer__form input {
          flex: 1 1 160px;
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
        .footer__form button {
          width: 44px;
          flex-shrink: 0;
          background: var(--pink);
          border: 1.5px solid var(--pink-deep);
          border-radius: var(--radius);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer__payments {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 24px 32px 0;
        }
        .footer__badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: var(--radius);
          padding: 6px 10px;
          color: rgba(255,255,255,0.7);
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer__legal {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 760px) {
          .footer__grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 560px) {
          .footer { padding: 56px 0 24px; }
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .footer__brand { padding-bottom: 28px; }
          .footer__col {
            border-top: 1px solid rgba(255,255,255,0.12);
            padding: 18px 0;
          }
          .footer__col-head {
            padding: 0;
            cursor: pointer;
          }
          .footer__chevron {
            display: block;
            transition: transform 0.25s ease;
          }
          .footer__chevron.is-open {
            transform: rotate(180deg);
          }
          .footer ul {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .footer ul.is-open {
            max-height: 200px;
            margin-top: 14px;
          }
          .footer__newsletter {
            border-top: 1px solid rgba(255,255,255,0.12);
            padding-top: 24px;
          }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
