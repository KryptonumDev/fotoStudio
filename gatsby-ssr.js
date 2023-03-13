import React from 'react';
import Layout from "./src/components/sections/Layout"
import DMSerifDisplay from "./src/resources/fonts/DMSerifDisplay-Regular.woff2"
import MontserratRegular from "./src/resources/fonts/Montserrat-Regular.woff2"
import MontserratSemiBold from "./src/resources/fonts/Montserrat-SemiBold.woff2"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      href={DMSerifDisplay}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={MontserratRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={MontserratSemiBold}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}

export const wrapPageElement = ({ props, element }) => {
  if(!props.path.includes("przerwa-techniczna")){
    return <Layout {...props}>{element}</Layout>
  }
}