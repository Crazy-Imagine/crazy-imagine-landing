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
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import Sidebar from "../components/Sidebar"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"
import { BgImage } from "gbimage-bridge"
import PostContent from "../components/PostContent"
import PostCarousel from "../components/PostCarousel"
import NavbarMobile from "../components/NavbarMobile"

const useStyles = makeStyles(theme => ({
  postContainer: {
    backgroundColor: "#2A2A2A",
  },
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    marginTop: "60px",
    color: "#193174",
  },
  header: {
    height: "490px",
    width: "80%",
    paddingTop: "60px",
    margin: "110px auto 0px auto",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "72px",
    color: "#193174",
    marginTop: "25px",
  },
  imageTitle: {
    objectFit: "contain",
  },
  description: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    marginTop: "50px",
  },
  postImage: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: 16,
      alignItems: "center",
    },
  },
  label: {
    background: "#797EF6",
    borderRadius: "5px",
    color: "white",
    textTransform: "uppercase",
    padding: "10px 13px",
    width: "fit-content",
  },
  author: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const title = data.article.title
  const description = data.article.description
  const author = data.article.author.name
  const category = data.article.category.name
  const date = data.article.category.created_at

  {
    /* <BgImage
                image={getImage(data.article.image[0].localFile)}
                alt={title}
              
              > */
  }

  return (
    <Layout seo={data.article.seo}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="secondary" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box className={classes.header}>
          <InputLabel className={classes.label}>{category}</InputLabel>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.date}>
            {date} │{author}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
        <GatsbyImage
          image={getImage(data.article.image[0].localFile)}
          alt={title}
          style={{
            objectFit: "contain",
            backgroundColor: "#27AAE1",
          }}
          imgStyle={{
            objectFit: "contain",
            backgroundColor: "#27AAE1",
          }}
        />

        <Footer />
        <Copyright />
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Article($id: String!) {
    article: strapiArticle(id: { eq: $id }) {
      title
      id
      description
      content
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
              gatsbyImageData
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
              quality: 100
            )
          }
        }
      }
      category {
        name
        created_at(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default Post
