import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const HomeHello = ({data}) => {
  return (
    <StyledHello className="hello sec" id="czesc">
      <div className="max-width">
        <header className="hello-header">
          <div>
            <h2>Cześć!</h2>
            <Button link="o-mnie">O mnie</Button>
          </div>
          <div>
            <p>Świat w&nbsp;obiektywie to moja pasja od wielu lat. Każdy&nbsp;z&nbsp;nas ma w&nbsp;sobie piękno, które warto utrwalić. Szczególnie w&nbsp;ważnych dla nas momentach.</p>
            <p>Jestem ojcem dwóch dorosłych synów, mężem i&nbsp;fotografem z&nbsp;wieloletnim doświadczeniem.</p>
            <p>Korzystam z&nbsp;nowoczesnego sprzętu i&nbsp;innowacyjnych rozwiązań, uważam jednak że to miłość do fotografowania tworzy dobre ujęcie.</p>
          </div>
        </header>
      </div>
      <GatsbyImage image={data.hello.gatsbyImageData} alt={data.hello.alt} className="hello-img" />
    </StyledHello>
  );
}

const StyledHello = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .max-width {
    min-height: inherit;
    display: flex;
    align-items: center;
    max-height: 1080px;
  }
  .hello-header {
    display: flex;
    & > :nth-child(1) {
      margin-right: 60px;
    }
    & > :nth-child(2) {
      max-width: 609px;
    }
    p {
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      line-height: 1.58;
      letter-spacing: -0.022rem;
      &:not(:last-child) {
        margin-bottom: ${24/19.2}vw;
      }
    }
  }
  .hello-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    max-width: 840px;
    max-height: 100%;
    margin-right: -22px;
    flex-shrink: 0;
    margin-left: auto;
    img {
      object-position: top;
    }
  }
  @media only screen and (min-width: 1824px){
    .hello-img {
      margin-right: calc((100vw - 1780px) / 2 * -1);
    }
  }
  @media only screen and (max-width: 1499px){
    .max-width {
      max-width: calc(100% - 250px);
    }
    .hello-header {
      display: block;
      h2 {
        margin-bottom: 21px;
      }
      & > :nth-child(1) {
        margin-right: 0;
        margin-bottom: ${82/10.24}vh;
      }
      & > :nth-child(2) {
        max-width: 443px;
      }
    }
    .hello-img {
      margin-right: -250px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, #000 20%, rgba(0,0,0,0) 50%);
        z-index: 1;
      }
    }
  }
  @media only screen and (max-width: 729px){
    .max-width {
      max-width: 100%;
      align-items: flex-end;
    }
    .hello-header {
      margin-left: 0;
      h2 {
        position: absolute;
        right: 0;
        top: 50%;
        white-space: nowrap;
        writing-mode: vertical-rl;
        transform: translate(25%, -50%);
      }
      & > :nth-child(1) {
        text-align: center;
        margin-bottom: 28px;
      }
      & > :nth-child(2) {
        max-width: 100%;
        margin-bottom: 22px;
      }
      p {
        font-size: 13px;
      }
      p:not(:last-child) {
        margin-bottom: 11px;
      }
    }
    .hello-img {
      height: 100%;
      margin: 0 -22px;
      &::before {
        background: linear-gradient(rgba(0,0,0,0) 42%, #000 76%);
      }
    }
  }
`
 
export default HomeHello;