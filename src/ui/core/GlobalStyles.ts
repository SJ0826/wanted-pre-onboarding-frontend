import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    
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
`

export default GlobalStyles
