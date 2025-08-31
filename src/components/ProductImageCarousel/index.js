import React, {useState} from 'react'
import './index.css'

const images = [
  'https://m.media-amazon.com/images/I/81lSFUupoSL._SL1500_.jpg',
  'https://learnbees.com/wp-content/uploads/2021/10/best-manuka-honey-2-e1634345332496.png',
  'https://i5.walmartimages.com/seo/New-Zealand-Honey-Co-Raw-Manuka-Honey-UMF-20-MGO-829-4-4-oz_6fdd6173-f92b-45d9-85b2-1d7ffd6bc038.f15946f78879c82716ce6759fd40d5d1.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
  'https://cdn.taw9eel.com/media/catalog/product/cache/1/image/519x/9df78eab33525d08d6e5fb8d27136e95/n/a/nadd038-2_1.jpg',
  'https://newzealandhoneyco.com/cdn/shop/files/Manuka-Honey-New-Zealand-UMF-28_125g-4-4oz-417140.png?v=1720141614&width=1600',
]

function ProductImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  function prev() {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }
  function next() {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <div className='carousel'>
      <button aria-label='Prev image' className='nav-btn' onClick={prev}>
        ‹
      </button>
      <div className='carousel-img-wrapper'>
        <img
          src={images[activeIndex]}
          className='carousel-img'
          alt={`Product ${activeIndex + 1}`}
        />
      </div>
      <button aria-label='Next image' className='nav-btn' onClick={next}>
        ›
      </button>
      <div className='carousel-thumbs'>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=''
            className={`thumb ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}
export default ProductImageCarousel
