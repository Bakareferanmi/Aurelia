// Real photos from Unsplash (free license) stand in for product photography
// until you shoot your own — swap the `image` URL for a real shot whenever
// you have one. Multiple products intentionally reuse the same reference
// photo per type; that's expected for a placeholder catalog.

const IMG = {
  ring: 'https://images.unsplash.com/photo-1656010280156-fa8c1793c235?auto=format&fit=crop&w=800&q=70',
  necklace: 'https://images.unsplash.com/photo-1654699991520-aaaf4dd2608b?auto=format&fit=crop&w=800&q=70',
  earring: 'https://images.unsplash.com/photo-1596107034181-9f168717f1ee?auto=format&fit=crop&w=800&q=70',
  bracelet: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?auto=format&fit=crop&w=800&q=70',
  watchA: 'https://images.unsplash.com/photo-1704428303280-84768603d539?auto=format&fit=crop&w=800&q=70',
  watchB: 'https://images.unsplash.com/photo-1758071348980-d1eed770f34f?auto=format&fit=crop&w=800&q=70',
}

export const products = [
  {
    id: 'ring-halcyon',
    name: 'Halcyon Ring',
    category: 'jewelry',
    type: 'ring',
    price: 184000,
    material: '18k gold vermeil, lab-grown diamond',
    description:
      'A single stone set low on a tapered band, made to catch light without shouting about it. Sized to order.',
    image: IMG.ring,
    tile: ['#ff4fa3', '#ff1587'],
    featured: true,
  },
  {
    id: 'necklace-solene',
    name: 'Solène Pendant',
    category: 'jewelry',
    type: 'necklace',
    price: 156000,
    material: '18k gold vermeil, freshwater pearl',
    description:
      'A single pearl on a fine box chain — the kind of piece that goes from desk to dinner without a change of clothes.',
    image: IMG.necklace,
    tile: ['#f3d4e6', '#ff1587'],
    featured: true,
  },
  {
    id: 'earring-nova',
    name: 'Nova Hoops',
    category: 'jewelry',
    type: 'earring',
    price: 98000,
    material: '18k gold vermeil',
    description:
      'Weighted for a slight, satisfying sway. Small enough for Monday, polished enough for anything after.',
    image: IMG.earring,
    tile: ['#ffd7ea', '#d8006b'],
  },
  {
    id: 'bracelet-verre',
    name: 'Verre Bangle',
    category: 'jewelry',
    type: 'bracelet',
    price: 122000,
    material: '18k gold vermeil',
    description:
      'A single unbroken line, worn alone or stacked three deep. Comes in three fits.',
    image: IMG.bracelet,
    tile: ['#ffb8dc', '#ff1587'],
  },
  {
    id: 'earring-studette',
    name: 'Studette Drops',
    category: 'jewelry',
    type: 'earring',
    price: 74000,
    material: 'sterling silver, cubic zirconia',
    description:
      'Small stones, secure backs, the earring you forget you are wearing until someone compliments it.',
    image: IMG.earring,
    tile: ['#f7c9de', '#c7a25c'],
  },
  {
    id: 'ring-marea',
    name: 'Marea Band',
    category: 'jewelry',
    type: 'ring',
    price: 132000,
    material: '18k gold vermeil',
    description:
      'A wave-textured band that reads sculptural up close and quiet from across the room.',
    image: IMG.ring,
    tile: ['#ffe1ef', '#ff4fa3'],
  },
  {
    id: 'watch-meridian',
    name: 'Meridian',
    category: 'watches',
    type: 'watch',
    price: 268000,
    material: 'stainless steel case, sapphire crystal, 38mm',
    description:
      'A clean three-hand dial with a date window at three — sized to sit close to the wrist, not shout from across a room.',
    image: IMG.watchA,
    tile: ['#1a1613', '#ff1587'],
    featured: true,
  },
  {
    id: 'watch-lumen',
    name: 'Lumen',
    category: 'watches',
    type: 'watch',
    price: 312000,
    material: 'rose gold-plated case, mother-of-pearl dial, 34mm',
    description:
      'A mother-of-pearl face that shifts colour with the light — the closest thing to jewelry that also tells time.',
    image: IMG.watchB,
    tile: ['#2a201c', '#c7a25c'],
    featured: true,
  },
  {
    id: 'watch-noir',
    name: 'Noir Chrono',
    category: 'watches',
    type: 'watch',
    price: 358000,
    material: 'black IP steel case, chronograph movement, 40mm',
    description:
      'The sport watch for people who do not do sport — three subdials, black on black, tactile pushers.',
    image: IMG.watchA,
    tile: ['#0e0c0b', '#6b6560'],
  },
  {
    id: 'watch-linea',
    name: 'Linea',
    category: 'watches',
    type: 'watch',
    price: 224000,
    material: 'gold-plated mesh strap, 32mm',
    description:
      'A mesh strap that sits like fabric against the wrist, with a dial small enough to layer under a cuff.',
    image: IMG.watchB,
    tile: ['#241d1a', '#ff8dc0'],
  },
]

export function getProduct(id) {
  return products.find((p) => p.id === id)
}

export function getFeatured() {
  return products.filter((p) => p.featured)
}

export function getByCategory(category) {
  if (!category || category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function formatPrice(value) {
  return `₦${value.toLocaleString('en-NG')}`
}
