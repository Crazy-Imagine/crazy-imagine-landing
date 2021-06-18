import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"

import { CssBaseline } from "@material-ui/core"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Copyright from "./Copyright"
import HumanTalent from "./HumanTalent"
import LastestPosts from "./LastestPosts"
import ReferenceSection from "./ReferenceSection"
import ContactSection from "./ContactSection"

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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo seo={seo} />
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
        <HumanTalent />
        <ReferenceSection />
        <LastestPosts />
        <ContactSection />
        <Footer />
        <Copyright />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
