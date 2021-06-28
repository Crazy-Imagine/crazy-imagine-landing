import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"

import { Hidden } from "@material-ui/core"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Copyright from "./Copyright"
import HumanTalent from "./HumanTalent"
import LastestPosts from "./LastestPosts"
import ReferenceSection from "./ReferenceSection"
import ContactSection from "./ContactSection"
import NavbarMobile from "./NavbarMobile"
import PageWrapper from "./PageWrapper"

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
        <PageWrapper>
          <Hidden mdDown>
            <Navbar />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <main>{children}</main>
          <HumanTalent />
          <ReferenceSection />
          <LastestPosts />
          <ContactSection bgColor="#23aae1" />
          <Footer />
          <Copyright />
        </PageWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
