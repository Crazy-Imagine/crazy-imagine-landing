import { Hidden } from "@material-ui/core"
import React, { Suspense, lazy } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"
import Copyright from "../components/Copyright"
import headerImage from "../images/astronaut.svg"
import Layout from "../components/layout"
import Loading from "../components/Loading"
//const Layout = lazy(() => import("../components/layout"))
import { graphql, useStaticQuery } from "gatsby"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import ModalLang from "../components/ModalLang"


const Contact = () => {
  const { t } = useTranslation()
  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>
    <Layout seo={{ metaTitle: "Imagine What We Can Create", metaDescription: "ContactUs" }} >
      <PageWrapper>
        <header>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile variantIcons="primary" />
          </Hidden>
          <SectionHeader
            title={t("contactUs_sectionHeader_title")}
            btn={false}
            img={headerImage}
            little={true}
          />
        </header>
        <main>
          {sessionStorage.getItem("lang") !== "true" &&
            <ModalLang />
          }
          <ContactSection />
        </main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </PageWrapper>
    </Layout>
    //     </React.Suspense>
    //   )}
    // </>
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
export default Contact
