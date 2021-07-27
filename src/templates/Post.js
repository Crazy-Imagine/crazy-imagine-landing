import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Box, Hidden, Typography, makeStyles, Grid } from "@material-ui/core"

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
  imageTitle: {
    width: 958,
    height: 731,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  title: {
    color: "#ffffff",
    fontFamily: "Gotham",
    fontWeight: 500,
    fontSize: 72,
    filter: "drop-shadow(1px 4px 6px black)",
    margin: "auto 0px",
    maxWidth: 601,
    marginRight: "auto",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      fontSize: 52,
      marginRight: 0,
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  description: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Roboto",
    maxWidth: 980,
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
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
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const title = data.article.title
  const description = data.article.description

  return (
    <Layout seo={data.article.seo}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="secondary" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box className={classes.postContainer}>
          <Box
            height="850px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom="38px"
            className={classes.titleContainer}
          >
            <Box
              display="flex"
              marginTop="auto"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
              marginBottom="auto"
            >
              <BgImage
                image={getImage(data.article.image[0].localFile)}
                alt={title}
                className={classes.imageTitle}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  height="100%"
                  marginLeft={{ xs: "0px", md: "-260px" }}
                >
                  <Typography variant="h4" className={classes.title}>
                    {title}
                  </Typography>
                </Box>
              </BgImage>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" paddingBottom="76px">
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs>
            <PostContent data={data} />
          </Grid>
          <Hidden smDown>
            <Grid item>
              <Sidebar>
                <RecentlyPosted />
              </Sidebar>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden mdDown>
          <PostCarousel articles={data.article} />
        </Hidden>
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
            )
          }
        }
      }
    }
  }
`

export default Post
