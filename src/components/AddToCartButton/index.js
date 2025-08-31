import React from 'react'
import './index.css'

function AddToCartButton({onClick}) {
  return (
    <button className='addtocart-btn' onClick={onClick}>
      ADD TO CART
    </button>
  )
}
export default AddToCartButton
