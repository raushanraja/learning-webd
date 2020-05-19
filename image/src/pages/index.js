import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/images"
import "../styles/style.scss"



const BlogIndex = ({ data }) => {
  const nodes = data.allFile.nodes

  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      <Images nodes={nodes} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    allFile(filter: {relativePath: {regex: "/assets/images/"}}) {
    nodes {
    childImageSharp{
      id
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
    }
    }
  }
`



