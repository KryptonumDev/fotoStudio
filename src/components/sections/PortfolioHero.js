import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ScrollDown from "../atoms/ScrollDown";
import Button from "../atoms/Button";

const PortfolioHero = ({data}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <h1>Portfolio</h1>
        <p>Fotografia to mój sposób na życie, ale i&nbsp;pasja, która trwa niezmiennie od 40 lat.</p>
        <p>Kocham uwieczniać niepowtarzalne chwile i&nbsp;tworzyć z&nbsp;nich wspomnienia, które zostają na długie lata.</p>
        <Button link="/kontakt">Kontakt</Button>
      </div>
      <ScrollDown href="#zobacz" />
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="hero-img" />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    h1 {
      font-size: clamp(${42/16}rem, ${64/19.2}vw, ${64/16}rem);
      margin-bottom: min(${32/10.8}vh, ${32/16}rem);
    }
    p {
      max-width: max(${660/19.2}vw, 439px);
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      &:not(:last-child){
        margin-bottom: min(${24/10.8}vh, ${24/16}rem);
      }
    }
    a {
      margin-top: min(${34/10.8}vh, ${34/16}rem);
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
  }
  @media only screen and (max-width: 1199px){
    .hero-img {
      width: 100%;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient(90deg,#000,rgba(0,0,0,0)),
                    linear-gradient(rgba(0,0,0,0) 75%, #000);
      }
    }
  }
  @media only screen and (max-width: 599px){
    .max-width {
      h1 {
        font-size: ${34/16}rem;
        margin-bottom: 1rem;
      }
      p {
        max-width: 100%;
        font-size: 1rem;
        &:not(:last-child){
          margin-bottom: .6rem;
        }
      }
    }
  }
`
 
export default PortfolioHero;