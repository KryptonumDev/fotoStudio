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
    --error-color: #de071c;
    --serif-font: 'DM Serif Display', serif;
    --sans-serif-font: 'Montserrat', sans-serif;
  }
  body {
    background-color: var(--bg);
    color: var(--color);
    font-family: var(--sans-serif-font);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.022em;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: var(--serif-font);
    letter-spacing: 0.03em;
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
  select {
    cursor: pointer;
    background: right 5px center / 21px no-repeat url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24' height='24' stroke-width='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6 9l6 6 6-6' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
  }
  .sec {
    ul, ol {
      padding-left: 1em;
    }
  }
  svg {
    vertical-align: top;
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--white);
    transform: translateY(-0.075em);
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    & + span {
      vertical-align: middle;
    }
  }
  input[type="checkbox"]::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(0);
    width: 60%;
    height: 60%;
    background-color: var(--white);
    transition: transform .2s;
  }
  input[type="checkbox"]:checked::before {
    transform: translate(-50%,-50%) scale(1);
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
  .sec {
    overflow: hidden;
    min-height: 815px;
    height: 1px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    & > .max-width {
      position: relative;
    } 
    h2 {
      font-size: clamp(${34/16}rem, ${42/10.8}vh, ${42/16}rem);
      font-weight: 800;
      letter-spacing: 0.03em;
      line-height: 1.5;
      margin-bottom: .6em;
      z-index: 2;
    }
    p, ul, ol {
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      @media only screen and (max-width: 459px){
        font-size: ${14/16}rem;
      }
      &:not(:last-child){
        & + ol, & + ul {
          margin-top: -.3em;
        }
        margin-bottom: .6em;
      }
    }
  }
  .scrollSnap {
    height: 100vh;
    height: 100dvh;
    overflow: auto;
  }
  @media only screen and (min-height: 548px){
    .scrollSnap {
      scroll-snap-type: y mandatory;
    }
    .sec {
      min-height: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 729px){
    .sec {
      header h2:not(.notVertical) {
        position: absolute;
        right: 0;
        top: 35%;
        white-space: nowrap;
        writing-mode: vertical-rl;
        transform: translate(35%, -50%);
      }
    }
  }
  .footer {
    scroll-snap-align: start;
  }
`

export default GlobalStyle