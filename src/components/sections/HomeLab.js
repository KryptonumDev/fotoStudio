import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HomeLab = ({data}) => {
  return (
    <StyledLab className="lab sec">
      <div className="max-width">
        <header className="lab-header">
            <h2>Pracownia</h2>
            <p>Moja pracownia to nie tylko sesje zdjęciowe. To&nbsp;także szerokie portfolio usług związanych z&nbsp;fotografią, realizowanych w&nbsp;formie stacjonarnej.</p>
        </header>
        <div className="lab-copy">
          <h2>W moim studiu:</h2>
          <ol>
            <li>Zajmę się digitalizacją Twoich zdjęć, abyś mógł wspominać piękne momenty.</li>
            <li>Przygotuję dla Ciebie zdjęcia do dokumentów w&nbsp;mniej niż 15 minut.</li>
            <li>Pomogę ci zareklamować Twoje produkty dzięki profesjonalnej sesji produktowej.</li>
            <li>Podzielę się z&nbsp;Tobą moją wiedzą praktyczną i&nbsp;teoretyczną w zakresie fotografii.</li>
          </ol>
        </div>
      </div>
      <GatsbyImage image={data.gatsbyImageData} alt={data.alt || ""} className="lab-img" />
    </StyledLab>
  );
}

const StyledLab = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    height: auto;
    display: flex;
    & > * {
      width: 50%;
    }
  }
  .lab-header {
    padding-right: 1.5em;
    p {
      max-width: clamp(390px, ${530/19.2}vw, 530px);
    }
  }
  .lab-copy {
    max-width: clamp(390px, ${580/19.2}vw, 580px);
    h2 {
      margin-bottom: ${18/10.8}vh;
    }
    ol {
      padding-left: 1.5em;
    }
    li {
      &::marker {
        font-family: var(--serif-font);
        font-weight: 800;
        font-size: clamp(${24/16}rem, ${42/19.2}vw, ${42/16}rem);
      }
      font-size: clamp(${13/16}rem, ${24/19.2}vw, ${24/16}rem);
      line-height: 1.5;
      &:not(:last-child){
        margin-bottom: ${8/10.8}vh;
      }
    }
  }
  .lab-img {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, #000, rgba(0,0,0,.3) 80%), linear-gradient(#000, rgba(0,0,0,0) 20%);
      z-index: 1;
    }
  }
  @media only screen and (max-width: 1099px){
    .max-width {
      display: block;
      & > * {
        width: 100%;
      }
    }
    .lab-header {
      margin-bottom: ${34/10.24}vh;
    }
    .lab-copy {
      h2 {
        font-size: ${24/16}rem;
      }
    }
    .lab-img {
      width: 100%;
      &::before {
        content: '';
        background: linear-gradient(90deg, #000 30%, rgba(0,0,0,.3)), linear-gradient(#000, rgba(0,0,0,0) 20%);
      }
    }
  }
  @media only screen and (max-width: 729px){
    .lab-copy {
      width: 90%;
      max-width: 100%;
    }
    .lab-img {
      width: 100%;
      &::before {
        content: '';
        background: linear-gradient(rgba(0,0,0,.5), #000);
      }
      img {
        object-position: top right;
      }
    }
  }
`
 
export default HomeLab;