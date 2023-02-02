import React from 'react';
import Layout from "./src/components/sections/Layout"

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "pl" })
}

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}