import React from "react"
import BlogPost from "../components/BlogPost"
import Link from "@material-ui/core/Link"

import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#193174",
    marginTop: "78px",
    marginBottom: "89px",
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    marginBottom: "51px",
  },
})

const PostCarousel = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Related Articles</Typography>
      <Link className={classes.link} style={{ textDecoration: "none" }}>
        ALL BLOGS →
      </Link>
      <BlogPost bulletClass="purpleBullet" />
    </Box>
  )
}

export default PostCarousel
