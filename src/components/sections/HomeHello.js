import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const Hello = ({asset}) => {
  return (
    <StyledHello className="hello sec">
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
        <GatsbyImage image={asset.hello.gatsbyImageData} alt={asset.hello.alt} className="hello-img" />
      </div>
    </StyledHello>
  );
}

const StyledHello = styled.section`
  & > .max-width {
    display: flex;
    align-items: center;
    max-height: 1080px;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
  }
  .hello-header {
    display: flex;
    h2 {
      font-size: ${42/16}rem;
      font-weight: 800;
      margin-bottom: 8px;
    }
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
        margin-bottom: 48px;
      }
    }
  }
  .hello-img {
    position: absolute;
    right: 0;
    z-index: -1;
    max-width: 840px;
    max-height: 100%;
    margin-right: -22px;
    flex-shrink: 0;
    img {
      object-position: top;
    }
  }
  @media only screen and (min-width: 1824px){
    .hello-img {
      max-width: 840px;
      margin-left: auto;
      margin-right: calc((100vw - 1780px) / 2 * -1);
    }
  }
  @media only screen and (max-width: 1599px){
    .hello-header {
      display: block;
      h2 {
        margin-bottom: 21px;
      }
      & > :nth-child(1) {
        margin-right: 0;
        margin-bottom: 82px;
      }
      & > :nth-child(2) {
        max-width: 376px;
      }
      p:not(:last-child) {
        margin-bottom: 32px;
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
  @media only screen and (max-width: 599px){
    > .max-width {
      align-items: flex-end;
    }
    .hello-header {
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
 
export default Hello;