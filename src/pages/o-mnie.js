import * as React from "react"
import { graphql } from "gatsby"
import AboutHero from "../components/sections/AboutHero"
import AboutSlider from "../components/sections/AboutSlider"
import AboutCooperation from "../components/sections/AboutCooperation"
import AboutCooperationProcess from "../components/sections/AboutCooperationProcess"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"

const IndexPage = ({data}) => {
  const {hero, slider, cooperation, slider2} = data.about;
  return (
    <div className="scrollSnap">
      <PageIndicator>
        <AboutHero data={hero} />
        <AboutSlider data={slider} />
        <AboutCooperation data={cooperation} />
        <AboutCooperationProcess />
        <Footer data={data.footer} />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    about: datoCmsAboutMe {
      hero {
        gatsbyImageData
        alt
      }
      slider {
        gatsbyImageData
        alt
      }
      cooperation {
        gatsbyImageData
        alt
      }
      slider2 {
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

export default IndexPage

export const Head = () => <title>O mnie - Adam Chrapek</title>