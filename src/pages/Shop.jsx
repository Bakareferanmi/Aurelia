import React from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { getByCategory } from '../data/products.js'

const labels = {
  all: 'All Pieces',
  jewelry: 'Jewelry',
  watches: 'Watches',
}

export default function Shop() {
  const { category = 'all' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')

  let products = getByCategory(category)
  if (type) {
    products = products.filter((p) => p.type === type)
  }

  const label = labels[category] || 'All Pieces'

  function clearType() {
    searchParams.delete('type')
    setSearchParams(searchParams)
  }

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

        {type && (
          <button className="shop__filter" onClick={clearType}>
            Filtered by "{type}" — clear ×
          </button>
        )}
      </div>

      <div className="divider-gold" />

      <ProductGrid products={products} />

      <style>{`
        .shop {
          padding: 48px 0 var(--section-y);
        }
        .shop__head h1 {
          margin-top: 12px;
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 300;
        }
        .shop__tabs {
          margin-top: 28px;
          display: flex;
          gap: 24px;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shop__tabs::-webkit-scrollbar {
          display: none;
        }
        .shop__tabs a {
          white-space: nowrap;
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
        .shop__filter {
          margin-top: 18px;
          display: inline-flex;
          background: var(--blush);
          border: none;
          border-radius: var(--radius);
          padding: 8px 14px;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--pink-deep);
        }
      `}</style>
    </div>
  )
}
