import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import { iconMap } from '../icons/Icons.jsx'

export default function Cart() {
  const { items, removeFromCart, updateQty, subtotal } = useCart()

  return (
    <div className="wrap cart">
      <p className="eyebrow">Your bag</p>
      <h1>Cart</h1>
      <div className="divider-gold" />

      {items.length === 0 ? (
        <div className="cart__empty">
          <p>Your cart is empty — a shame, given what's waiting.</p>
          <Link to="/shop/all" className="btn btn--solid">Browse pieces</Link>
        </div>
      ) : (
        <div className="cart__layout">
          <ul className="cart__list">
            {items.map((item) => {
              const Icon = iconMap[item.type]
              const [from, to] = item.tile
              return (
                <li key={item.id} className="cart__row">
                  <div
                    className="cart__thumb"
                    style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
                  >
                    {Icon && <Icon color="rgba(255,255,255,0.9)" />}
                  </div>
                  <div className="cart__row-info">
                    <p className="cart__row-name">{item.name}</p>
                    <p className="cart__row-price">{formatPrice(item.price)}</p>
                    <div className="cart__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart__remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="cart__summary">
            <p className="cart__summary-title">Order summary</p>
            <div className="cart__summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart__summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="divider-gold" />
            <div className="cart__summary-row cart__summary-total">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button className="btn btn--solid cart__checkout">Checkout</button>
          </div>
        </div>
      )}

      <style>{`
        .cart { padding: 48px 0 120px; }
        .cart h1 { margin-top: 10px; font-size: 38px; font-weight: 300; }
        .cart__empty {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          color: var(--graphite);
        }
        .cart__layout {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
        }
        .cart__list { display: flex; flex-direction: column; gap: 24px; }
        .cart__row {
          display: grid;
          grid-template-columns: 96px 1fr auto;
          gap: 20px;
          align-items: center;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(20,16,15,0.08);
        }
        .cart__thumb {
          width: 96px;
          height: 96px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart__thumb svg { width: 38%; }
        .cart__row-name { font-size: 16px; }
        .cart__row-price { margin-top: 4px; color: var(--graphite); font-size: 14px; }
        .cart__qty {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(20,16,15,0.15);
          border-radius: var(--radius);
          padding: 4px 12px;
        }
        .cart__qty button {
          background: none;
          border: none;
          font-size: 16px;
          color: var(--ink);
        }
        .cart__remove {
          background: none;
          border: none;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pink-deep);
          align-self: start;
        }
        .cart__summary {
          background: var(--blush);
          border-radius: var(--radius);
          padding: 32px;
          height: fit-content;
        }
        .cart__summary-title {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--champagne);
          margin: 0 0 20px;
        }
        .cart__summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--graphite);
          margin-bottom: 12px;
        }
        .cart__summary-total {
          color: var(--ink);
          font-size: 16px;
          font-weight: 500;
        }
        .cart__checkout {
          margin-top: 20px;
          width: 100%;
          justify-content: center;
        }
        @media (max-width: 800px) {
          .cart__layout { grid-template-columns: 1fr; }
          .cart__row { grid-template-columns: 72px 1fr; }
          .cart__remove { grid-column: 2; justify-self: start; }
        }
      `}</style>
    </div>
  )
}
