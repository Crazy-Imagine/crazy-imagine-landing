import React from "react"
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
  const context = React.useContext(I18nextContext);
  const langu = context.language;
  const posts = data.articles.nodes
  const articlesFilter = posts.filter(({ locale }) => locale.includes(langu))
  const title = articlesFilter[0].title
  const description = articlesFilter[0].description
  const author = articlesFilter[0].author.name
  const category = articlesFilter[0].category.name
  const date = articlesFilter[0].category.created_at
  const key = articlesFilter[0].Key
  const slug = articlesFilter[0].slug

  return (
    <Layout>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar color="#27AAE1" variant="secondary" template={slug} />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile template="true" />
        </Hidden>
        <Box className={classes.header}>
          <>
            <InputLabel className={classes.label}>{category}</InputLabel>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.date}>
              {date} │ <span className={classes.author}>{author}</span>
            </Typography>
            <Typography className={classes.description}>{description}</Typography>
          </>
        </Box>
        <Box className={classes.imgContainer}>
          <GatsbyImage
            image={getImage(articlesFilter[0].image[0].localFile)}
            alt={title}
          />
        </Box>
        <Box className={classes.contentContainer}>
          <PostContent data={articlesFilter[0]} />
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
query Article($key: String!, $language: String!) {
   articles: allStrapiArticle(
    filter: {Key: {eq: $key}}
  ) {
    nodes {
      id
      description
      title
      slug
      created_at
      locale
      content
      author {
        name
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 45)
          }
        }
      }
      category {
        name
      }
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