import React, { useRef } from "react"
import { Box, Hidden } from "@material-ui/core"
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
import HomeMainSection from "../components/HomeMainSection"
import ProjectSection from "../components/ProjectSection"
import HomeDescription from "../components/HomeDescription"
import { SectionHeader } from "../components/SectionHeader.js"
import CapabilitiesSection from "../components/CapabilitiesSection"
import headerImage from "../images/flag.svg"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const ref = useRef()

  return (
    <>
      <Layout seo={data.allStrapiHomepage.nodes[0].seo}>
        <PageWrapper>
          <div ref={ref}>
            <Hidden mdDown>
              <Navbar variant="secondary" />
            </Hidden>
            <Hidden lgUp>
              <NavbarMobile />
            </Hidden>
            <Box overflow="hidden">
              <SectionHeader
                title={`Ideas Beyond\nYour Imagination`}
                desc="TEAMWORK IS THE HEART OF EVERYTHING WE DO"
                btn={true}
                img={headerImage}
                cls="textContainer"
              />
              <HomeMainSection />
              <HomeDescription />
              <CapabilitiesSection />
              <ReferenceSection />
              <ProjectSection title={"Previous Projects"} btn={true} />
              <LastestPosts />
              <ContactSection bgColor="#FFFFFF" />
              <Footer />
              <Copyright />
            </Box>
          </div>
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
