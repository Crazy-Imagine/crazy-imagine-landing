import * as React from "react"
import { Hidden } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import SectionHeader from "../components/SectionHeader"
import WorkForm from "../components/WorkForm"
import Navbar from "../components/Navbar"
import Imagen from "../components/Imagen"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import headerImage from "../images/rocket.svg"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"

const WorkWithUsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout seo={{ metaTitle: "Work With Us At Crazy Imagine", metaDescription: "Work With Us At Crazy Imagine" }}>
      <PageWrapper>
        <header>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <SectionHeader
            title={t("workWithUs_sectionHeader_title")}
            btn={false}
            little={true}
            img={headerImage}
          />
        </header>
        <main>
          <WorkForm />
          <Imagen />
        </main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default WorkWithUsPage
