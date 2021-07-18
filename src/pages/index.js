import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Hidden } from "@material-ui/core"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HumanTalent from "../components/HumanTalent"
import LastestPosts from "../components/LastestPosts"
import ReferenceSection from "../components/ReferenceSection"
import ContactSection from "../components/ContactSection"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"

import Layout from "../components/layout"
import HomeMainSection from "../components/HomeMainSection"
import ProjectSection from "../components/ProjectSection"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const bgImage = getImage(data.strapiHomepage.seo.shareImage.localFile)

  return (
    <>
      <Layout seo={{ metaTitle: "Home" }}>
        <PageWrapper>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <HomeMainSection
            title="Crazy imagine sofware"
            mainTitle={data.strapiHomepage.hero.title}
            description={data.strapiHomepage.seo.metaDescription}
            image={bgImage}
          />
          <ProjectSection />
          <HumanTalent />
          <ReferenceSection />
          <LastestPosts />
          <ContactSection bgColor="#23aae1" />
          <Footer />
          <Copyright />
        </PageWrapper>
      </Layout>
    </>
  )
}

const query = graphql`
  query {
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
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
