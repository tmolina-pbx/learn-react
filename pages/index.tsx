import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Layout } from '../components/Layout'
import styled from 'styled-components'
import { GlobalStyle } from '../components/GlobalStyles'

const Home = () => (
  <>
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
    </Layout>
  </>
)

export default Home
