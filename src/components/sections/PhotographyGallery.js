import React, { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const PhotographyGallery = ({data}) => {
  useEffect(() => {
    const headings = document.querySelectorAll('.gallery h2');
    const handleScroll = (e) => {
      headings.forEach(e => {
        if(e.getBoundingClientRect().top <= window.innerHeight && e.getBoundingClientRect().bottom >= 0){
          e.style.transform = `translate(-50%, ${e.getBoundingClientRect().top / window.innerHeight * 100}%)`;
        }
      })
      // console.log(e.target.scrollTop);
    }
    document.querySelector('.scrollSnap').addEventListener('scroll', e => handleScroll(e));
  }, [])
  return (
    <StyledGallery className="gallery sec">
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
  padding: ${300/10.8}vh 0;
  .max-width {
    @media only screen and (min-width: 729px){
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
      transform: translate(-50%, 100%);
      top: 0;
      font-size: ${300/19.2}vw;
      will-change: transform;
      transition: transform .05s;
    }
  }
  .gallery-left, .gallery-right {
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
 
export default PhotographyGallery;