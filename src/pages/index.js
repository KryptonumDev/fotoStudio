import * as React from "react"
import Layout from "../components/sections/Layout"
import Nav from "../components/organisms/Nav"

const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <h1>Stwórzmy coś pięknego</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
