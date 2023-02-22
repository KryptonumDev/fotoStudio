import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ScrollDown from "../atoms/ScrollDown";

const AboutHero = ({data}) => {
  return (
    <StyledHero className="hero sec">
      <div className="max-width">
        <h1>Cześć, tu Adam</h1>
        <p>Pasją do fotografowania zaraziłem się wiele lat temu. Na początku robiłem zdjęcia wszędzie, gdzie działo się coś ważnego. Dziś, choć w&nbsp;swojej pracy korzystam z&nbsp;nowoczesnego sprzętu i&nbsp;innowacyjnych rozwiązań, uważam, że to miłość do fotografowania tworzy dobre ujęcie.</p>
        <p>Każda sesja zdjęciowa to szansa na uchwycenie niepowtarzalnego momentu i&nbsp;towarzyszącej mu wyjątkowej atmosfery. Nie mogę się doczekać naszej wspólnej sesji!</p>
      </div>
      <ScrollDown href="#zobacz" />
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="hero-img" />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .max-width {
    height: auto;
    h1 {
      font-size: clamp(${42/16}rem, ${64/19.2}vw, ${64/16}rem);
      margin-bottom: min(${32/10.8}vh, ${32/16}rem);
    }
    p {
      max-width: max(${785/19.2}vw, 439px);
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    height: 100%;
    z-index: -1;
  }
  @media only screen and (max-width: 1199px){
    justify-content: flex-end;
    padding-bottom: ${186/10.24}vh;
    .hero-img {
      width: 100%;
      margin-right: -8%;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient(90deg,#000,rgba(0,0,0,0));
      }
    }
  }
  @media only screen and (max-width: 599px){
    .max-width {
      h1 {
        font-size: ${34/16}rem;
        margin-bottom: 1rem;
      }
      p {
        max-width: 100%;
      }
    }
  }
`
 
export default AboutHero;