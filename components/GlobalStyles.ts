import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    box-sizing: border-box;
  }
  *, *::before, *::after  {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-indent: 0;
  }
  h1 {
  }
  h2 {
  }
  h3 {
  }
  h1, h2, h3, h4, h5, p {
    margin: 0 0 1rem 0;
  }
  button {
    border: 0;
    border-radius: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    &:not(:disabled) {
      cursor: pointer;
    }
  }
`
