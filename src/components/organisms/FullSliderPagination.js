import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "../atoms/Icons";

const HomeSliderPagination = ({sliderLength, activeSlide, setActiveSlide}) => {
  const sliderButton = useCallback((direction) => {
    if(direction === 'prev'){
      setActiveSlide(prevState => prevState === 1 ? sliderLength : --prevState)
    } else if(direction === 'next'){
      setActiveSlide(prevState => prevState === sliderLength ? 1 : ++prevState)
    }
  }, [setActiveSlide, sliderLength]);

  const handleArrowKey = useCallback((e) => {
    if(e.key === "ArrowLeft"){
      sliderButton('prev');
    } else if(e.key === "ArrowRight"){
      sliderButton('next');
    }
  }, [sliderButton]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        document.addEventListener('keydown', handleArrowKey)
      } else {
        document.removeEventListener('keydown', handleArrowKey)
      }
    }, {threshold: .5})
    observer.observe(document.querySelector(".slider"))
  }, [handleArrowKey])

  return (
    <StyledSliderPagination className="slider-pagination">
      <button
        aria-label="Przejdź do poprzedniego slajdu"
        onClick={() => sliderButton('prev')}
      >
        <ArrowLeft />
      </button>
      <div className="sliderPagination-desktop">
        {Array.from({length: sliderLength}, (x, i) => i).map((slide) => (
          <button
            key={++slide}
            className={activeSlide === slide ? 'active' : ''}
            aria-label={`Przejdź do ${slide} sladju`}
            onClick={() => setActiveSlide(slide)}
          >
            <span>0{slide}</span>
          </button>
        ))}
      </div>
      <div className="sliderPagination-mobile">
        <span><span>0{activeSlide}</span> / 0{sliderLength}</span>
      </div>
      <button
        aria-label="Przejdź do następnego sladju"
        onClick={() => sliderButton('next')}
      >
        <ArrowRight />
      </button>
    </StyledSliderPagination>
  );
}

const StyledSliderPagination = styled.div`
  position: absolute;
  right: ${95/19.2}vw;
  bottom: ${70/10.8}vh;
  display: flex;
  align-items: center;
  z-index: 3;
  button, .sliderPagination-mobile span {
    font-size: min(${44/16}rem, ${42/19.2}vw);
    font-family: "DM Serif Display", serif;
  }
  button {
    width: min(44px, ${70/19.2}vw);
    height: min(44px, ${70/19.2}vw);
    line-height: min(44px, ${70/19.2}vw);
    text-align: center;
    margin-right: min(${32/16}rem, ${25/19.2}vw);
    span {
      pointer-events: none;
      transition: transform 400ms cubic-bezier(0.52, 0.16, 0.24, 1);
      display: block;
    }
    &.active span {
      transform: scale(1.618);
    }
    svg {
      padding: 6px;
      width: 100%;
      height: 100%;
      margin: auto;
      display: block;
    }
  }
  .sliderPagination-mobile {
    display: none;
  }
  @media only screen and (max-width: 899px){
    .sliderPagination-desktop {
      display: none;
    }
    button {
      width: ${48/16}rem;
      height: ${48/16}rem;
      line-height: ${70/19.2}vw;
    }
    .sliderPagination-mobile {
      display: block;
      span {
        font-size: ${24/16}rem;
      }
    }
  }
`
 
export default HomeSliderPagination;