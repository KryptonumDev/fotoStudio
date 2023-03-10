import React from 'react';
import Layout from "./src/components/sections/Layout"

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      href="/resources/fonts/DMSerifDisplay-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/resources/fonts/Montserrat-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/resources/fonts/Montserrat-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}