import React from 'react'
import logoImage from '../../logo.png'

const Logo = () => 
  <div onClick={() => window.location.reload()}>
    <img 
      className='logo' 
      src={logoImage}   
      alt='Github Profile Display Logo' 
    />
  </div>

export default Logo