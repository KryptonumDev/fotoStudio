import React from 'react';
import Layout from "./src/components/sections/Layout"

export const wrapPageElement = ({ props, element }) => {
  if(!props.path.includes("przerwa-techniczna")){
    return <Layout {...props}>{element}</Layout>
  }
}