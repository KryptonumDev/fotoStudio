import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"

import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PhotographyPage = ({data, location}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PhotographyPage`)
  const {hero} = data.pricing;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <PricingHero data={hero} />
        <PricingLinks location={location} />
        <TheyTrusted />
        <Footer data={data.footer} />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    pricing: datoCmsPricing {
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
  }
`
 
export default PhotographyPage;

export const Head = () => (
  <>
    <Seo />
    <title>Cennik - Adam Chrapek</title>
  </>
)
