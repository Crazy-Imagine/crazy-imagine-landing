import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(quality: 5)
                  fluid (maxWidth: 100, maxHeight: 280){
                    src
                    srcSet
                    sizes
                    srcWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo seo={seo} />

        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
