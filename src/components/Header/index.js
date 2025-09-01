import React from 'react'
import './index.css'

function Header() {
  return (
    <header className='header'>
      <button className='menu-btn' aria-label='Open menu'>
        ☰
      </button>
      <button class="menu-outline-btn">WHICH MANUKA IS FOR ME?</button>
      <ul className="nav-links">
          <li>Shop</li>
          <li>Explore</li>
        </ul>
      <div className='logo'>NEW ZEALAND HONEY CO.</div>
      <ul className="nav-links">
          <li>About</li>
          <li>Rewards</li>
          <li>Contact</li>
        </ul>
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
