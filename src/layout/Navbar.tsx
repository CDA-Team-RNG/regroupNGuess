import React from 'react'
import logo from '../assets/RNG_logo.png'
import backArrow from '../assets/arrow.png'

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='menu'>
                <a href="/" className='menu__logo'>
                    <img src={logo} className='menu__logo-img' alt='rng-logo'/>
                </a>
                <a href="/">
                    <img className='backArrow' src={backArrow}></img>
                </a>
            </div>
        </div>
    </>
  )
}