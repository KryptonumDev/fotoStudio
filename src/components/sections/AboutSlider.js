import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import AboutSliderPagination from "../organisms/AboutSliderPagination";

const AboutHero = ({data}) => {
  const [activeSlider, setActiveSlider] = useState(1);

  return (
    <StyledHero className="slider sec" id="zobacz">
      <div className="slider-gallery">
        <div className="sliderGallery-wrapper" style={{transform: `translateX(-${(activeSlider-1) * (360 + 60)}px)`}}>
          {data.map((slide, i) => (
            <GatsbyImage image={slide.gatsbyImageData} alt={slide.alt || ""} className="sliderGalleryWrapper-item" key={i} />
          ))}
        </div>
        <AboutSliderPagination activeSlider={activeSlider} setActiveSlider={setActiveSlider} />
      </div>
      <header className="max-width">
        <h2>Zobacz co możemy stworzyć</h2>
        <Button link="/portfolio">Portfolio</Button>
      </header>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  .max-width {
    height: unset;
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    margin-top: ${196/10.8}vh;
    z-index: 2;
  }
  .slider-gallery {
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translateY(60%);
    width: 60%;
    overflow-x: hidden;
    overflow-y: visible;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(90deg, #000, rgba(0,0,0,0), rgba(0,0,0,0), #000);
      z-index: 1;
      pointer-events: none;
    }
  }
  .sliderGallery-wrapper {
    display: flex;
    flex-wrap: nowrap;
    transition: transform 800ms cubic-bezier(0.52, 0.16, 0.24, 1);
    will-change: transform;
    padding: 0 calc(50% - 180px);
  }
  .sliderGalleryWrapper-item {
    width: 360px;
    @media only screen and (min-height: 548px){
      max-height: ${580/10.24}vh;
    }
    flex-shrink: 0;
    &:not(:last-child) {
      margin-right: 60px;
    }
  }
  @media only screen and (max-width: 1399px){
    .max-width {
      margin-top: ${144/10.8}vh;
      h2 {
        font-size: ${28/16}rem;
      }
    }
    .slider-gallery {
      bottom: 0;
      transform: translateY(-3%);
      width: 100%;
    }
  }
  @media only screen and (max-width: 767px){
    .max-width {
      position: static;
      h2 {
        z-index: 2;
        top: 50%;
        transform: translate(0%, -50%);
        font-size: ${24/16}rem;
      }
    }
    .sliderGalleryWrapper-item {
      img {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`
 
export default AboutHero;