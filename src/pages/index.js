import * as React from "react"
import Layout from "../components/sections/Layout"
import Nav from "../components/organisms/Nav"
import Hero from "../components/sections/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <div className="scrollSnap">
        <Hero />
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
        <section className="sec"></section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
