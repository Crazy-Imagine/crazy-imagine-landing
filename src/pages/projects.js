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
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import headerImage from "../images/robot.svg"
import ProjectSection from "../components/ProjectSection"
import Layout from "../components/layout"

const Projects = () => {
  const { t } = useTranslation()
  return (
    <Layout seo={{ metaTitle: "Projects", metaDescription: "Our passion is to create solutions which could give that extra value to your product, service or to business in general." }}>
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
              title={t("services_sectionHeader_title")}
              img={headerImage}
              btn={false}
              little={true}
            />
          </header>
          <main>
            <ServicesSection />
            <ProjectSection title={t("services_projectSection_title")} btn={false} />
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

export const query = graphql`
query($language: String!){
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  strapiProjectsPage {
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
