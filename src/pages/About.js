import { Hidden } from "@material-ui/core"
import React, { Suspense, lazy } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"
import Copyright from "../components/Copyright"
import headerImage from "../images/marciano.svg"
import AboutSection from "../components/AboutSection"
import Imagen from "../components/Imagen"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import { graphql, useStaticQuery } from "gatsby"
//const Layout = lazy(() => import("../components/layout"))
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

const About = () => {
  const { t } = useTranslation()
  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>
    <Layout seo={{ metaTitle: "Our Team is Your Greatest Resource", metaDescription: "At CrazyImagine, our biggest strength is the quality of our team. We have a dynamic and diverse mix of full-stack, front-end, back-end, and mobile developers, as well as industry-leading project managers who are passionate about combining technology with creativity to develop web solutions to help your business thrive." }} >
      <PageWrapper>
        <header>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile variantIcons="primary" />
          </Hidden>
          <SectionHeader
            title={t("about_sectionHeader_title")}
            btn={false}
            img={headerImage}
            little={true}
          />
        </header>
        <section>
          <AboutSection />
          <Imagen />
        </section>
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
export default About
