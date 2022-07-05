import React, { Suspense, lazy } from "react"
import { Box, Hidden } from "@material-ui/core"
import SectionHeader from "../components/SectionHeader"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServicesSection"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import ContactSection from "../components/ContactSection"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import headerImage from "../images/robot.svg"
import ProjectSection from "../components/ProjectSection"
import Loading from "../components/Loading"
//const Layout = lazy(() => import("../components/layout"))
import Layout from "../components/layout"

const Projects = () => {
  const { t } = useTranslation()
  const context = React.useContext(I18nextContext);
  const lang = context.language;
  //const data = useStaticQuery(query)
  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>
    <Layout >
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
    //     </React.Suspense>
    //   )}
    // </>
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
