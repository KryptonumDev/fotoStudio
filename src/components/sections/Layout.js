import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../../components/organisms/Nav"
import { HelmetDatoCms } from 'gatsby-source-datocms'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site: datoCmsSite {
        faviconMetaTags {
          tags
        }
      }
    }
  `);
  return (
    <>
      <HelmetDatoCms favicon={data.site.faviconMetaTags} />
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
 
export default Layout;