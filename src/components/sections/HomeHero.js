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
    }
    a {
      position: absolute;
      left: ${230/19.2}vw;
      bottom: 0;
    }
  }
  .hero-img {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(75%, -50%);
    z-index: -1;
    max-width: 1131px;
    margin: 42px ${80/19.2}vw auto auto;
    width: 100%;
    max-height: 100%;
    img {
      object-position: top;
    }
    @media only screen and (min-width: 1780px){
      right: 50%;
      transform: translate(100%, -50%);
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