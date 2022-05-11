import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Box, Hidden } from "@material-ui/core"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HumanTalent from "../components/HumanTalent"
import LastestPosts from "../components/LastestPosts"
import ReferenceSection from "../components/ReferenceSection"
import ContactSection from "../components/ContactSection"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"
import HomeMainSection from "../components/HomeMainSection"
import ProjectSection from "../components/ProjectSection"
import HomeDescription from "../components/HomeDescription"
import { SectionHeader } from "../components/SectionHeader.js"
import CapabilitiesSection from "../components/CapabilitiesSection"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <Layout seo={data.allStrapiHomepage.nodes[0].seo}>
        <PageWrapper>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <Box overflow="hidden">
            <SectionHeader
              title={`Ideas Beyond\nYour Imagination`}
              desc="TEAMWORK IS THE HEART OF EVERYTHING WE DO"
              btn={true}
            />
            <HomeMainSection />
            <HomeDescription />
            <CapabilitiesSection />
            <ReferenceSection />
            <ProjectSection />
            <LastestPosts />
            <ContactSection bgColor="#FFFFFF" />
            <Footer />
            <Copyright />
          </Box>
        </PageWrapper>
      </Layout>
    </>
  )
}

const query = graphql`
  query {
    allStrapiArticle {
      nodes {
        id
        description
        author {
          name
        }
        title
      }
    }
    allStrapiHomepage {
      nodes {
        seo {
          id
          metaDescription
          metaTitle
          shareImage {
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
        hero {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
