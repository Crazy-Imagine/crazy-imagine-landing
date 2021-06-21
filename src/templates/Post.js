import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import {
  Box,
  CssBaseline,
  Hidden,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core"

import RecentlyPosted from "../components/RecentlyPosted"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

const useStyles = makeStyles(theme => ({
  postContainer: {
    backgroundColor: "#2A2A2A",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Gotham",
    fontWeight: 500,
    fontSize: 72,
    margin: "auto 0px",
    maxWidth: 585,
  },
  description: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Roboto",
    maxWidth: "75%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#2A2A2A",
    textIndent: 32,
  },
  postImage: {
    width: "55%",
    height: 550,
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: 24,
      paddingBottom: 16,
    },
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()

  const title = data.article.title
  const description = data.article.description
  const content = data.article.content

  return (
    <CssBaseline>
      <Navbar />
      <Box className={classes.postContainer}>
        <Box
          height="850px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingBottom="40px"
          paddingLeft="290px"
          marginTop="auto"
          className={classes.titleContainer}
        >
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>

          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={10}>
          <Box p="24px">
            <ReactMarkdown className={classes.content}>{content}</ReactMarkdown>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid item md={4} lg={2}>
            <RecentlyPosted />
          </Grid>
        </Hidden>
      </Grid>
      <Footer />
      <Copyright />
    </CssBaseline>
  )
}

export const query = graphql`
  query Article($id: String!) {
    article: strapiArticle(id: { eq: $id }) {
      title
      id
      description
      content
    }
  }
`
export default Post
