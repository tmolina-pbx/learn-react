import React from 'react'
import { GlobalStyle } from '../components/GlobalStyles'

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
