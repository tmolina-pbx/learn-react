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
  width: 80%;
  top: 0;
  background: white;
  left: -90%;
  transition: transform 0.3s cubic-bezier(0.73, -0.2, 0.13, 0.99);

  &.is-active {
    transform: translateX(110%);
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
    color: white;
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
  display: block;
  width: 30px;
  height: 4px;
  background: white;
  text-indent: -9999px;
  position: relative;
  margin: 24px;
  border-radius: 1px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    bottom: -10px;
    background: white;
    width: 30px;
    height: 4px;
    display: block;
    border-radius: 1px;
  }

  &::after {
    top: -10px;
  }
`

const StyledMenuButtonClose = styled.button`
  display: block;
  width: 30px;
  height: 4px;
  background: white;
  text-indent: -9999px;
  position: absolute;
  border-radius: 1px;
  top: 30px;
  right: -40px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    bottom: -10px;
    background: white;
    width: 30px;
    height: 4px;
    display: block;
    border-radius: 1px;
  }

  &::after {
    top: -10px;
  }
`

const StyledLi = styled.li``

const Nav = props => {
  const [isOpen, setOpen] = useState(false)
  return (
    <StyledNav {...props}>
      <img src="http://lacaseriadetito.com/wp-content/uploads/2013/10/logo2.png" />
      {!isOpen && (
        <StyledMenuButton
          onClick={() => {
            setOpen(true)
          }}
        >
          Open
        </StyledMenuButton>
      )}

      <StyledUL className={isOpen ? 'is-active' : ''}>
        {isOpen && (
          <StyledLi>
            <StyledMenuButtonClose
              onClick={() => {
                setOpen(false)
              }}
            ></StyledMenuButtonClose>
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
