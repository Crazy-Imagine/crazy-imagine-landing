import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  CssBaseline,
  Typography,
  makeStyles,
  CardMedia,
  Grid,
} from "@material-ui/core"

import postImage from "../images/reviewImage.jpg"
import { Hidden } from "@material-ui/core"

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

const useStyles = makeStyles({
  postContainer: {
    backgroundColor: "#2A2A2A",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Gothm",
    fontWeight: "bold",
    fontSize: 83,
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
  },
  postImage: {
    width: "55%",
    height: 550,
  },
})

const Post = ({ data }) => {
  const classes = useStyles()

  const title = data.article.title
  const description = data.article.description
  const content = data.article.content

  return (
    <CssBaseline>
      <Box>
        <Box className={classes.postContainer}>
          <Box marginLeft="200px" paddingBottom="50px" marginBottom="20px">
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
          <Grid item xs={12} sm={12} md={8}>
            <Typography className={classes.content}>{content}</Typography>
          </Grid>
          <Hidden smDown>
            <Grid item md={4}></Grid>
          </Hidden>
        </Grid>
      </Box>
    </CssBaseline>
  )
}

export default Post
