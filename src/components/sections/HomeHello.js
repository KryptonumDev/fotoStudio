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
            <Button to="o-mnie">O mnie</Button>
          </div>
          <div>
            <p>Świat w obiektywie to moja pasja od wielu lat. Każdy z nas ma w sobie piękno, które warto utrwalić. Szczególnie w ważnych dla nas momentach.</p>
            <p>Jestem ojcem dwóch dorosłych synów, mężem i fotografem z wieloletnim doświadczeniem.</p>
            <p>Korzystam z nowoczesnego sprzętu i innowacyjnych rozwiązań, uważam jednak że to miłość do fotografowania tworzy dobre ujęcie.</p>
          </div>
        </header>
      </div>
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="hello-img" />
    </StyledHello>
  );
}

const StyledHello = styled.section`
  position: relative;
  & > .max-width {
    display: flex;
    align-items: center;
    @media only screen and (min-width: 729px) and (max-width: 1824px){
      max-width: calc(100% - ${336/19.2}vw);
    }
  }
  .hello-header {
    display: flex;
    & > :nth-child(1) {
      margin-right: ${60/19.2}vw;
    }
    & > :nth-child(2) {
      max-width: ${600/19.2}vw;
    }
  }
  .hello-img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: -1;
    width: 50%;
    height: 100%;
  }
  @media only screen and (max-width: 1299px){
    .hello-header {
      display: block;
      h2 {
        margin-bottom: ${13/10.8}vh;
      }
      & > :nth-child(1) {
        margin-right: 0;
        margin-bottom: ${34/10.24}vh;
      }
      & > :nth-child(2) {
        max-width: 443px;
      }
    }
    .hello-img {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, #000, rgba(0,0,0,0) 30%);
        z-index: 1;
      }
    }
  }
  @media only screen and (max-width: 729px){
    .max-width {
      align-items: flex-end;
    }
    .hello-header {
      & > :nth-child(1) {
        text-align: center;
        margin-bottom: ${21/6}vh;
      }
      & > :nth-child(2) {
        max-width: 100%;
        margin-bottom: 22px;
      }
    }
    .hello-img {
      width: 100%;
      img {
        object-position: 70%;
      }
      &::before {
        background: linear-gradient(rgba(0,0,0,0) 30%, #000 80%);
      }
    }
  }
`
 
export default HomeHello;