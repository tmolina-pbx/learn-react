import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import styled from 'styled-components'
import { Layout } from '../components/Layout'
import { Grid } from '@material-ui/core'

const StyledDiv = styled.div`
  position: relative;
  background-image: url('http://lacaseriadetito.es/wp-content/uploads/2018/06/8.jpg');
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  height: 60vh;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const Home = () => (
  <>
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <StyledDiv>
        <Nav />
      </StyledDiv>
      <section>
        <Grid container>
          <Grid item sm={6}>
            <article>
              <h2>Bienvenidos a nuestra casa</h2>
              <p>
                Macarena y Tito convirtieron ésta antigua casa de labranza en un
                alojamiento hotelero que tanto por sus instalaciones como
                servicios, es hoy un referente en Jaén de un genuino Bed &
                Breakfast.
              </p>
            </article>
          </Grid>
          <Grid item sm={6}>
            <article>
              <h2>Se sentirá como en casa</h2>
              <p>
                Atendido con mimo por ellos y dada su estratégica situación es
                un lugar ideal para formar parte de su grupo de “amigos” que
                gustan de visitar las maravillas que guarda su entorno, así como
                disfrutar de los platos elaborados con cariño en la cocina de
                Macarena.
              </p>
            </article>
          </Grid>
        </Grid>
      </section>
    </Layout>
  </>
)

export default Home
