import React from "react"
import { graphql } from "gatsby"
import { Box, Hidden, Typography, makeStyles } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HeroProjectsSection from "../components/HeroProjectsSection"
import AboutProjects from "../components/AboutProjects"
import GalleryProjects from "../components/GalleryProjects"
import DescriptionProjects from "../components/DescriptionProjects"
import MoreProjects from "../components/MoreProjects"
import Layout from "../components/layout"
import NavbarMobile from "../components/NavbarMobile"

const useStyles = makeStyles({
  title: {
    fontFamily: 'Nexa Bold',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "72px",
    color: "#193174",
    marginBottom: "17px",
  },
  date: {
    fontFamily: 'Nexa',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "50px",
  },
  description: {
    fontFamily: 'Hero New',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    marginBottom: "99px",
  },
  header: {
    height: "490px",
  width: "80%",
  paddingTop: "60px",
  margin: "90px auto 0px auto",}
}) 

const Project = ({ data }) => {
  const classes = useStyles()
  const dataProject = data.strapiProjects
  const image = dataProject.images
  const title = dataProject.title
  const date = dataProject.created_at
  const description = dataProject.description
  return (
    <Layout seo={dataProject?.seo}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="secondary" color={"#193174"} />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box className={classes.header}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.date}>{date}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
        <Box overflow="hidden">
          <HeroProjectsSection image={image} title={dataProject?.title} />
          <AboutProjects
            aboutProject={dataProject?.details}
            images={image}
            moreAbout={dataProject?.description}
          />
          <GalleryProjects
            gallery={dataProject?.galleryImages}
            id={dataProject.id}
          />
          <DescriptionProjects description={dataProject?.moreAbout} />
          <MoreProjects />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
query Project($id: String!) {
  strapiProjects(id: {eq: $id}) {
    details
    description
    id
    moreAbout
    title
    seo {
      metaTitle
      metaDescription
      id
      shareImage {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    images {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
    galleryImages {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 100)
        }
      }
    }
    created_at(formatString: "DD MMMM, YYYY")
  }
}
`

export default Project
