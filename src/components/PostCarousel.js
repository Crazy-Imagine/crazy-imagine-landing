import React from "react"
import BlogPost from "../components/BlogPost"
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core"

import { BLOG } from "../navigation/sitemap"

const useStyles = makeStyles({})

const PostCarousel = () => {
  return (
    <Box>
      <Typography>Related Articles</Typography>
      <Link>ALL BLOGS →</Link>
      <BlogPost />
    </Box>
  )
}

export default PostCarousel
