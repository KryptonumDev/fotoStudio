import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from 'gatsby-source-datocms'

export const Seo = ({title, children}) => {
  const {data} = useStaticQuery(graphql`
    query {
      data: datoCmsSite {
        faviconMetaTags {
          tags
        }
        globalSeo {
          titleSuffix
          fallbackSeo {
            description
            title
            image {
              url(imgixParams: {w: "1200", h: "630"})
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <HelmetDatoCms favicon={data.faviconMetaTags} />
      <meta name="robots" content="noindex" />
      <title>{title || data.globalSeo.fallbackSeo.title}{data.globalSeo.titleSuffix}</title>
      <meta name="description" content={data.globalSeo.fallbackSeo.description} />
	    <meta property="og:description" content={data.globalSeo.fallbackSeo.description} />
	    <meta property="og:image" content={data.globalSeo.fallbackSeo.image.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
	    <meta property="og:type" content="website" />
	    <meta name="twitter:card" content="summary_large_image" />  
      {children}
    </>
  );
}