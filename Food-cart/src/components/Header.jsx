
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='nav'>
      <div className="logo">
        Cart
      </div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cart'}>View cart</Link></li>
      </ul>
    </div>
  )
}

export default Header
