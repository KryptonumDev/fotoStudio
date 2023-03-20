import React, { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const PhotographyGallery = ({data}) => {
  useEffect(() => {
    const headings = document.querySelectorAll('.gallery h2');
    const handleScroll = () => {
      headings.forEach(e => {
        if(e.getBoundingClientRect().top <= window.innerHeight && e.getBoundingClientRect().bottom >= 0){
          e.style.transform = `translate(-50%, ${e.getBoundingClientRect().top / window.innerHeight * 100 * -1}%)`;
        }
      })
    }
    document.querySelector('.scrollSnap').addEventListener('scroll', handleScroll);
    handleScroll();
    return () => document.querySelector('.scrollSnap').removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <StyledGallery className="gallery sec" id="zobacz">
      <div className="max-width">
        {data.map((gallery, i) => (
          <div className="gallery-wrapper" key={i}>
            <h2>{gallery.heading}</h2>
            <div className="gallery-left">
              {gallery.galleryLeft.map((photo, i) => (
                <GatsbyImage
                  image={photo.gatsbyImageData}
                  alt={photo.alt || ''}
                  className="gallery-item"
                  key={i}
                />
              ))}
            </div>
            <div className="gallery-right">
              {gallery.galleryRight.map((photo, i) => (
                <GatsbyImage
                  image={photo.gatsbyImageData}
                  alt={photo.alt || ''}
                  className="gallery-item"
                  key={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  &.sec {
    height: auto;
  }
  padding: ${400/10.8}vh 0;
  .max-width {
    max-width: 1584px;
    @media only screen and (min-width: 729px) and (max-width: 1824px){
      max-width: calc(100% - ${336/19.2}vw);
    }
  }
  .gallery-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 50px;
    &:not(:last-child){
      margin-bottom: ${300/10.8}vh;
    }
    h2 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -100%);
      top: 0;
      font-size: min(${310/19.2}vw, ${350/16}rem);
      will-change: transform;
      transition: transform .05s;
      mix-blend-mode: hard-light;
      pointer-events: none;
    }
  }
  .gallery-left, .gallery-right {
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gallery-item {
    transition: filter .3s;
    will-change: filter;
    &:not(:hover) {
      filter: grayscale(100%);
    }
  }
  @media (max-width: 990px){
    padding: ${300/10.8}vh 0 ${150/10.8}vh;
    .max-width {
      width: 100%;
    }
    .gallery-wrapper {
      flex-direction: column;
    }
    .gallery-item:nth-child(1n) {
      transform: translateX(-21px);
    }
    .gallery-item:nth-child(2n) {
      transform: translateX(21px);
    }
  }
`
 
export default PhotographyGallery;