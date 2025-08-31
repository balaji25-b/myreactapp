import React from 'react'
import './index.css'

function QuantitySelector({quantity, setQuantity}) {
  return (
    <div className='qty-selector'>
      <span className='qty-label'>Select Quantity</span>
      <div>
        <button
          className='qty-btn'
          aria-label='Dec qty'
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          –
        </button>
        <input
          className='qty-input'
          type='text'
          value={quantity}
          readOnly
          aria-live='polite'
        />
        <button
          className='qty-btn'
          aria-label='Inc qty'
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
export default QuantitySelector
