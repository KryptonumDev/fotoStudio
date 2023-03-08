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
  left: 21px;
  bottom: 21px;
  svg {
    width: 44px;
    height: 44px;
  }
`
 
export default ScrollDown;