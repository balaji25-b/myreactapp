import React from 'react'
import './index.css'

function Header() {
  return (
    <header className='header'>
      <button className='menu-btn' aria-label='Open menu'>
        ☰
      </button>
      <div className='logo'>NEW ZEALAND HONEY CO.</div>
      <div className='header-icons'>
        <button aria-label='Account' className='icon-btn'>
          👤
        </button>
        <button aria-label='Search' className='icon-btn'>
          🔍
        </button>
        <button aria-label='Cart' className='icon-btn'>
          🛒<span className='cart-count'>0</span>
        </button>
      </div>
    </header>
  )
}

export default Header
