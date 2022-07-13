import React, { useState, useEffect } from "react"
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
import ModalLang from "../components/ModalLang"


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
  const dataProject = data.strapiProjects
  const image = dataProject.images
  const title = dataProject.title
  const date = dataProject.created_at
  const description = dataProject.description
  const key = dataProject.Key
  const context = React.useContext(I18nextContext);
  const languages = context.language;
  const [contentProjectsTemplate, setcontentProjectsTemplate] = useState([]);

  const getStrapi = async () => {
    if (languages === "es") {
      const url = `${process.env.API_URL}/projects?_locale=es-VE&_Key=${key}` || `http://localhost:1337/projects?_locale=es-VE&_Key=${key}`;
      const respuest = await fetch(url).then(responses => responses.json())
        .then(data => { setcontentProjectsTemplate(data) });

    }
  }

  useEffect(() => {
    getStrapi()
  }, [languages])

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
          {(languages === "en") ?
            <Typography className={classes.description}>{description}</Typography>
            :
            <Typography className={classes.description}>{contentProjectsTemplate[0]?.description}</Typography>
          }
        </Box>
        {typeof window !== 'undefined' && (
          sessionStorage.getItem("lang") !== "true" &&
          <ModalLang />
        )}

        <Box overflow="hidden">
          <HeroProjectsSection image={image} title={dataProject?.title} />
          {(languages === "en") ?
            <>
              <AboutProjects
                aboutProject={dataProject?.details}
                images={image}
                gallery={dataProject?.galleryImages}
                moreAbout={dataProject?.description}
              />
              <GalleryProjects
                images={image}
                gallery={dataProject?.galleryImages}
                id={dataProject.id}
                description={dataProject?.moreAbout}
              />
            </>
            :
            <>
              <AboutProjects
                aboutProject={contentProjectsTemplate[0]?.details}
                images={image}
                gallery={dataProject?.galleryImages}
                moreAbout={contentProjectsTemplate[0]?.description}
              />
              <GalleryProjects
                images={image}
                gallery={dataProject?.galleryImages}
                id={dataProject.id}
                description={contentProjectsTemplate[0]?.moreAbout}
              />
            </>}
          <RelatedSection />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
query Project($id: String!, $language: String!) {
  strapiProjects(id: { eq: $id }) {
    details
    description
    id
    moreAbout
    title
    Key
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