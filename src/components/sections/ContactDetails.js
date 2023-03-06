import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const ContactDetails = ({data}) => {
  const { details } = useStaticQuery(graphql`
    query {
      details: datoCmsFooter {
        email
        address
        addressMaps
        phone1
        phone2
        instagram
        facebook
      }
    }
  `);
  return (
    <StyledDetails className="details sec">
      <div className="max-width">
        <header>
          <h2 className="notVertical">Dane kontaktowe</h2>
          <p>Najszybciej skontaktujesz się ze mną za pośrednictwem formularza kontaktowego.</p>
          <p>Jego wypełnienie zajmuję chwilę. Odpowiem na Twoją wiadomość najszybciej jak tylko potrafię</p>
          <div className="details-info">
            <p>Adam Chrapek</p>
            <p><a href={details.addressMaps} target="_blank" rel="noreferrer">{details.address}</a></p>
            <p><a href={`mailto:${details.email}`}>{details.email}</a></p>
            <p>
              <a href={`tel:+48${details.phone1.replace(/\s/g,'')}`}>{details.phone1}</a>
              &nbsp;|&nbsp;
              <a href={`tel:+48${details.phone2.replace(/\s/g,'')}`}>{details.phone2}</a>
            </p>
            <p></p>
          </div>
        </header>
      </div>
      <GatsbyImage image={data.details.gatsbyImageData} alt={data.details.alt || ""} className="hero-img" />
    </StyledDetails>
  );
}

const StyledDetails = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
    header {
      max-width: max(${660/19.2}vw, 439px);
    }
    h2 {
      font-size: clamp(${42/16}rem, ${64/19.2}vw, ${64/16}rem);
      margin-bottom: min(${32/10.8}vh, ${32/16}rem);
    }
    a {
      margin-top: min(${34/10.8}vh, ${34/16}rem);
    }
  }
  .details-info {
    margin-top: 2em;
    font-family: var(--serif-font);
    p {
      margin-bottom: .4em;
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
  }
  @media only screen and (max-width: 1199px){
    .hero-img {
      width: 100%;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient(90deg,#000,rgba(0,0,0,0)),
                    linear-gradient(rgba(0,0,0,0) 75%, #000);
      }
    }
  }
  @media only screen and (max-width: 599px){
    .max-width {
      h2 {
        font-size: ${34/16}rem;
        margin-bottom: 1rem;
      }
      .details-info p {
        font-size: ${18/16}rem;
      }
      header {
        max-width: 100%;
      }
    }
  }
`
 
export default ContactDetails;