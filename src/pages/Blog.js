import React from "react"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import FeaturedArticle from "../components/FeaturedArticle"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import SectionHeader from "../components/SectionHeader"
import headerImage from "../images/deco.svg"
import BlogArticle from "../components/BlogArticle"
import { Hidden } from "@material-ui/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import ModalLang from "../components/ModalLang"



const Blog = () => {

  //const { languages, changeLanguage } = useI18next();
  //React.useContext(I18nextContext);
  const { t } = useI18next();
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
          {typeof window !== 'undefined' && (
            sessionStorage.getItem("lang") !== "true" &&
            <ModalLang />
          )}
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
