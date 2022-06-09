import React from "react"
import { Box, Hidden } from "@material-ui/core"
import SectionHeader from "../components/SectionHeader"
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
import ProjectSection from "../components/ProjectSection"

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
          <header>
            <SectionHeader
              title={`Let Your Imagination
          Run Wild`}
              img={headerImage}
              btn={false}
              little={true}
            />
          </header>
          <main>
            <ServicesSection />
            <ProjectSection title={"Featured Projects"} btn={false} />
            <ContactSection />
          </main>
          <footer>
            <Footer />
            <Copyright />
          </footer>
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
