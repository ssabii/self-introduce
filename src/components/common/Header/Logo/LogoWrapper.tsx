import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Logo from './Logo'
import { routePrefix } from 'routes/routePrefix'

function LogoWrapper() {
  return (
    <StyledLink to={routePrefix} aria-label='logo'>
      <Logo width={85} />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default LogoWrapper