import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import Navigator from "../components/navigator"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>

    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <Image/> */}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    <Navigator />
  </div>

)

export default IndexPage
