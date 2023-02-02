import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HomeLab = ({data}) => {
  return (
    <StyledLab className="lab sec">
      <div className="max-width">
        <header className="lab-header">
            <h2>Pracownia</h2>
            <p>Moja pracownia to nie tylko sesje zdjęciowe. To także szerokie portfolio usług związanych z&nbsp;fotografią, realizowanych w&nbsp;formie stacjonarnej.</p>
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
      <GatsbyImage image={data.lab.gatsbyImageData} alt={data.lab.alt} className="lab-img" />
    </StyledLab>
  );
}

const StyledLab = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    display: flex;
    justify-content: space-around;
  }
  .lab-header {
    max-width: clamp(390px, ${530/19.2}vw, 530px);
    p {
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      line-height: 1.5;
    }
  }
  .lab-copy {
    margin-bottom: ${46/19.2}vw;
    max-width: clamp(390px, ${530/19.2}vw, 530px);
    h2 {
      margin-bottom: ${46/19.2}vw;
    }
    ol {
      padding-left: 21px;
    }
    li {
      &::marker {
        font-family: 'Argent CF', serif;
        font-weight: 800;
        font-size: clamp(${24/16}rem, ${42/19.2}vw, ${42/16}rem);
        margin-right: 5px;
      }
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      line-height: 1.5;
      &:not(:last-child){
        margin-bottom: ${35/19.2}vw;
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
      max-width: calc(100% - 250px);
      display: block;
    }
    .lab-header {
      margin-bottom: ${88/10.24}vh;
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
    .max-width {
      max-width: calc(100% - 44px);
    }
    .lab-copy {
      padding-right: 50px;
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