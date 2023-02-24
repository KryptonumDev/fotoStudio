import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import AboutHero from "../components/sections/AboutHero"
import AboutSlider from "../components/sections/AboutSlider"
import AboutCooperation from "../components/sections/AboutCooperation"
import AboutCooperationProcess from "../components/sections/AboutCooperationProcess"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"

const AboutPage = ({data}) => {
  const {hero, slider, cooperation, slider2} = data.about;
  const scrollRestoration = useScrollRestoration(`AboutPage`)
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <AboutHero data={hero} />
        <AboutSlider
          heading="Zobacz co możemy stworzyć"
          button={{text: 'Portfolio', link: '/portfolio'}}
          data={slider}
        />
        <AboutCooperation data={cooperation} />
        <AboutCooperationProcess />
        <AboutSlider
          heading="Fotografia reportażowa"
          button={{text: 'Kontakt', link: '/kontakt'}}
          data={slider2}
        />
        <TheyTrusted />
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

export default AboutPage

export const Head = () => <title>O mnie - Adam Chrapek</title>
