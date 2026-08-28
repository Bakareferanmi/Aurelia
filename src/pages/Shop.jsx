import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { getByCategory } from '../data/products.js'

const labels = {
  all: 'All Pieces',
  jewelry: 'Jewelry',
  watches: 'Watches',
}

export default function Shop() {
  const { category = 'all' } = useParams()
  const products = getByCategory(category)
  const label = labels[category] || 'All Pieces'

  return (
    <div className="shop wrap">
      <div className="shop__head">
        <p className="eyebrow">Shop</p>
        <h1>{label}</h1>
        <div className="shop__tabs">
          <Link
            to="/shop/all"
            className={category === 'all' ? 'is-active' : ''}
          >
            All
          </Link>
          <Link
            to="/shop/jewelry"
            className={category === 'jewelry' ? 'is-active' : ''}
          >
            Jewelry
          </Link>
          <Link
            to="/shop/watches"
            className={category === 'watches' ? 'is-active' : ''}
          >
            Watches
          </Link>
        </div>
      </div>

      <div className="divider-gold" />

      <ProductGrid products={products} />

      <style>{`
        .shop {
          padding: 60px 0 110px;
        }
        .shop__head h1 {
          margin-top: 12px;
          font-size: 40px;
          font-weight: 300;
        }
        .shop__tabs {
          margin-top: 28px;
          display: flex;
          gap: 28px;
        }
        .shop__tabs a {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--graphite);
          padding-bottom: 6px;
          border-bottom: 1px solid transparent;
        }
        .shop__tabs a.is-active {
          color: var(--ink);
          border-color: var(--champagne);
        }
      `}</style>
    </div>
  )
}
