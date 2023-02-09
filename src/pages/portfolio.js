import * as React from "react"
import { graphql } from "gatsby"
import PortfolioHero from "../components/sections/PortfolioHero"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"

const PortfolioPage = ({data}) => {
  console.log(data);
  const {hero, slider, cooperation, slider2} = data.portfolio;
  return (
    <div className="scrollSnap">
      <PageIndicator>
        <PortfolioHero data={hero} />
        <Footer data={data.footer} />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    portfolio: datoCmsPortfolio {
      hero {
        gatsbyImageData
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
 
export default PortfolioPage;