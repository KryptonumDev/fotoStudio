import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ScrollDown from "../atoms/ScrollDown";
import Button from "../atoms/Button";

const SectionHero = ({heading, copy, image, button}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <header>
          <h1>{heading}</h1>
          {copy && copy.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {button && (
            <Button to={button.to}>{button.text}</Button>
          )}
        </header>
      </div>
      <ScrollDown href="#zobacz" />
      <GatsbyImage image={image.gatsbyImageData} alt={image.alt || ""} className="hero-img" loading="eager" />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
  }
  header {
    max-width: clamp(439px, ${785/19.2}vw, 800px);
    h1 {
      font-size: clamp(${42/16}rem, ${64/19.2}vw, ${64/16}rem);
      margin-bottom: min(${32/10.8}vh, ${32/16}rem);
    }
    a {
      margin-top: min(${34/10.8}vh, ${34/16}rem);
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: -1;
    max-width: 2560px;
    transform: translateY(-50%);
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background: linear-gradient(90deg,#000,rgba(0,0,0,0));
    }
  }
  @media only screen and (max-width: 599px){
    header {
      max-width: 100%;
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
  @media (max-width: 399px){
    header p {
      font-size: ${14/16}rem;
    }
  }
`
 
export default SectionHero;