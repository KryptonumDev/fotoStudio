import * as React from "react"
import { graphql } from "gatsby"
import HomeHero from "../components/sections/HomeHero"
import HomeHello from "../components/sections/HomeHello"
import HomeLab from "../components/sections/HomeLab"

const IndexPage = ({data}) => {
  const {hero, hello, lab} = data.home;
  return (
    <div className="scrollSnap">
      <HomeHero data={{hero}}/>
      <HomeHello data={{hello}}/>
      <HomeLab data={{lab}}/>
      <section className="sec"></section>
      <section className="sec"></section>
      <section className="sec"></section>
      <section className="sec"></section>
      <section className="sec"></section>
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
    }
  }
`

export default IndexPage

export const Head = () => <title>Foto Studio</title>
