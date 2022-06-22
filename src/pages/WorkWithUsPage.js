import * as React from "react"
import { Suspense, lazy } from "react"
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
import Loading from "../components/Loading"

import { graphql, useStaticQuery } from "gatsby"
const Layout = lazy(() => import("../components/layout"))
//import Layout from "../components/layout"
const WorkWithUsPage = () => {
  const data = useStaticQuery(query)
  return (
    <Suspense fallback={<Loading />}>
      <Layout seo={data.workWithUs.SEO}>
        <PageWrapper>
          <header>
            <Hidden mdDown>
              <Navbar variant="secondary" />
            </Hidden>
            <Hidden lgUp>
              <NavbarMobile />
            </Hidden>
            <SectionHeader
              title={`Work With Us
      At Crazy Imagine`}
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
    </Suspense>
  )
}

const query = graphql`
query {
  workWithUs: strapiWorkWithUs {
    SEO {
      id
      metaDescription
      metaTitle
      shareImage {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 5)
          }
        }
      }
    }
  }
}
`

export default WorkWithUsPage
