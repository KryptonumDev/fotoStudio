import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import FullSliderPagination from "./FullSliderPagination";

const FullSlider = ({data, activeSlide, setActiveSlide}) => {
  const sliderLength = data.length;
  let startX;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  }
  const handleTouchEnd = (e) => {
    if(startX - 20 > e.changedTouches[0].clientX){
      setActiveSlide(prevState => prevState === sliderLength ? 1 : ++prevState)
    } else if(startX + 20 < e.changedTouches[0].clientX) {
      setActiveSlide(prevState => prevState === 1 ? sliderLength : --prevState)
    }
  }

  return (
    <StyledSlider className="slider">
      <div className="slider-wrapper"
        style={{transform: `translateX(-${(activeSlide-1)*100}%)`}}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((slide, i) => (
          <GatsbyImage image={slide.gatsbyImageData} alt={slide.alt || ""} className="slider-item" key={i} objectFit="contain" />
        ))}
      </div>
      <div className="max-width">
        <FullSliderPagination sliderLength={sliderLength} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0) 20%), linear-gradient(90deg, rgb(0, 0, 0), rgba(0, 0, 0, 0) 40%), linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0)) rgba(0, 0, 0, 0.1);
    z-index: 1;
    pointer-events: none;
  }
  .slider-wrapper {
    height: inherit;
    display: flex;
    flex-wrap: nowrap;
    transition: transform 500ms cubic-bezier(0.52, 0.16, 0.24, 1);
    will-change: transform;
  }
  .slider-item {
    width: 100%;
    flex-shrink: 0;
    img {
      margin: 0 auto;
      @media only screen and (max-width: 729px){
        object-fit: cover !important;
        object-position: 70%;
      }
    }
  }
  .max-width {
    height: auto;
    position: relative;
  }
`
 
export default FullSlider;