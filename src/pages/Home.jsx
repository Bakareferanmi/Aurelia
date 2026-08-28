import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { getFeatured } from '../data/products.js'

export default function Home() {
  const featured = getFeatured()

  return (
    <>
      <Hero />

      <section className="wrap section">
        <div className="section__head">
          <div>
            <p className="eyebrow">Editors' Pick</p>
            <h2 className="section__title">Featured pieces</h2>
          </div>
          <Link to="/shop/all" className="section__link">View all →</Link>
        </div>
        <div className="divider-gold" />
        <ProductGrid products={featured} />
      </section>

      <section className="promo">
        <div className="wrap promo__grid">
          <Link to="/shop/jewelry" className="promo__card promo__card--jewelry">
            <p className="eyebrow eyebrow--light">Category</p>
            <h3>Jewelry</h3>
            <span>Rings, necklaces, earrings, bracelets →</span>
          </Link>
          <Link to="/shop/watches" className="promo__card promo__card--watch">
            <p className="eyebrow eyebrow--light">Category</p>
            <h3>Watches</h3>
            <span>Precision cases, sized for every wrist →</span>
          </Link>
        </div>
      </section>

      <section className="wrap strip">
        <div className="strip__item">
          <p className="strip__num">01</p>
          <p>Hand-finished in small batches, not mass produced</p>
        </div>
        <div className="strip__item">
          <p className="strip__num">02</p>
          <p>Tarnish-resistant 18k gold vermeil &amp; sapphire crystal glass</p>
        </div>
        <div className="strip__item">
          <p className="strip__num">03</p>
          <p>Free resizing within 30 days of delivery</p>
        </div>
      </section>

      <style>{`
        .section {
          padding: 100px 0 20px;
        }
        .section__head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .section__title {
          margin-top: 12px;
          font-size: 34px;
          font-weight: 300;
        }
        .section__link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pink-deep);
        }
        .promo {
          margin-top: 100px;
        }
        .promo__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .promo__card {
          position: relative;
          padding: 48px 40px;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #fff;
          border-radius: var(--radius);
          overflow: hidden;
        }
        .promo__card h3 {
          margin-top: 12px;
          font-size: 30px;
          font-weight: 300;
        }
        .promo__card span {
          margin-top: 12px;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }
        .promo__card--jewelry {
          background: linear-gradient(140deg, #ff4fa3, #d8006b);
        }
        .promo__card--watch {
          background: linear-gradient(140deg, #26201d, #0e0c0b);
        }
        .strip {
          margin-top: 100px;
          padding: 56px 32px;
          background: var(--blush);
          border-radius: var(--radius);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .strip__num {
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--champagne);
          margin: 0 0 10px;
        }
        .strip__item p:last-child {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink);
        }
        @media (max-width: 760px) {
          .promo__grid, .strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
