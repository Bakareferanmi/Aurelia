import React, { useEffect, useState } from 'react'

const messages = [
  'FREE SHIPPING ON ORDERS OVER ₦150,000',
  'NEW ARRIVALS — THE MERIDIAN COLLECTION',
  'FREE RESIZING WITHIN 30 DAYS',
]

export default function TopBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="topbar">
      <span key={index} className="topbar__msg">{messages[index]}</span>

      <style>{`
        .topbar {
          background: var(--ink);
          color: var(--white);
          text-align: center;
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          overflow: hidden;
        }
        .topbar__msg {
          display: inline-block;
          animation: topbar-fade 0.5s ease;
        }
        @keyframes topbar-fade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .topbar__msg { animation: none; }
        }
      `}</style>
    </div>
  )
}
