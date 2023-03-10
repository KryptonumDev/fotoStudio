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
          <Button to="/kontakt">Kontakt</Button>
        </div>
      </div>
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt} className="hero-img" objectFit="contain" loading="eager" />
      <ScrollDown />
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
      line-height: 1;
    }
    a {
      position: absolute;
      left: ${230/19.2}vw;
      bottom: 0;
    }
  }
  .hero-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    width: 100%;
    height: 100%;
    max-width: 3840px;
    max-height: 2160px;
    @media (max-width: 799px){
      width: 150%;
      left: 55%;
    }
  }
  @media only screen and (max-width: 767px) {
    .hero-copy{
      a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`
 
export default HomeHero;