import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import ProductImageCarousel from './components/ProductImageCarousel'
import UMFMGOTooltip from './components/UMFMGOTooltip'
import PurchaseOptions from './components/PurchaseOptions'
import QuantitySelector from './components/QuantitySelector'
import AddToCartButton from './components/AddToCartButton'
import BundleOptions from './components/BundleOptions'
import NestedCheckbox from './components/NestedCheckbox'
import Footer from './components/Footer'

function App() {
  const [subscription, setSubscription] = useState('one-time')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    alert(
      `Added ${quantity} item(s) to the cart. (Subscription: ${subscription})`,
    )
  }

  return (
    <>
      <Header />
      <main className='main'>
        <div className='product-image'>
          <ProductImageCarousel />
        </div>
        <div className='product-info'>
          <h1 className='title'>
            Manuka Honey
            <br />
            UMF™ 24+
            <br />
            MGO 1122+
          </h1>
          <UMFMGOTooltip />
          <PurchaseOptions
            subscription={subscription}
            setSubscription={setSubscription}
          />
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <AddToCartButton onClick={handleAddToCart} />
          <BundleOptions />
          {/* Here is Task 2: Nested Checkbox */}
          <section style={{marginTop: '40px'}}>
            <h2>Nested Checkbox Example</h2>
            <NestedCheckbox />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default App
