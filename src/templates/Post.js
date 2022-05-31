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
import PostCarousel from "../components/BlogPost"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"
import PostContent from "../components/PostContent"
import NavbarMobile from "../components/NavbarMobile"

const useStyles = makeStyles(theme => ({
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
    margin: "90px auto 0px auto",
  },
  author: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
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
  imgContainer: {
    backgroundColor: "#27AAE1",
    display: "flex",
    justifyContent: "center",
    padding: "45px 0px",
    marginTop: "90px",
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
  label: {
    background: "#797EF6",
    borderRadius: "5px",
    color: "white",
    textTransform: "uppercase",
    padding: "10px 13px",
    width: "fit-content",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const title = data.article.title
  const description = data.article.description
  const author = data.article.author.name
  const category = data.article.category.name
  const date = data.article.category.created_at

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
          <InputLabel className={classes.label}>{category}</InputLabel>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.date}>
            {date} │ <span className={classes.author}>{author}</span>
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
        <Box className={classes.imgContainer}>
          <GatsbyImage
            image={getImage(data.article.image[0].localFile)}
            alt={title}
          />
        </Box>
        <Box className={classes.contentContainer}>
          <PostContent data={data} />
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
