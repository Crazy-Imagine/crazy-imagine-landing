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
import { Hidden } from "@material-ui/core"
//import Layout from "../components/layout"
import Loading from "../components/Loading"
const Layout = lazy(() => import("../components/layout"))

const Blog = () => {
  return (
    <>
      {typeof window !== 'undefined' && (
        <React.Suspense fallback={<Loading />}>
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
                  title={`The Latest in Tech
        Talk from our Team`}
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
        </React.Suspense>
      )}
    </>
  )
}

export default Blog
