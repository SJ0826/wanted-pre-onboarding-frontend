import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: 'Roboto', sans-sefif;
    
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    &:focus, &:active{
      outline: none;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
`

export default GlobalStyles
