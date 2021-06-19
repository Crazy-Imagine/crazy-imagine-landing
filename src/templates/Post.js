import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  CssBaseline,
  Hidden,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core"

import RecentlyPosted from "../components/RecentlyPosted"

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

const useStyles = makeStyles(theme => ({
  postContainer: {
    backgroundColor: "#2A2A2A",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Gotham",
    fontWeight: 500,
    fontSize: 72,
  },
  description: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Roboto",
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
      marginLeft: 16,
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
      <Box>
        <Box className={classes.postContainer}>
          <Box
            marginLeft="200px"
            paddingBottom="50px"
            marginBottom="20px"
            className={classes.titleContainer}
          >
            <Box>
              <Typography variant="h4" className={classes.title}>
                {title}
              </Typography>
            </Box>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Box>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={10}>
            <Box p="24px">
              <Typography className={classes.content}>{content}</Typography>
            </Box>
          </Grid>

          <Hidden smDown>
            <Grid item md={4} lg={2}>
              <RecentlyPosted />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </CssBaseline>
  )
}

export default Post
