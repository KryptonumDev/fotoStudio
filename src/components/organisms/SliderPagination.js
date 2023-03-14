import React, { useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "../atoms/Icons";

const SliderPagination = ({sliderLength, activeSlide, setActiveSlide}) => {
  const pagination = useRef();
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
  }, [sliderButton])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        document.addEventListener('keydown', handleArrowKey)
      } else {
        document.removeEventListener('keydown', handleArrowKey)
      }
    }, {threshold: .5})
    observer.observe(pagination.current.closest('.slider'));
  }, [handleArrowKey])

  return (
    <StyledSliderPagination className="slider-pagination" ref={pagination}>
      <button
        aria-label="Przejdź do poprzedniego slajdu"
        onClick={() => sliderButton('prev')}
      >
        <ArrowLeft />
      </button>
      <span><span>0{activeSlide}</span> / 0{sliderLength}</span>
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
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  z-index: 3;
  > span {
    font-size: ${32/16}rem;
    margin: 0 ${24/16}rem;
    font-family: "DM Serif Display", serif;
  }
  button {
    &:hover svg {
      fill: currentColor;
    }
    svg {
      width: 44px;
      height: 44px;
      margin: auto;
      display: block;
    }
  }
  @media only screen and (max-width: 999px){
    margin-top: 1rem;
    > span {
      font-size: ${24/16}rem;
      margin: 0 1rem;
    }
  }
`
 
export default SliderPagination;