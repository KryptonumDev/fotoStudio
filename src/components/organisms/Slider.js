import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import SliderPagination from './SliderPagination';

const Slider = ({data}) => {
  const [activeSlide, setActiveSlide] = useState(1);
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
        style={{transform: `translateX(${((400 * (activeSlide-1)) + (activeSlide-1) * 20) * -1}px)`}}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {data?.map((slide, i) => (
          <GatsbyImage image={slide.gatsbyImageData} alt={slide.alt || ''} className="slider-item" objectFit='contain' key={i} />
        ))}
      </div>
      <SliderPagination sliderLength={sliderLength} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  width: 60%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg, #000, rgba(0,0,0,0),rgba(0,0,0,0), #000);
    z-index: 1;
    pointer-events: none;
  }
  .slider-wrapper {
    display: flex;
    flex-wrap: nowrap;
    padding-left: 50%;
    transition: transform 500ms cubic-bezier(0.52, 0.16, 0.24, 1);
    will-change: transform;
  }
  .slider-item {
    width: 400px;
    height: auto;
    max-height: 60vh;
    flex-shrink: 0;
    transform: translateX(-50%);
    &:not(:last-child){
      margin-right: 20px;
    }
  }
  @media only screen and (max-width: 449px){
    .slider-item img {
      transform-origin: bottom;
      transform: scale(.8);
    }
  }
  @media only screen and (max-width: 1299px){
    width: 100%;
    top: auto;
    bottom: 2rem;
    transform: translateY(0%);
  }
`
 
export default Slider;