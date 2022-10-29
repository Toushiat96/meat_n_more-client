import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import './Header.css'

function Header({pageLoad}) {
  const [cartValue , setCartValue] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])
  useEffect(()=>{
    setCartValue(JSON.parse(localStorage.getItem('cart')) ?? [])
  },[pageLoad])

  return (
    <div class="container header">
    <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/home " >
            <img class="logo"  src={logo} alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/home">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/allproductshow">All PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/beef">BEEF</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/mutton">MUTTON</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/fish">FISH</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="/chicken">CHIKEN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/other">OTHER</a>
            </li>
            <li class="nav-item">
            {/* <FaShoppingCart/> */}
            <a class="nav-link " href="/cart">CART {cartValue?.length}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header