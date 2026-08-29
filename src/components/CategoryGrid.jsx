import React from 'react'
import { Link } from 'react-router-dom'
import { Gem, Sparkles, Droplet, Circle, Watch } from 'lucide-react'

const categories = [
  { label: 'Rings', type: 'ring', category: 'jewelry', icon: Gem, from: '#ff4fa3', to: '#d8006b' },
  { label: 'Necklaces', type: 'necklace', category: 'jewelry', icon: Sparkles, from: '#f3d4e6', to: '#ff1587' },
  { label: 'Earrings', type: 'earring', category: 'jewelry', icon: Droplet, from: '#ffd7ea', to: '#c7a25c' },
  { label: 'Bracelets', type: 'bracelet', category: 'jewelry', icon: Circle, from: '#ffb8dc', to: '#ff1587' },
  { label: 'Watches', type: 'watch', category: 'watches', icon: Watch, from: '#241d1a', to: '#0e0c0b' },
]

export default function CategoryGrid() {
  return (
    <div className="catgrid">
      {categories.map(({ label, type, category, icon: Icon, from, to }) => (
        <Link
          key={type}
          to={`/shop/${category}?type=${type}`}
          className="catgrid__tile"
          style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
        >
          <Icon size={30} strokeWidth={1.25} color="rgba(255,255,255,0.9)" />
          <span>{label}</span>
        </Link>
      ))}

      <style>{`
        .catgrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .catgrid__tile {
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--white);
        }
        .catgrid__tile span {
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
