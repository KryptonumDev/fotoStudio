import React from 'react';
import styled from 'styled-components';

const PageIndicator = ({children}) => {
  return (
    <>
      {children}
      <StyledIndicator className="indicator">
        {children.map((tile, i) => (i !== 0 && i !== children.length-2 && (
          <div className="indicator-tile" key={i}></div>
        )))}
      </StyledIndicator>
    </>
  );
}

const StyledIndicator = styled.div`
  display: none;
  position: fixed;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  .indicator-tile {
    width: 8px;
    height: ${120/10.8}vh;
    border: 2px solid var(--color);
    &:not(:last-child) {
      margin-bottom: ${30/10.8}vh;
    }
    &.active {
      background-color: var(--color);
    }
  }
`
 
export default PageIndicator;