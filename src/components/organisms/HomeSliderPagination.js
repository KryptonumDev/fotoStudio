import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "../atoms/Icons";

const array = [1,2,3,4,5,6,7,8,9];

const HomeSliderPagination = ({activeSlider, setActiveSlider}) => {
  const sliderButton = useCallback((direction) => {
    if(direction === 'prev'){
      setActiveSlider(prevState => prevState === 1 ? array.length : --prevState)
    } else if(direction === 'next'){
      setActiveSlider(prevState => prevState === array.length ? 1 : ++prevState)
    }
  }, [setActiveSlider]);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if(e.key === "ArrowLeft"){
        sliderButton('prev');
      } else if(e.key === "ArrowRight"){
        sliderButton('next');
      }
    })
  }, [sliderButton])
  return (
    <StyledSliderPagination className="slider-pagination">
      <button
        aria-label="Przejdź do poprzedniego slajdu"
        onClick={() => sliderButton('prev')}
      >
        <ArrowLeft />
      </button>
      <div className="sliderPagination-desktop">
        {array.map(elem => (
          <button
            key={elem}
            className={activeSlider === elem ? 'active' : ''}
            aria-label={`Przejdź do ${elem} sladju`}
            onClick={() => setActiveSlider(elem)}
          >
            <span>0{elem}</span>
          </button>
        ))}
      </div>
      <div className="sliderPagination-mobile">
        <span><span>0{activeSlider}</span> / 0{array.length}</span>
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
  button, .sliderPagination-mobile span {
    font-size: ${42/19.2}vw;
    font-family: "DM Serif Display", serif;
  }
  button {
    width: max(44px, ${70/19.2}vw);
    height: max(44px, ${70/19.2}vw);
    line-height: max(44px, ${70/19.2}vw);
    text-align: center;
    &:not(:last-child){
      margin-right: ${25/19.2}vw;
    }
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