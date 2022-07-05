import React, { Suspense, lazy } from "react"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import FeaturedArticle from "../components/FeaturedArticle"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import SectionHeader from "../components/SectionHeader"
import headerImage from "../images/deco.svg"
import BlogArticle from "../components/BlogArticle"
import { Hidden, Box, Button } from "@material-ui/core"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import { graphql } from "gatsby"
//const Layout = lazy(() => import("../components/layout"))
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import LanguageModal from "../components/LanguageModal"



const Blog = () => {

  const { languages, changeLanguage } = useI18next();
  const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();


  //const { t } = useTranslation()
  console.log(context.language);
  const handleclick = lang => {
    if (lang === 'en') console.log('language', lang)
    console.log(lang,)
  }
  return (
    // <>
    //   {typeof window !== 'undefined' && (
    //     <React.Suspense fallback={<Loading />}>
    <Layout seo={{ metaTitle: "The Latest in Tech Talk from our Team", metaDescription: "Articles" }} >
      <PageWrapper>
        <header>
          <Hidden mdDown>
            <Navbar variant="secondary" linkVariant="" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile variantIcons="primary" />
          </Hidden>
          <SectionHeader
            title={t("blog_sectionHeader_title")}
            btn={false}
            img={headerImage}
            little={true}
          />
        </header>
        <main>
          <FeaturedArticle />
          <BlogArticle />
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

export default Blog
