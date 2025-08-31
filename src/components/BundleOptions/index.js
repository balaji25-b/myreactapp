import React from 'react'
import './index.css'

function BundleOptions() {
  return (
    <div className='bundle'>
      <div className='bundle-title'>Beauty Bundle</div>
      <div className='bundle-row'>
        <div className='bundle-item'>
          <img
            src='https://learnbees.com/wp-content/uploads/2021/10/best-manuka-honey-2-e1634345332496.png'
            alt='UMF 20+ 250g'
          />
          <span>UMF 10+ 256g</span>
        </div>
        <div className='bundle-item'>
          <img
            src='https://m.media-amazon.com/images/I/81lSFUupoSL._SL1500_.jpg'
            alt='UMF 24+ 250g'
          />
          <span>UMF 24+ 1122g</span>
        </div>
        <div className='bundle-item'>
          <img
            src='https://newzealandhoneyco.com/cdn/shop/files/Manuka-Honey-New-Zealand-UMF-28_125g-4-4oz-417140.png?v=1720141614&width=1600'
            alt='Wooden Spoon'
          />
          <span>Wooden Spoon</span>
        </div>
      </div>
      <button className='bundle-btn'>ADD BUNDLE TO CART</button>
      <div className='bundle-price'>
        <del>$478.75 USD</del> <strong>$430.88 USD</strong>{' '}
        <span className='save'>Save 10%</span>
      </div>
    </div>
  )
}
export default BundleOptions
