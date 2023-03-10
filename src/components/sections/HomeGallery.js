import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FullSlider from "../organisms/FullSlider";
import Button from "../atoms/Button";

const headings = ["Portretowa", "Portretowa", "Weselna", "Reportażowa", "Reportażowa", "Produktowa", "Produktowa", "Analogowa", "Analogowa"];

const HomeGallery = ({data}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeHeading, setActiveHeading] = useState(headings[activeSlide-1]);
  const heading = useRef('');

  useEffect(() => {
    heading.current.classList.add('change');
    setTimeout(() => {
      setActiveHeading(headings[activeSlide-1]);
      heading.current.classList.remove('change');
    }, 400);
  }, [activeSlide])

  return (
    <StyledSlider className="gallery sec" id="zobacz">
      <div className="max-width">
        <div className="slider-copy">
          <h2 ref={heading}>{activeHeading}</h2>
          <Button to="/portfolio">Portfolio</Button>
        </div>
      </div>
      <FullSlider data={data} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </StyledSlider>
  );
}

const StyledSlider = styled.section`
  position: relative;
  & > .max-width {
    @media only screen and (min-width: 729px) and (max-width: 1824px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    height: auto;
    margin-top: ${256/10.8}vh;
    z-index: 3;
  }
  .slider-copy {
    h2 {
      transition: opacity .4s;
    }
    h2.change {
      opacity: 0;
    }
  }
  
`
 
export default HomeGallery;