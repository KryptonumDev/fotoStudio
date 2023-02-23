import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const PortfolioPricing = ({data}) => {
  return (
    <StyledPricing className="pricing sec">
      <div className="max-width">
        <header>
          <h2>Cennik usług</h2>
          <p>Każda sesja fotograficzna wymaga innego podejścia, dlatego cena ostateczna zależy od wielu czynników. Oferuję indywidualne podejście do każdego klienta.</p>
          <p>Aby wspomóc ustalanie wspólnie z klientem ceny szacunkowowej stworzyłem cennik, który zawiera w sobie minimalne kwoty każdego rodzaju usługi.</p>
          <Button link="/cennik">Cennik</Button>
        </header>
      </div>
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="pricing-img" objectFit="contain" />
    </StyledPricing>
  );
}

const StyledPricing = styled.section`
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    header {
      max-width: ${630/19.2}vw;
      a {
        margin-top: min(${48/10.8}vh, ${32/16}rem);
      }
    }
  }
  position: relative;
  .pricing-img {
    width: auto;
    height: 80%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
  @media only screen and (max-width: 1249px){
    .max-width {
      align-self: flex-end;
      margin-bottom: 5%;
      max-width: 90%;
      header {
        max-width: 100%;
      }
    }
    .pricing-img {
      width: 100%;
      height: auto;
      top: 0;
      right: 50%;
      transform: translateX(50%);
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0), #000);
        z-index: 1;
      }
    }
  }
  @media only screen and (max-width: 729px){
    .max-width {
      position: static;
      header {
        h2 {
          right: 8px;
        }
        p {
          font-size: ${14/16}rem;
        }
      }
    }
    .pricing-img {
      margin-right: 50px;
    }
  }
`
 
export default PortfolioPricing;