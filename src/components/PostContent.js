import React from "react"
import ReactMarkdown from "react-markdown"
import { Box, makeStyles } from "@material-ui/core"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  content: {
    textAlign: "justify",
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
  container: {
    width: "70%",
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "65px",
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "25px",
    },
  },
}))

const PostContent = ({ data }) => {
  const classes = useStyles()
  const context = React.useContext(I18nextContext);
  const lang = context.language;
  return (
    <>
      <Box className={classes.container}>
        <ReactMarkdown className={classes.content}>
          {data.content}
        </ReactMarkdown>
      </Box>
    </>
  )
}

export default PostContent
