import React from 'react'
import Logo from './Logo'

function LogoWrapper() {
  return (
    <a href="/" aria-label='logo'>
      <Logo width={85} />
    </a>
  )
}

export default LogoWrapper