import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ScrollDown from "../atoms/ScrollDown";

const PhotographyHero = ({data}) => {
  return (
    <StyledPhotography className="hero sec">
      <div className="max-width">
        <header>
          <h1>{data.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.heroCopy }} />
        </header>
      </div>
      <ScrollDown />
      <GatsbyImage image={data.hero.gatsbyImageData} alt={data.hero.alt || ""} className="hero-img" objectFit="" />
    </StyledPhotography>
  );
}

const StyledPhotography = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    h1 {
      font-size: clamp(${42/16}rem, ${64/19.2}vw, ${64/16}rem);
      margin-bottom: min(${32/10.8}vh, ${32/16}rem);
    }
    header {
      max-width: max(50%, 439px);
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
      }
    }
  }
`
 
export default PhotographyHero;