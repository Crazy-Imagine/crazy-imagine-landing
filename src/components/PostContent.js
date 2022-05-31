import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  content: {
    textAlign: "justify",
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
  },
  container: {
    width: "70%",
    padding: "115px",
  },
}))

const PostContent = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <ReactMarkdown className={classes.content}>
        {data.article.content}
      </ReactMarkdown>
    </Box>
  )
}

export default PostContent
