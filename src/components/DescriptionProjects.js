import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles(theme => ({
  description: {
    fontFamily: "Roboto",
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "287px",
    alignItems: "center",
    "& h3": {
      fontSize: 40,
      fontFamily: "Roboto",
      margin: 0,
      width: 300,
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "initial",
      height: "auto",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
  },
  contentContainer: {
    [theme.breakpoints.down("md")]: {
      width: "auto",
      marginLeft: 10,
      marginRight: 10,
    },
  },
}))

const DescriptionProjects = ({ description }) => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      margin="auto"
      width="964px"
      py="60px"
      className={classes.contentContainer}
    >
      <ReactMarkdown className={classes.description}>
        {description}
      </ReactMarkdown>
    </Box>
  )
}

export default DescriptionProjects
