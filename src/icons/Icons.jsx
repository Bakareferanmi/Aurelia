import React from 'react'

const common = {
  fill: 'none',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function RingIcon({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 120 120" {...common} stroke={color}>
      <circle cx="60" cy="72" r="30" />
      <path d="M60 42 L48 22 L72 22 Z" />
      <circle cx="60" cy="26" r="5" />
    </svg>
  )
}

export function NecklaceIcon({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 120 120" {...common} stroke={color}>
      <path d="M20 24 C20 70 100 70 100 24" />
      <path d="M60 70 L50 92 L60 104 L70 92 Z" />
    </svg>
  )
}

export function EarringIcon({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 120 120" {...common} stroke={color}>
      <path d="M46 22 a14 14 0 1 0 0.1 0" />
      <line x1="60" y1="36" x2="60" y2="58" />
      <path d="M48 58 L72 58 L64 96 L56 96 Z" />
    </svg>
  )
}

export function BraceletIcon({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 120 120" {...common} stroke={color}>
      <ellipse cx="60" cy="60" rx="42" ry="20" />
      <circle cx="18" cy="60" r="3" fill={color} stroke="none" />
      <circle cx="102" cy="60" r="3" fill={color} stroke="none" />
      <circle cx="60" cy="38" r="3" fill={color} stroke="none" />
      <circle cx="60" cy="82" r="3" fill={color} stroke="none" />
    </svg>
  )
}

export function WatchIcon({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 120 120" {...common} stroke={color}>
      <rect x="42" y="10" width="36" height="18" rx="2" />
      <rect x="42" y="92" width="36" height="18" rx="2" />
      <circle cx="60" cy="60" r="28" />
      <line x1="60" y1="60" x2="60" y2="44" />
      <line x1="60" y1="60" x2="72" y2="66" />
    </svg>
  )
}

export const iconMap = {
  ring: RingIcon,
  necklace: NecklaceIcon,
  earring: EarringIcon,
  bracelet: BraceletIcon,
  watch: WatchIcon,
}
