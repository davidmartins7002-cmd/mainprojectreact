import React, { useState } from 'react'
import messages from '../assets/messages.png'
import userheadset from '../assets/user-headset.png'
import shoppingcart from '../assets/shopping-cart.png'
import addi from '../assets/addi.png'
import housechimney from '../assets/house-chimney.png'

import '../App.css'
import { Link } from 'react-router-dom'

const Footer = ({page}) => {

  return (
    <div>
      <div className='mobilefoot'>
        <div style={{backgroundColor: page=== "home" ? "#ffaa00": "#5cbe2d"}} className='mf1'>
          <img src={housechimney} alt="" />
          <h3>Home</h3>
        </div>
        <div className='mf2'>
         <img src={addi} alt="" />
          <h3>Home</h3>
        </div>
        <div className='mf3'>
          <img src={shoppingcart} alt="" />
          <h3>Home</h3>
        </div>
        <div className='mf4'>
          <img src={userheadset} alt="" />
          <h3>Home</h3>
        </div>
        <div className='mf5'>
          <img src={messages} alt="" />
          <h3>Home</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer