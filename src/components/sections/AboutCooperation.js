import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const AboutCooperation = ({data}) => {
  return (
    <StyledCooperation className="cooperation sec">
      <div className="max-width">
        <header>
          <h2>Współpraca</h2>
          <Button to="/kontakt">Kontakt</Button>
          <p>Każdy klient to dla mnie wyjątkowy klient. Stawiam na najwyższą jakość i maksymalną transparentność - priorytetem jest dla mnie spełnienie Twoich oczekiwań dotyczących naszej współpracy.</p>
          <p>Oprócz usług zawartych w cenniku, <strong>mogę polecić specjalistów</strong>, np. wizażystkę lub charakteryzatora. Możesz też liczyć na profesjonalne podejście i miłą atmosferę.</p>
        </header>
      </div>
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="cooperation-img" />
    </StyledCooperation>
  );
}

const StyledCooperation = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    position: static;
    height: unset;
    header {
      max-width: max(339px, ${518/19.2}vw);
      a {
        margin-bottom: ${44/10.8}vh;
      }
    }
  }
  .cooperation-img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    width: 60%;
    height: 100%;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(90deg, #000, rgba(0,0,0,0) 50%);
      z-index: 1;
    }
    img {
      object-position: top;
    }
  }
  @media only screen and (max-width: 729px){
    align-items: flex-end;
    .max-width {
      header {
        max-width: 100%;
        h2 {
          transform: translate(0%,-50%);
        }
        a {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 1.5rem;
        }
      }
      padding-bottom: 22px;
    }
    .cooperation-img {
      margin-left: -50%;
      width: 100%;
      &::before {
        background: linear-gradient(rgba(0,0,0,0) 25%, #000);
      }
      img {
        object-position: 90%;
      }
    }
  }
`
 
export default AboutCooperation;