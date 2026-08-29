import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import BestSellers from '../components/BestSellers.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import Benefits from '../components/Benefits.jsx'
import { getFeatured, products } from '../data/products.js'

export default function Home() {
  const featured = getFeatured()
  const bestSellers = products.slice(0, 8)

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

      <section className="wrap section">
        <div className="section__head">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="section__title">Best sellers</h2>
          </div>
        </div>
        <div className="divider-gold" />
        <BestSellers products={bestSellers} />
      </section>

      <section className="wrap section">
        <div className="section__head">
          <div>
            <p className="eyebrow">Browse</p>
            <h2 className="section__title">Shop by category</h2>
          </div>
        </div>
        <div className="divider-gold" />
        <CategoryGrid />
      </section>

      <section className="wrap section">
        <Benefits />
      </section>

      <style>{`
        .section {
          padding: var(--section-y) 0 20px;
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
          font-size: clamp(26px, 5vw, 34px);
          font-weight: 300;
        }
        .section__link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pink-deep);
        }
      `}</style>
    </>
  )
}
