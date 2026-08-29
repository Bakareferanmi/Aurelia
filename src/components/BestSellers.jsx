import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

export default function BestSellers({ products }) {
  const trackRef = useRef(null)

  function scrollBy(dir) {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8 * dir
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="best">
      <button className="best__arrow best__arrow--left" aria-label="Scroll left" onClick={() => scrollBy(-1)}>
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      <div className="best__track" ref={trackRef}>
        {products.map((p) => (
          <div className="best__item" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button className="best__arrow best__arrow--right" aria-label="Scroll right" onClick={() => scrollBy(1)}>
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      <style>{`
        .best {
          position: relative;
          display: flex;
          align-items: center;
        }
        .best__track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 4px 2px 12px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .best__track::-webkit-scrollbar {
          display: none;
        }
        .best__item {
          flex: 0 0 220px;
          scroll-snap-align: start;
        }
        .best__arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(20,16,15,0.15);
          background: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
          margin: 0 8px;
        }
        @media (max-width: 640px) {
          .best__arrow { display: none; }
          .best__item { flex-basis: 150px; }
        }
      `}</style>
    </div>
  )
}
