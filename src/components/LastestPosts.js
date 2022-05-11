import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Link from "@material-ui/core/Link"
import BlogPost from "./BlogPost"

const useStyes = makeStyles({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "78px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "23px",
    justifyContent: "center",
    backgroundColor: "#193174",
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "31px",
  },
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
  },
})

const LastestPosts = () => {
  const classes = useStyes()

  return (
    <Box className={classes.container}>
      <Typography
        className={classes.title}
      >{`The Latest in Tech Talk`}</Typography>
      <Link className={classes.link}>ALL BLOGS →</Link>
      <BlogPost />
    </Box>
  )
}

export default LastestPosts
