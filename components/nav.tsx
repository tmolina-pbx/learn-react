import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledUL = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin-left: auto;
`

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledLi = styled.li`
  padding: 16px;
`

const Nav = props => (
  <StyledNav {...props}>
    <img src="http://lacaseriadetito.com/wp-content/uploads/2013/10/logo2.png" />
    <StyledUL>
      <StyledLi>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href="/lacaseria">
          <a>La CASERIAAAA</a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href="/">
          <a>Reviews</a>
        </Link>
      </StyledLi>
    </StyledUL>
  </StyledNav>
)

export default Nav
