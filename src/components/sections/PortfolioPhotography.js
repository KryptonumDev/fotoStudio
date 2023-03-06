import React from "react";
import styled from "styled-components";
import Slider from "../organisms/Slider";
import Button from "../atoms/Button";

const PortfolioPhotography = ({id, slider, heading, content, to}) => {
  return (
    <StyledPhotography className="photography sec" id={id || ''}>
      <div className="max-width">
        <header>
          <h2><span>Fotografia</span>{heading}</h2>
          {content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <Button to={to}>Zobacz więcej</Button>
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
      max-width: ${714/19.2}vw;
      z-index: 3;
      position: relative;
    }
    h2 span {
      display: block;
      font-size: .6em;
    }
    a {
      margin-top: clamp(${32/16}rem, ${52/10.8}vh, ${42/16}rem);
    }
  }
  @media only screen and (max-width: 1299px){
    .max-width {
      height: 70%;
      max-width: 100%;
      header {
        max-width: ${714/16}rem;
      }
    }
  }
  @media only screen and (max-width: 729px){
    .max-width header {
      padding-right: ${55/16}rem;
      h2 span {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1299px) and (max-height: 889px){
    &.sec {
      height: 200%;
    }
    .slider {
      bottom: 25%;
    }
  }
  @media only screen and (max-width: 1299px) and (max-height: 689px){
    .max-width {
      height: 80%;
    }
  }
`
 
export default PortfolioPhotography;