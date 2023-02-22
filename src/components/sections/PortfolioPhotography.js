import React from "react";
import styled from "styled-components";
import Slider from "../organisms/Slider";
import Button from "../atoms/Button";

const PortfolioPhotography = ({id, slider, heading, content}) => {
  return (
    <StyledPhotography className="photography sec" id={id || ''}>
      <div className="max-width">
        <header>
          <h2><span>Fotografia</span>{heading}</h2>
          {content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <Button link="/fotografia-reportazowa">Zobacz więcej</Button>
        </header>
      </div>
      <Slider data={slider} />
    </StyledPhotography>
  );
}

const StyledPhotography = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    height: auto;
    header {
      width: ${714/19.2}vw;
      z-index: 3;
      position: relative;
    }
    h2 span {
      display: block;
      font-size: .6em;
    }
    a {
      margin-top: clamp(${32/16}rem, ${52/10.8}vh, ${52/16}rem);
    }
  }
`
 
export default PortfolioPhotography;