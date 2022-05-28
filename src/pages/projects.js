import React from "react"
import { Box, Hidden } from "@material-ui/core"
import SectionHeader from "../components/SectionHeader"
import OurProjects from "../components/OurProjects"
import ProjectsServices from "../components/ProjectsServices"
import ProjectsContact from "../components/ProjectsContact"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServicesSection"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import ContactSection from "../components/ContactSection"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import headerImage from "../images/robot.svg"

const Projects = () => {
  const data = useStaticQuery(query)
  return (
    <Layout seo={data.projectsPage.SEO}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="secondary" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box overflow="hidden">
          <SectionHeader
            title={`Let Your Imagination
          Run Wild`}
            img={headerImage}
            btn={false}
            little={true}
          />
          <ServicesSection />
          <ContactSection />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

const query = graphql`
  query {
    projectsPage: strapiProjectsPage {
      SEO {
        metaDescription
        metaTitle
        id
        shareImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Projects
