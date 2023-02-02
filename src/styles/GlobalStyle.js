import { createGlobalStyle } from "styled-components";
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --bg: #000000;
    --white: #ffffff;
    --color: #F2F0E3;
  }
  body {
    background-color: var(--bg);
    color: var(--color);
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    font-family: 'Argent CF', serif;
    color: var(--color);
  }
  button {
    cursor: pointer;
  }
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
  }
  svg {
    vertical-align: top;
  }
  .max-width {
    width: calc(100% - 44px);
    max-width: 1780px;
    margin: 0 auto;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media only screen and (min-height: 570px){
    .scrollSnap {
      scroll-snap-type: y mandatory;
      height: 100vh;
      height: 100dvh;
      overflow: auto;
    }
  }
  .sec {
    overflow: hidden;
    height: 100%;
    scroll-snap-align: start;
  }
  .footer {
    scroll-snap-align: start;
  }
`

export default GlobalStyle