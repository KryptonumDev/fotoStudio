import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../../atoms/Button";

const Hero = ({asset}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <div className="hero-copy">
          <h1>Stwórzmy coś pięknego</h1>
          <Button link="/kontakt">Kontakt</Button>
        </div>
        <GatsbyImage image={asset.hero.gatsbyImageData} alt={asset.hero.alt} className="hero-img" />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  & > .max-width {
    position: relative;
    overflow: hidden;
  }
  .hero-copy {
    position: absolute;
    left: 0;
    bottom: calc(50% - 74px);
    transform: translateY(50%);
    z-index: 2;
    h1 {
      white-space: nowrap;
      writing-mode: vertical-rl;
      font-size: ${64/16}rem;
      letter-spacing: 0.03rem;
    }
    a {
      position: absolute;
      left: 200%;
      bottom: 0;
    }
  }
  .hero-img {
    width: 80%;
    max-width: 1131px;
    margin-left: auto;
    margin-right: 80px;
    height: 100%;
    display: block;
    img {
      object-position: top;
    }
  }
  @media only screen and (max-width: 1024px) {
    .hero-img {
      margin-right: -100px;
      margin-top: 122px;
    }
  }
  @media only screen and (max-width: 767px) {
    .hero-copy{
      h1 {
        font-size: ${42/16}rem;
        margin-left: -11px;
      }
      bottom: calc(50% - 74px);
      width: 100%;
      a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .hero-img {
      width: calc(100% + 100px);
      margin-right: -100px;
      img {
        margin-top: 74px;
      }
    }
  }
`
 
export default Hero;