import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Slider from "../organisms/Slider";

const AboutHero = ({data, heading, button}) => {
  return (
    <StyledHero className="slider sec" id="zobacz">
      <Slider data={data} />
      <header className="max-width">
        <h2>{heading}</h2>
        <Button link={button.link}>{button.text}</Button>
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
    transition: transform 500ms cubic-bezier(0.52, 0.16, 0.24, 1);
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
      transform: translateY(-1rem);
      width: 100%;
    }
  }
  @media only screen and (max-width: 729px){
    header.max-width {
      position: static;
      h2 {
        z-index: 2;
        top: 50%;
        transform: translate(0%, -50%);
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