import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import PricingHero from "../components/sections/PricingHero"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"

const PricingPage = ({data}) => {
  const scrollRestoration = useScrollRestoration(`PricingPage`)
  const {hero} = data.pricing;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <PricingHero data={hero} />
        <TheyTrusted />
        <Footer data={data.footer} />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    pricing: datoCmsAboutMe {
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
    footer: datoCmsFooter {
      email
      address
      addressMaps
      phone1
      phone2
      instagram
      facebook
    }
  }
`
 
export default PricingPage;

export const Head = () => (
  <>
    <Seo />
    <title>Cennik - Adam Chrapek</title>
  </>
)
