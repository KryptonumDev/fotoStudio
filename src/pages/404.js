import * as React from "react"
import styled from "styled-components";
import Button from '../components/atoms/Button';
import { Seo } from "../components/Seo";
import { inject } from '@vercel/analytics';

const NotFoundPage = () => {
  inject();
  return (
    <StyledNotFound className="NotFound">
      <div className="NotFound-content">
        <div className="max-width">
          <h1>Strona której szukasz nie istnieje</h1>
          <Button link="/">Główna</Button>
        </div>
      </div>
      <div className="NotFound-marquee">
        <div><span>404</span><span>404</span><span>404</span><span>404</span><span>404</span></div>
        <div><span>404</span><span>404</span><span>404</span><span>404</span><span>404</span></div>
        <div><span>404</span><span>404</span><span>404</span><span>404</span><span>404</span></div>
      </div>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .NotFound-content {
    width: 100%;
    text-align: center;
    z-index: 1;
    padding: ${100/10.8}vh 0;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 200%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(rgba(0,0,0,0), #000);
      z-index: -1;
    }
    h1 {
      font-size: max(${64/19.2}vw, ${30/16}rem);
      margin-bottom: ${50/10.8}vh;
    }
  }
  .NotFound-marquee {
    position: absolute;
    left: -2%;
    right: -2%;
    top: 0;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
    & > div {
      white-space: nowrap;
      writing-mode: vertical-rl;
      animation: marquee 8s infinite linear;
      font-size: ${200/10.8}vh;
      @media only screen and (max-width: 449px){
        font-size: ${150/10.8}vh;
      }
      line-height: 1;
      font-family: "DM Serif Display", serif;
      &:nth-child(2){
        animation-direction: reverse;
      }
      > span:not(:last-child) {
        margin-bottom: ${89/10.8}vh;
      }
    }
    
  }
  @keyframes marquee {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-21%);
    }
  }
`

export default NotFoundPage

export const Head = () => (
  <>
    <Seo />
    <title>Strony nie znaleziono - Foto Studio</title>
  </>
)
