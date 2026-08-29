import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Pause } from 'lucide-react'

const slides = [
  {
    eyebrow: 'Fine Jewelry & Timepieces',
    headline: ['Worn close.', 'Noticed anyway.'],
    sub: 'Gold vermeil jewelry and precision wrist watches, designed in small batches and finished by hand.',
    cta: { label: 'Shop the collection', to: '/shop/all' },
    from: '#ff2e93',
    to: '#d8006b',
  },
  {
    eyebrow: 'New — The Meridian Collection',
    headline: ['Time, kept', 'close to you.'],
    sub: 'Sapphire crystal cases sized for every wrist, paired with dials that reward a second look.',
    cta: { label: 'Shop watches', to: '/shop/watches' },
    from: '#241d1a',
    to: '#0e0c0b',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!playing) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [playing])

  const slide = slides[index]

  return (
    <section
      className="hero"
      style={{ background: `linear-gradient(135deg, ${slide.from}, ${slide.to})` }}
    >
      <button
        className="hero__toggle"
        aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        onClick={() => setPlaying((p) => !p)}
      >
        {playing ? <Pause size={15} strokeWidth={1.5} /> : <Play size={15} strokeWidth={1.5} />}
      </button>

      <div className="wrap hero__inner">
        <p className="eyebrow eyebrow--light">{slide.eyebrow}</p>
        <h1 className="hero__headline">
          {slide.headline[0]}
          <br />
          {slide.headline[1]}
        </h1>
        <p className="hero__sub">{slide.sub}</p>
        <div className="hero__ctas">
          <Link to={slide.cta.to} className="btn btn--pale">
            {slide.cta.label}
          </Link>
          <Link to="/shop/all" className="btn__text">
            View all pieces →
          </Link>
        </div>
      </div>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <style>{`
        .hero {
          position: relative;
          color: var(--white);
          padding: 110px 0 72px;
          overflow: hidden;
          transition: background 0.6s ease;
        }
        @media (max-width: 560px) {
          .hero { padding: 72px 0 56px; }
        }
        .hero::before {
          content: '';
          position: absolute;
          right: -12%;
          top: -30%;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .hero::after {
          content: '';
          position: absolute;
          right: 6%;
          bottom: -22%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
        }
        @media (max-width: 560px) {
          .hero::before { width: 220px; height: 220px; right: -60px; top: -60px; }
          .hero::after { width: 140px; height: 140px; right: 20px; bottom: -40px; }
        }
        .hero__toggle {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 2;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          background: rgba(0,0,0,0.15);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__inner {
          position: relative;
          max-width: 720px;
        }
        .hero__headline {
          margin-top: 18px;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 200;
          letter-spacing: -0.01em;
          line-height: 1.02;
        }
        .hero__sub {
          margin-top: 26px;
          max-width: 440px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.88);
        }
        .hero__ctas {
          margin-top: 44px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .btn__text {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding-bottom: 3px;
        }
        .hero__dots {
          position: relative;
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 48px;
        }
        .hero__dot {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.35);
          border: none;
          transition: background 0.3s ease;
        }
        .hero__dot.is-active {
          background: var(--white);
        }
      `}</style>
    </section>
  )
}
