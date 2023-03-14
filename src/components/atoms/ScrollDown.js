import React from "react";
import styled from "styled-components";
import {ArrowDown} from "./Icons";

const ScrollDown = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById('zobacz')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  return (
    <StyledArrow href="#zobacz" className="scrollDown" aria-label="Zjedź niżej" onClick={e => handleScroll(e)}>
      <ArrowDown />
    </StyledArrow>
  );
}

const StyledArrow = styled.a`
  position: absolute;
  left: 17px;
  @media (min-width: 1824px){
    left: calc((100vw - 1780px) / 2);
  }
  bottom: 21px;
  padding: 5px;
  &:hover svg {
    fill: currentColor;
  }
  svg {
    width: 38px;
    height: 38px;
  }
`
 
export default ScrollDown;