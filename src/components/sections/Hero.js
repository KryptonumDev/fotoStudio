import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <div className="hero-copy">
          <h1>Stwórzmy coś pięknego</h1>
          {/* <Button link="/kontakt">Kontakt</Button> */}
        </div>
        <div className="hero-img">
          <StaticImage src="../../resources/images/hero.jpeg" alt="Czarno-biała fotografia kobiety" />
        </div>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  & > .max-width {
    position: relative;
  }
  .hero-copy {
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translateY(50%);
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
    display: table;
    margin-left: auto;
  }
`
 
export default Hero;