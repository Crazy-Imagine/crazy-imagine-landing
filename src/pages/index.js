import React, { useRef, Suspense, lazy } from "react"
import { Box, Button, Hidden } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import LastestPosts from "../components/LastestPosts"
import ReferenceSection from "../components/ReferenceSection"
import ContactSection from "../components/ContactSection"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import LanguageModal from "../components/LanguageModal"
import HomeMainSection from "../components/HomeMainSection"
import ProjectSection from "../components/ProjectSection"
import HomeDescription from "../components/HomeDescription"
import { SectionHeader } from "../components/SectionHeader.js"
import CapabilitiesSection from "../components/CapabilitiesSection"
import headerImage from "../images/flag.svg"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
//const Layout = lazy(() => import("../components/layout"))
//import { useTranslation } from "react-i18next"
//import { useTranslation } from "gatsby-plugin-react-i18next"

const IndexPage = () => {
  //const data = useStaticQuery(query)
  const ref = useRef()
  const { t } = useTranslation()
  //const { t } = useI18next();

  const context = React.useContext(I18nextContext);
  const lang = context.language;
  //const data = useStaticQuery(query)
  //console.log(context.language);

  // const { languages, changeLanguage } = useI18next();
  // const getStrapi = async () => {
  //   const url = `http://localhost:1337/articles?_locale=es-VE`;
  //   const resp = await fetch(url).then(response => response.json())
  //     .then(data => console.log(data));
  // }

  // getStrapi();
  // const handleclick = lang => {
  //   if (lang === 'en') console.log('language', lang)
  //   console.log(lang,)
  // }


  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>

    <Layout >

      <PageWrapper>
        <div ref={ref}>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <Box overflow="hidden">
            <header>
              <SectionHeader
                title={t("home_sectionHeader_title")}
                desc={t("home_sectionHeader_description")}
                btn={true}
                img={headerImage}
                cls="textContainer"
              />
            </header>
            <main>
              <HomeMainSection />
              <HomeDescription />
              <CapabilitiesSection />
              <ReferenceSection />
              <ProjectSection title={t("home_projectSection_title")} btn={true} size={true} />
              <LastestPosts />
              <ContactSection bgColor="#FFFFFF" />
            </main>
            <footer>
              <Footer />
              <Copyright />
            </footer>
          </Box>
        </div>
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 5)
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
// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: {language: {eq: $language}}) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
export default IndexPage
