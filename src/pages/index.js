import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/HomeHero"
import Hello from "../components/sections/HomeHello"

const IndexPage = ({data}) => {
  const {hero, hello} = data.home;
  return (
    <div className="scrollSnap">
      <Hero asset={{hero}}/>
      <Hello asset={{hello}}/>
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
    }
  }
`

export default IndexPage

export const Head = () => <title>Foto Studio</title>
