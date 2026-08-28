import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__inner">
        <p className="eyebrow eyebrow--light">Fine Jewelry &amp; Timepieces</p>
        <h1 className="hero__headline">
          Worn close.
          <br />
          Noticed anyway.
        </h1>
        <p className="hero__sub">
          Gold vermeil jewelry and precision wrist watches, designed in small
          batches and finished by hand.
        </p>
        <div className="hero__ctas">
          <Link to="/shop/all" className="btn btn--pale">
            Shop the collection
          </Link>
          <Link to="/shop/watches" className="btn__text">
            View watches →
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          background: var(--pink);
          color: var(--white);
          padding: 120px 0 90px;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          right: -12%;
          top: -30%;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .hero::after {
          content: '';
          position: absolute;
          right: 6%;
          bottom: -22%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .hero__inner {
          position: relative;
          max-width: 720px;
        }
        .hero__headline {
          margin-top: 18px;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 200;
          letter-spacing: -0.01em;
          line-height: 1.02;
        }
        .hero__sub {
          margin-top: 26px;
          max-width: 440px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.88);
        }
        .hero__ctas {
          margin-top: 44px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .btn__text {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding-bottom: 3px;
        }
      `}</style>
    </section>
  )
}
