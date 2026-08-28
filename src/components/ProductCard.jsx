import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { iconMap } from '../icons/Icons.jsx'

export default function ProductCard({ product }) {
  const Icon = iconMap[product.type]
  const [from, to] = product.tile

  return (
    <Link to={`/product/${product.id}`} className="pcard">
      <div
        className="pcard__art shimmer"
        style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
      >
        {Icon && <Icon color="rgba(255,255,255,0.92)" />}
      </div>
      <div className="pcard__body">
        <p className="pcard__type">{product.type}</p>
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__price">{formatPrice(product.price)}</p>
      </div>

      <style>{`
        .pcard {
          display: block;
        }
        .pcard__art {
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pcard__art svg {
          width: 34%;
        }
        .pcard__body {
          padding-top: 16px;
        }
        .pcard__type {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--champagne);
        }
        .pcard__name {
          margin-top: 6px;
          font-size: 17px;
          font-weight: 400;
          color: var(--ink);
        }
        .pcard__price {
          margin-top: 6px;
          font-size: 14px;
          color: var(--graphite);
        }
      `}</style>
    </Link>
  )
}
