import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProduct, formatPrice } from '../data/products.js'
import { iconMap } from '../icons/Icons.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop/all" replace />

  const Icon = iconMap[product.type]
  const [from, to] = product.tile

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="wrap detail">
      <Link to={`/shop/${product.category}`} className="detail__back">
        ← Back to {product.category === 'watches' ? 'watches' : 'jewelry'}
      </Link>

      <div className="detail__grid">
        <div
          className="detail__art shimmer"
          style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
        >
          {Icon && <Icon color="rgba(255,255,255,0.92)" />}
        </div>

        <div className="detail__info">
          <p className="eyebrow">{product.type}</p>
          <h1>{product.name}</h1>
          <p className="detail__price">{formatPrice(product.price)}</p>
          <div className="divider-gold" />
          <p className="detail__desc">{product.description}</p>
          <p className="detail__material">
            <strong>Material</strong> — {product.material}
          </p>

          <button className="btn btn--solid detail__cta" onClick={handleAdd}>
            {added ? 'Added to cart ✓' : 'Add to cart'}
          </button>

          <ul className="detail__meta">
            <li>Free resizing within 30 days</li>
            <li>Ships in 3–5 business days</li>
            <li>Comes in the Aurelia signature box</li>
          </ul>
        </div>
      </div>

      <style>{`
        .detail {
          padding: 48px 0 120px;
        }
        .detail__back {
          font-size: 13px;
          color: var(--graphite);
        }
        .detail__grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .detail__art {
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .detail__art svg {
          width: 32%;
        }
        .detail__info h1 {
          margin-top: 10px;
          font-size: 38px;
          font-weight: 300;
        }
        .detail__price {
          margin-top: 12px;
          font-size: 20px;
          color: var(--pink-deep);
        }
        .detail__desc {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink);
        }
        .detail__material {
          margin-top: 18px;
          font-size: 14px;
          color: var(--graphite);
        }
        .detail__cta {
          margin-top: 32px;
          width: 100%;
          justify-content: center;
        }
        .detail__meta {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(20,16,15,0.1);
        }
        .detail__meta li {
          font-size: 13px;
          color: var(--graphite);
          margin-bottom: 8px;
          padding-left: 18px;
          position: relative;
        }
        .detail__meta li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 6px;
          height: 1px;
          background: var(--champagne);
        }
        @media (max-width: 760px) {
          .detail__grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </div>
  )
}
