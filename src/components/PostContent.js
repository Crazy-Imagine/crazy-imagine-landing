import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Box, Hidden, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  content: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#2A2A2A",
    textIndent: 32,
  },
  contentImage: {
    minWidth: 468,
    height: 741,
  },

  contentImageSecondary: {
    minWidth: 490,
    height: 260,
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
    },
  },
}))

const PostContent = ({ data }) => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      gridGap="38px"
      paddingTop="38px"
      paddingLeft={{ xs: "0px", md: `${data.article.image[1] || "170px"}` }}
    >
      {data.article.image[1] ? (
        <Hidden mdDown>
          <GatsbyImage
            image={getImage(data.article.image[1].localFile)}
            alt="contentImage"
            className={classes.contentImage}
          />
        </Hidden>
      ) : (
        ""
      )}
      <Box
        paddingLeft={{ xs: "7px", md: "38px" }}
        paddingRight={{ xs: "7px", md: "64px" }}
        paddingTop="58px"
      >
        <ReactMarkdown className={classes.content}>
          {data.article.content}
        </ReactMarkdown>
        {data.article.image[2] ? (
          <Box marginTop="30px" marginBottom="60px">
            <GatsbyImage
              image={getImage(data.article.image[2].localFile)}
              alt="contentImageSecondary"
              className={classes.contentImageSecondary}
            />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  )
}

export default PostContent
