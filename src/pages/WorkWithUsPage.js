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
//const Layout = lazy(() => import("../components/layout"))
import Layout from "../components/layout"
import ModalLang from "../components/ModalLang"

const WorkWithUsPage = () => {
  //const data = useStaticQuery(query)
  const { t } = useTranslation()
  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>
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
          {typeof window !== 'undefined' && (
            sessionStorage.getItem("lang") !== "true" &&
            <ModalLang />
          )}
          <WorkForm />
          <Imagen />
        </main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </PageWrapper>
    </Layout>
    //      </React.Suspense>
    //   )}
    // </>
  )
}

// const query = graphql`
// query {
//   workWithUs: strapiWorkWithUs {
//     SEO {
//       id
//       metaDescription
//       metaTitle
//       shareImage {
//         localFile {
//           publicURL
//           childImageSharp {
//             gatsbyImageData(quality: 5)
//           }
//         }
//       }
//     }
//   }
// }
// `
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
