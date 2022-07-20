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
import Layout from "../components/layout"
import NavbarMobile from "../components/NavbarMobile"
import RelatedSection from "../components/RelatedSection"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "71px",
    color: "#193174",
    marginBottom: "17px",
    [theme.breakpoints.down("md")]: {
      fontSize: "51px",
      lineHeight: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
  },
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "49px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginBottom: "35px",
    },
  },
  description: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "399",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    marginBottom: "99px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "22px",
      marginBottom: "0px",
    },
  },
  header: {
    height: "330px",
    width: "80%",
    paddingTop: "60px",
    margin: "70px auto 0px auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      margin: "0px auto 0px auto",
    },
  },
}))

const Project = ({ data }) => {
  const classes = useStyles()
  const context = React.useContext(I18nextContext);
  const langu = context.language;
  const project = data.allStrapiProjects.nodes
  const projectsFilter = project.filter(({ locale }) => locale.includes(langu))
  //const dataProject = data.strapiProjects
  const image = projectsFilter[0].images
  const title = projectsFilter[0].title
  const date = projectsFilter[0].created_at
  const description = projectsFilter[0].description
  const key = projectsFilter[0].Key

  return (
    <Layout>
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
          <HeroProjectsSection image={image} title={projectsFilter[0]?.title} />
          <>
            <AboutProjects
              aboutProject={projectsFilter[0]?.details}
              images={image}
              gallery={projectsFilter[0]?.galleryImages}
              moreAbout={projectsFilter[0]?.description}
            />
            <GalleryProjects
              images={image}
              gallery={projectsFilter[0]?.galleryImages}
              id={projectsFilter[0].id}
              description={projectsFilter[0]?.moreAbout}
            />
          </>
          <RelatedSection />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
query Project($key: String!, $language: String!) {
  allStrapiProjects(filter: {Key: {eq: $key}}) {
    nodes {
      details
      description
      id
      moreAbout
      title
      Key
      locale
      seo {
        metaTitle
        metaDescription
        id
        shareImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(quality: 50)
            }
          }
        }
      }
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 530, quality: 50)
          }
        }
      }
      galleryImages {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 530, quality: 50)
          }
        }
      }
      created_at(formatString: "DD/MM/YYYY")
    }
  }
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
`

export default Project