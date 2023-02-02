import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const Hero = ({asset}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <div className="hero-copy">
          <h1>Stwórzmy coś pięknego</h1>
          <Button link="/kontakt">Kontakt</Button>
        </div>
        <GatsbyImage image={asset.hero.gatsbyImageData} alt={asset.hero.alt} className="hero-img" objectFit="contain" />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  .hero-copy {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: calc(50% - 74px);
    transform: translateY(50%);
    z-index: 2;
    h1 {
      white-space: nowrap;
      writing-mode: vertical-rl;
      font-size: ${64/16}rem;
      font-size: clamp(${42/16}rem, ${64/10.8}vh, ${64/16}rem);
      letter-spacing: 0.03rem;
    }
    a {
      position: absolute;
      left: 12%;
      bottom: 0;
    }
  }
  .hero-img {
    max-width: 1131px;
    margin: 42px ${80/19.2}vw auto auto;
    height: 100%;
    display: block;
    img {
      object-position: top;
    }
  }
  @media only screen and (max-width: 1399px){
    .hero-img {
      margin-right: ${-(200/19.2)}vw;
      margin-top: ${120/10.24}vh;
    }
  }
  @media only screen and (max-width: 767px) {
    .hero-copy{
      h1 {
        margin-left: -11px;
      }
      bottom: calc(50% - 74px);
      a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .hero-img {
    }
  }
`
 
export default Hero;