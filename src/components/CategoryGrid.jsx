import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Rings',
    type: 'ring',
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1656010280156-fa8c1793c235?auto=format&fit=crop&w=500&q=65',
  },
  {
    label: 'Necklaces',
    type: 'necklace',
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1654699991520-aaaf4dd2608b?auto=format&fit=crop&w=500&q=65',
  },
  {
    label: 'Earrings',
    type: 'earring',
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1596107034181-9f168717f1ee?auto=format&fit=crop&w=500&q=65',
  },
  {
    label: 'Bracelets',
    type: 'bracelet',
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?auto=format&fit=crop&w=500&q=65',
  },
  {
    label: 'Watches',
    type: 'watch',
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1704428303280-84768603d539?auto=format&fit=crop&w=500&q=65',
  },
]

export default function CategoryGrid() {
  return (
    <div className="catgrid">
      {categories.map(({ label, type, category, image }) => (
        <Link key={type} to={`/shop/${category}?type=${type}`} className="catgrid__tile">
          <img src={image} alt={label} loading="lazy" />
          <span className="catgrid__overlay" />
          <span className="catgrid__label">{label}</span>
        </Link>
      ))}

      <style>{`
        .catgrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .catgrid__tile {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 16px;
          border: 1px solid var(--stroke);
        }
        .catgrid__tile img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .catgrid__tile:hover img {
          transform: scale(1.06);
        }
        .catgrid__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,16,15,0.72), rgba(20,16,15,0.05) 55%);
        }
        .catgrid__label {
          position: relative;
          color: var(--white);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        @media (max-width: 760px) {
          .catgrid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .catgrid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
      `}</style>
    </div>
  )
}
