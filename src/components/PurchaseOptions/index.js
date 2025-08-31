import React from 'react'
import './index.css'

function PurchaseOptions({subscription, setSubscription}) {
  return (
    <div className='purchase-options'>
      <label className={subscription === 'one-time' ? 'active' : ''}>
        <input
          type='radio'
          name='purchase'
          checked={subscription === 'one-time'}
          onChange={() => setSubscription('one-time')}
        />
        One-time purchase <span className='price'>$55.88 USD</span>
      </label>
      <label className={subscription === 'subscribe' ? 'active' : ''}>
        <input
          type='radio'
          name='purchase'
          checked={subscription === 'subscribe'}
          onChange={() => setSubscription('subscribe')}
        />
        Subscribe & save 20% <span className='price'>$44.70 USD</span>
      </label>
      <div className='purchase-info'>What is a Subscription?</div>
    </div>
  )
}
export default PurchaseOptions
