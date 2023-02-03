import React from "react";
import styled from "styled-components";

const ScrollDown = () => {
  return (
    <StyledArrow href="#czesc">
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="31" fill="none" stroke="#fff"><path strokeMiterlimit="10" d="m48 2-.31 4.1L24.467 30 1.618 6.1A9129.95 9129.95 0 0 1 1 2l23.5 23.972L48 2Z"/></svg>
    </StyledArrow>
  );
}

const StyledArrow = styled.a`
  position: absolute;
  left: 21px;
  bottom: 21px;
`
 
export default ScrollDown;