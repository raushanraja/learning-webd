import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import { Link } from "gatsby"
// import { rhythm, scale } from "../utils/typography"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <section>
          {children}
        </section>
      </main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </>
  )
}

export default Layout
