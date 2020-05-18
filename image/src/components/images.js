import React from "react"
import "../styles/style.scss"
import Img from "gatsby-image"

function Images({ nodes }) {

  return (
    <div className={`image-container`}>
      {nodes.map(
      ({ childImageSharp}) => {
        return (<Img  className={`images`} key={childImageSharp.id} fluid={childImageSharp.fluid} />)
      }
    )}
    </div>
  )
}

export default Images
