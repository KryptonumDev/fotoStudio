import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import HomeSliderPagination from "../organisms/HomeSliderPagination";

const HomeSlider = ({data}) => {
  const [activeSlider, setActiveSlider] = useState(1);
  return (
    <StyledSlider className="slider sec">
      <div className="slider-wrapper" style={{transform: `translateX(-${(activeSlider-1)*100}%)`}}>
        {data.slider.map((slide, i) => (
          <div className="sliderWrapper-item" key={i}>
            <GatsbyImage image={slide.gatsbyImageData} alt={slide.alt || ""} className="slider-img" objectFit="contain" />
          </div>
        ))}
      </div>
      <HomeSliderPagination activeSlider={activeSlider} setActiveSlider={setActiveSlider} />
    </StyledSlider>
  );
}

const StyledSlider = styled.section`
  position: relative;
  .slider-wrapper {
    display: flex;
    transition: transform 800ms cubic-bezier(0.52, 0.16, 0.24, 1);
    flex-wrap: nowrap;
    will-change: transform;
    height: 100%;
    .sliderWrapper-item {
      width: 100%;
      flex-shrink: 0;
    }
    .slider-img {
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
                    linear-gradient(rgba(0,0,0,0) 80%, #000);
        z-index: 1;
      }
      width: 100%;
      display: block;
      max-width: ${1388/19.2}vw;
      margin-left: auto;
      height: 100%;
      img {
        object-position: right bottom;
      }
    }
  }
`
 
export default HomeSlider;