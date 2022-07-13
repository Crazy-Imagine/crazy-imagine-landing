import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  Hidden,
  Typography,
  makeStyles,
  InputLabel,
} from "@material-ui/core"
import RecentlyPosted from "../components/RecentlyPosted"
import PostCarousel from "../components/PostCarousel"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"
import PostContent from "../components/PostContent"
import NavbarMobile from "../components/NavbarMobile"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import ModalLang from "../components/ModalLang"



const useStyles = makeStyles(theme => ({
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    marginTop: "60px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
      marginTop: "42px",
    },
  },
  header: {
    height: "480px",
    width: "80%",
    paddingTop: "60px",
    margin: "90px auto 0px auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      margin: "0px auto 0px auto",
    },
  },
  author: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "72px",
    color: "#193174",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "49px",
      lineHeight: "50px",
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
      marginTop: "10px",
    },
  },
  imgContainer: {
    backgroundColor: "#27AAE1",
    display: "flex",
    justifyContent: "center",
    padding: "45px 0px",
    marginTop: "90px",
    [theme.breakpoints.down("md")]: {
      marginTop: "45px",
    },
  },
  description: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "25px",
      fontSize: "17px",
      lineHeight: "22px",
    },
  },
  root: {
    "& .MuiFormLabel-root": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "15px",
      lineHeight: "15px",
      letterSpacing: "0.1em",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  },
  label: {
    color: "white",
    background: "#797EF6",
    borderRadius: "5px",
    textTransform: "uppercase",
    padding: "10px 13px",
    width: "fit-content",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    background: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const title = data.article.title
  const description = data.article.description
  const author = data.article.author.name
  const category = data.article.category.name
  const date = data.article.category.created_at
  const key = data.article.Key
  // console.log(key, "madafaka")
  // const context = React.useContext(I18nextContext);
  // const lang = context.language;
  const context = React.useContext(I18nextContext);
  //const { t } = useI18next();
  const la = context.language;
  const [contentPostTemplate, setcontentPostTemplate] = useState([]);
  //console.log("lang: ", lang)

  const getStrapi = async () => {
    if (la === "es") {
      const urlPT = `http://3.91.249.33:1337/articles?_locale=es-VE&_Key=${key}` || `http://localhost:1337/articles?_locale=es-VE&_Key=${key}`;
      //console.log("url: ", url)
      const re = await fetch(urlPT).then(respons => respons.json())
        .then(data => { setcontentPostTemplate(data) });

    }
  }

  useEffect(() => {
    getStrapi()
  }, [la])



  return (
    <Layout seo={data.article.seo}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar color="#27AAE1" variant="secondary" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box className={classes.header}>
          {(la === "en") ?
            <>
              <InputLabel className={classes.label}>{category}</InputLabel>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.date}>
                {date} │ <span className={classes.author}>{author}</span>
              </Typography>
              <Typography className={classes.description}>{description}</Typography></>
            :
            <>
              <InputLabel className={classes.label}>{contentPostTemplate[0]?.category.name}</InputLabel>
              <Typography className={classes.title}>{contentPostTemplate[0]?.title}</Typography>
              <Typography className={classes.date}>
                {date} │ <span className={classes.author}>{author}</span>
              </Typography>
              <Typography className={classes.description}>{contentPostTemplate[0]?.description}</Typography>
            </>
          }
        </Box>
        {typeof window !== 'undefined' && (
          sessionStorage.getItem("lang") !== "true" &&
          <ModalLang />
        )}
        <Box className={classes.imgContainer}>
          <GatsbyImage
            image={getImage(data.article.image[0].localFile)}
            alt={title}
          />
        </Box>
        <Box className={classes.contentContainer}>
          {(la === "en") ?
            <PostContent data={data} />
            :
            <PostContent data={contentPostTemplate[0]} />
          }
          <RecentlyPosted />
        </Box>
        <PostCarousel />
        <Footer />
        <Copyright />
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
query Article($id: String!, $language: String!) {
  article: strapiArticle(id: { eq: $id }) {
    title
    id
    description
    content
    Key
    author {
      name
    }
    seo {
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
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            layout: CONSTRAINED
            quality: 30
          )
        }
      }
    }
    category {
      name
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

export default Post