import * as React from "react"
import { graphql } from "gatsby"
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import SectionHero from "../components/sections/SectionHero"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PortfolioPage = ({data}) => {
  inject();
  return (
    <StyledScrollSnap className="scrollSnap" style={{scrollSnapType:"none"}}>
      <GlobalStyle />
      <SectionHero
        heading="Przerwa techniczna"
        copy={['Jestem w trakcie przerwy technicznej. Niebawem wrócę z nową stroną. Przepraszam za utrudnienia.', '<a href="mailto:kontakt@adamchrapek.pl">kontakt@adamchrapek.pl</a>', '<a href="tel:+48505190830">505 190 830</a>']}
        image={data.about.hero}
      />
    </StyledScrollSnap>
  )
}

export const query = graphql`
  query {
    about: datoCmsAboutMe {
      hero {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
    }
  }
`

const StyledScrollSnap = styled.section`
  .nav {
    display: none;
  }
  .scrollDown {
    display: none;
  }
  a {
    font-weight: 600;
    font-style: italic;
    &:hover {
      text-decoration: underline;
    }
  }
`;
 
export default PortfolioPage;

export const Head = () => (
  <Seo
    title="Przerwa techniczna"
  >
  </Seo>
)