import * as React from "react"
import { graphql } from "gatsby"
import HomeHero from "../components/sections/HomeHero"
import HomeSlider from "../components/sections/HomeSlider"
import HomeHello from "../components/sections/HomeHello"
import HomeLab from "../components/sections/HomeLab"
import Footer from "../components/organisms/Footer"

const IndexPage = ({data}) => {
  const {hero, slider, hello, lab} = data.home;
  return (
    <div className="scrollSnap">
      <HomeHero data={{hero}}/>
      <HomeSlider data={{slider}} />
      <HomeHello data={{hello}}/>
      <HomeLab data={{lab}}/>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    home: datoCmsHome {
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      hello {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      lab {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      slider {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Foto Studio</title>
