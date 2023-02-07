import React from "react";
import styled from "styled-components";
import {ArrowDown} from "./Icons";

const ScrollDown = ({href}) => {
  return (
    <StyledArrow href={href} className="scrollDown" aria-hidden="true">
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