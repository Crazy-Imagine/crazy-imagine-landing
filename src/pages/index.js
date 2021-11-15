import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Box, Hidden } from "@material-ui/core"
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
  const bgImage = getImage(
    data.allStrapiHomepage.nodes[0].seo.shareImage.localFile
  )

  return (
    <>
      <Layout seo={data.allStrapiHomepage.nodes[0].seo}>
        <PageWrapper>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile />
          </Hidden>
          <Box overflow="hidden">
            <HomeMainSection
              title="Crazy imagine sofware"
              mainTitle={data.allStrapiHomepage.nodes[0].hero.title}
              description={data.allStrapiHomepage.nodes[0].seo.metaDescription}
              image={bgImage}
            />
            <ProjectSection />
            <HumanTalent />
            <ReferenceSection />
            <LastestPosts />
            <ContactSection bgColor="#23aae1" />
            <Footer />
            <Copyright />
          </Box>
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
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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

export default IndexPage
