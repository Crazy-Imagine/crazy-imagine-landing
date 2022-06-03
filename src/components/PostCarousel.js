import React from "react"
import BlogPost from "../components/BlogPost"
import { Link } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { BLOG } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
      marginBottom: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "20px",
      marginBottom: "25px",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
  },
}))

const PostCarousel = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Related Articles</Typography>
      <Link
        to={`${BLOG}`}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        ALL BLOGS →
      </Link>
      <BlogPost bulletClass="purpleBullet" />
    </Box>
  )
}

export default PostCarousel
