import React from 'react'
import logo from '../assets/RNG_logo.png'
import backArrow from '../assets/arrow.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='menu'>
                <NavLink to="/" className='menu__logo'>
                    <img src={logo} alt='rng-logo'/>
                </NavLink>
                <NavLink className='menu__arrow' to='/'>
                    <img className='backArrow' src={backArrow}></img>
                </NavLink>
            </div>
        </div>
    </>
  )
}