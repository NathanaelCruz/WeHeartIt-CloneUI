import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 62.5%;
    width: 100vw;
    overflow: hidden;
  }

  h1{
    font: 400 2.2em Montserrat;
  }

  h3{   
    font: 400 1.6em Montserrat;
  }

  p{
    font: 400 1.4em Montserrat;
  }

  a{
    font: 400 1.5em Montserrat;
    text-decoration: none;
  }

  img{
    max-width: 100%;
  }
  ul, li, ol {
    list-style: none;
  }

`
