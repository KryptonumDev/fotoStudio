import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import ScrollDown from "../atoms/ScrollDown";

const HomeHero = ({data}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <div className="hero-copy">
          <h1>Stwórzmy coś pięknego</h1>
          <Button link="/kontakt">Kontakt</Button>
        </div>
      </div>
      <GatsbyImage image={data.hero.gatsbyImageData} alt={data.hero.alt} className="hero-img" objectFit="contain" />
      <ScrollDown href="#galeria" />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  & > .max-width {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .hero-copy {
    position: relative;
    margin-bottom: ${148/10.8}vh;
    h1 {
      white-space: nowrap;
      writing-mode: vertical-rl;
      font-size: ${64/16}rem;
      font-size: clamp(${36/16}rem, ${64/10.8}vh, ${64/16}rem);
      letter-spacing: 0.03rem;
    }
    a {
      position: absolute;
      left: ${137/19.2}vw;
      bottom: 0;
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    max-width: 1131px;
    margin: 42px ${80/19.2}vw auto auto;
    height: 100%;
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
      a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`
 
export default HomeHero;