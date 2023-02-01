import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/sections/Layout"
import Nav from "../components/organisms/Nav"
import Hero from "../components/sections/home/Hero"
import Hello from "../components/sections/home/Hello"

const IndexPage = ({data}) => {
  const {hero, hello} = data.home;
  return (
    <Layout>
      <Nav />
      <div className="scrollSnap">
        <Hero asset={{hero}}/>
        <Hello asset={{hello}}/>
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
      </div>
    </Layout>
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

export const Head = () => <title>Home Page</title>
