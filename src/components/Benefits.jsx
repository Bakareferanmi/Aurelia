import React from 'react'
import { Truck, RotateCcw, Gift, Ruler, ShieldCheck, Sparkles } from 'lucide-react'

const perks = [
  { icon: Truck, label: 'Free Shipping', sub: 'On orders over ₦150,000' },
  { icon: RotateCcw, label: 'Extended Returns', sub: '30 days, no questions asked' },
  { icon: Gift, label: 'Easy Gifting', sub: 'Signature box, gift note included' },
  { icon: Ruler, label: 'Free Resizing', sub: 'Once, within 30 days' },
  { icon: Sparkles, label: 'Made to Order', sub: 'Small batches, hand-finished' },
  { icon: ShieldCheck, label: 'Secure Checkout', sub: 'Encrypted payments' },
]

export default function Benefits() {
  return (
    <div className="benefits">
      {perks.map(({ icon: Icon, label, sub }) => (
        <div className="benefits__item" key={label}>
          <Icon size={26} strokeWidth={1.25} color="var(--pink-deep)" />
          <p className="benefits__label">{label}</p>
          <p className="benefits__sub">{sub}</p>
        </div>
      ))}

      <style>{`
        .benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--stroke);
          border: 1px solid var(--stroke);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .benefits__item {
          background: var(--ivory);
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }
        .benefits__label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--ink);
        }
        .benefits__sub {
          font-size: 12px;
          line-height: 1.5;
          color: var(--graphite);
        }
        @media (max-width: 640px) {
          .benefits { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  )
}
