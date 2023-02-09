import * as React from "react"
import { graphql } from "gatsby"
import HomeHero from "../components/sections/HomeHero"
import HomeSlider from "../components/sections/HomeSlider"
import HomeHello from "../components/sections/HomeHello"
import HomeReviews from "../components/sections/HomeReviews"
import HomeLab from "../components/sections/HomeLab"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"

const IndexPage = ({data}) => {
  const {hero, slider, hello, lab} = data.home;
  return (
    <div className="scrollSnap">
      <PageIndicator>
        <HomeHero data={hero}/>
        <HomeSlider data={slider} />
        <HomeHello data={hello}/>
        <HomeReviews />
        <HomeLab data={lab}/>
        <Footer data={data.footer} />
      </PageIndicator>
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

export const Head = () => <title>Foto Studio</title>
