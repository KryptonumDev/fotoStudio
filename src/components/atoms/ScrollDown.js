import React from "react";
import styled from "styled-components";
import {ArrowDown} from "./Icons";

const ScrollDown = ({href}) => {
  return (
    <StyledArrow href={href} className="scrollDown">
      <ArrowDown />
    </StyledArrow>
  );
}

const StyledArrow = styled.a`
  position: absolute;
  left: 21px;
  bottom: 21px;
`
 
export default ScrollDown;