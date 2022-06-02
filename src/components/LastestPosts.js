import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
/* import Link from "gatsby" */
import BlogPost from "./BlogPost"
import bgImage from "../images/background.svg"
import { BLOG } from "../navigation/sitemap"

const useStyes = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "78px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineWeight: "28px",
      marginTop: "55px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "23px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
}))

const LastestPosts = () => {
  const classes = useStyes()

  return (
    <Box className={classes.container}>
      <Typography
        className={classes.title}
      >{`The Latest in Tech Talk`}</Typography>
      <Link
        to={`${BLOG}`}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        ALL BLOGS →
      </Link>
      <BlogPost />
    </Box>
  )
}

export default LastestPosts
