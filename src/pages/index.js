import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import HomeHero from "../components/sections/HomeHero"
import HomeGallery from "../components/sections/HomeGallery"
import HomeHello from "../components/sections/HomeHello"
import Reviews from "../components/sections/Reviews"
import HomeLab from "../components/sections/HomeLab"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from '../components/Seo';
import { inject } from '@vercel/analytics';

const IndexPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`IndexPage`)
  const {hero, slider, hello, lab} = data.home;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <HomeHero data={hero}/>
        <HomeGallery data={slider} />
        <HomeHello data={hello}/>
        <Reviews />
        <HomeLab data={lab}/>
        <TheyTrusted />
        <Footer />
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
  }
`

export default IndexPage


export const Head = () => (
  <>
    <Seo />
    <title>Foto Studio</title>
  </>
)