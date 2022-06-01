import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles(theme => ({
  description: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    width: "50%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "115px",
  },
}))

const DescriptionProjects = ({ description }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <ReactMarkdown className={classes.description}>
        {description}
      </ReactMarkdown>
    </Box>
  )
}

export default DescriptionProjects
