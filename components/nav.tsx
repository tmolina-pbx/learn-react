import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  margin-left: auto;
  color: white;
  position: absolute;
  height: 100vh;
  width: 40%;
  /* max-width: 320px; */
  top: 0;
  background: white;
  left: -40%;
  transition: transform 0.3s ease-in-out;

  &.is-active {
    transform: translateX(100%);
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const StyledAnchor = styled.a`
  color: black;
  padding: 16px;
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 600px) {
    color: black;
    border: 0;
  }
`

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledMenuButton = styled.button`
  span {
    display: block;
    width: 30px;
    height: 4px;
    background: #e7c6a3;
    text-indent: -9999px;
    position: relative;
    margin: 24px;
    border-radius: 1px;

    &::before,
    &::after {
      position: absolute;
      content: '';
      bottom: -10px;
      background: #e7c6a3;
      width: 30px;
      height: 4px;
      display: block;
      border-radius: 1px;
    }

    &::after {
      top: -10px;
    }
  }
`

const StyledMenuButtonClose = styled.button`
  position: absolute;
  top: 30px;
  right: -70px;

  span {
    display: block;
    width: 30px;
    height: 4px;
    background: #e7c6a3;
    text-indent: -9999px;
    border-radius: 1px;
    position: relative;
    margin: 24px;

    &::before,
    &::after {
      position: absolute;
      content: '';
      bottom: -10px;
      background: #e7c6a3;
      width: 30px;
      height: 4px;
      display: block;
      border-radius: 1px;
    }

    &::after {
      top: -10px;
    }
  }
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 60px;

  @media only screen and (min-width: 600px) {
    max-width: 120px;
  }
`

const StyledNavBar = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledLi = styled.li``

const Nav = (props) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <StyledNav {...props}>
      <StyledNavBar>
        <StyledImage src="http://lacaseriadetito.com/wp-content/uploads/2013/10/logo2.png" />

        {!isOpen && (
          <StyledMenuButton
            onClick={() => {
              setOpen(true)
            }}
          >
            <span>Open</span>
          </StyledMenuButton>
        )}
      </StyledNavBar>

      <StyledUL className={isOpen ? 'is-active' : ''}>
        {isOpen && (
          <StyledLi>
            <StyledMenuButtonClose
              onClick={() => {
                setOpen(false)
              }}
            >
              <span>Close</span>
            </StyledMenuButtonClose>
          </StyledLi>
        )}
        <StyledLi>
          <Link href="/" passHref>
            <StyledAnchor>Home</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/lacaseria" as="/lacaseria" passHref>
            <StyledAnchor>La CASERIAAAA</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/" passHref>
            <StyledAnchor>Contact Us</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/" passHref>
            <StyledAnchor>Reviews</StyledAnchor>
          </Link>
        </StyledLi>
      </StyledUL>
    </StyledNav>
  )
}

export default Nav
