import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import HomeSliderPagination from "../organisms/HomeSliderPagination";
import Button from "../atoms/Button";

const headings = ["Portretowa", "Portretowa", "Weselna", "Reportażowa", "Reportażowa", "Produktowa", "Produktowa", "Analogowa", "Analogowa"];

const HomeSlider = ({data}) => {
  const [activeSlider, setActiveSlider] = useState(1);
  const [activeHeading, setActiveHeading] = useState(headings[activeSlider-1]);
  const heading = useRef('');
  useEffect(() => {
    heading.current.classList.add('change');
    setTimeout(() => {
      setActiveHeading(headings[activeSlider-1]);
      heading.current.classList.remove('change');
    }, 400);
  }, [activeSlider])

  return (
    <StyledSlider className="slider sec" id="galeria">
      <div className="max-width">
        <div className="slider-copy">
          <h2 ref={heading}>{activeHeading}</h2>
          <Button link="/portfolio">Portfolio</Button>
        </div>
      </div>
      <div className="slider-wrapper" style={{transform: `translateX(-${(activeSlider-1)*100}%)`}}>
        {data.map((slide, i) => (
          <div className="sliderWrapper-item" key={i}>
            <GatsbyImage image={slide.gatsbyImageData} alt={slide.alt || ""} className="slider-img" />
          </div>
        ))}
      </div>
      <HomeSliderPagination activeSlider={activeSlider} setActiveSlider={setActiveSlider} />
    </StyledSlider>
  );
}

const StyledSlider = styled.section`
  position: relative;
  & > .max-width {
    max-width: calc(100% - ${336/19.2}vw);
    margin-top: ${256/10.8}vh;
  }
  .slider-copy {
    h2 {
      transition: opacity .4s;
    }
    h2.change {
      opacity: 0;
    }
  }
  .slider-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    transition: transform 800ms cubic-bezier(0.52, 0.16, 0.24, 1);
    flex-wrap: nowrap;
    will-change: transform;
    height: 100%;
    .sliderWrapper-item {
      width: 100%;
      flex-shrink: 0;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#000, rgba(0,0,0,0) 20%),
                    linear-gradient(90deg, #000, rgba(0,0,0,0) 40%),
                    linear-gradient(rgba(0,0,0,0) 80%, #000)
                    rgba(0,0,0,.1);
        z-index: 1;
      }
    }
    .slider-img {
      width: 100%;
      display: block;
      @media only screen and (min-width: 999px){
        max-width: ${1388/19.2}vw;
      }
      margin-left: auto;
      height: 100%;
    }
  }
`
 
export default HomeSlider;