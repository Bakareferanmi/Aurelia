import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products, formatPrice } from '../data/products.js'

export default function SearchBar({ open, onClose }) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 6)
  }, [query])

  if (!open) return null

  return (
    <div className="search">
      <div className="wrap search__row">
        <Search size={18} strokeWidth={1.5} />
        <input
          autoFocus
          type="text"
          placeholder="Search rings, watches, necklaces…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          aria-label="Close search"
          onClick={() => {
            setQuery('')
            onClose()
          }}
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>

      {query.trim() && (
        <div className="wrap search__results">
          {results.length === 0 ? (
            <p className="search__empty">No pieces match "{query}".</p>
          ) : (
            results.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="search__item"
                onClick={onClose}
              >
                <span>{p.name}</span>
                <span className="search__item-price">{formatPrice(p.price)}</span>
              </Link>
            ))
          )}
        </div>
      )}

      <style>{`
        .search {
          background: var(--ivory);
          border-bottom: 1px solid rgba(20,16,15,0.08);
        }
        .search__row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px var(--gutter);
          color: var(--graphite);
        }
        .search__row input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-family: var(--font);
          font-size: 15px;
          color: var(--ink);
        }
        .search__row button {
          background: none;
          border: none;
          color: var(--graphite);
          display: flex;
        }
        .search__results {
          padding-bottom: 12px;
          display: flex;
          flex-direction: column;
        }
        .search__empty {
          font-size: 13px;
          color: var(--graphite);
          padding: 8px 0;
        }
        .search__item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 14px;
          border-top: 1px solid rgba(20,16,15,0.06);
        }
        .search__item-price {
          color: var(--pink-deep);
        }
      `}</style>
    </div>
  )
}
