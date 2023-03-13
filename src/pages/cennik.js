import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import PricingLinks from "../components/sections/PricingLinks"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PricingPage = ({data, location}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PricingPage`)
  const {hero} = data.pricing;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Cennik"
          copy={['Każdy klient jest wyjątkowy, dlatego o całkowitym koszcie sesji zdjęciowej decydują indywidualne potrzeby. Poniżej znajdziesz oferty, które pomogą Ci w dokonaniu odpowiedniego wyboru.']}
          button={{to: '/kontakt', text: 'Kontakt'}}
          image={hero}
        />
        <PricingLinks location={location} />
        <TheyTrusted />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    pricing: datoCmsPricing {
      hero {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
    }
  }
`
 
export default PricingPage;

export const Head = () => (
  <Seo
    title="Cennik"
  >
  </Seo>
)
