import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-family: 'Ubuntu', sans-serif;
  border: 4px solid salmon;

  .isActive {
    border: 10px solid green;
  }
`

const LaCaseria = () => (
  <>
    <Head>
      <title>La Caseria</title>
    </Head>
    <Nav />
    <StyledSpan> THIS IS HOW WE DO IT</StyledSpan>
  </>
)

export default LaCaseria
