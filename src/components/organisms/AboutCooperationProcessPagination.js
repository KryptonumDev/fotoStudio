import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "../atoms/Icons";


const AboutCooperationProcessPagination = ({activeSlider, setActiveSlider, stepsLength}) => {
  const sliderButton = useCallback((direction) => {
    if(direction === 'prev'){
      setActiveSlider(prevState => prevState === 1 ? stepsLength : --prevState)
    } else if(direction === 'next'){
      setActiveSlider(prevState => prevState === stepsLength ? 1 : ++prevState)
    }
  }, [setActiveSlider, stepsLength]);

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
        document.addEventListener('keydown', e => handleArrowKey(e))
      } else {
        document.removeEventListener('keydown', e => handleArrowKey(e))
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
      <span><span>0{activeSlider}</span> / 0{stepsLength}</span>
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
  margin-top: ${34/16}rem;
  display: inline-flex;
  align-items: center;
  > span {
    font-size: ${32/16}rem;
    margin: 0 ${24/16}rem;
    font-family: "DM Serif Display", serif;
  }
  button {
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
 
export default AboutCooperationProcessPagination;