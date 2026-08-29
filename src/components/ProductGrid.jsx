import React from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return <p className="empty">No pieces here yet — check back soon.</p>
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 28px;
        }
        @media (max-width: 980px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .grid { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
        }
        .empty {
          color: var(--graphite);
          padding: 60px 0;
        }
      `}</style>
    </div>
  )
}
