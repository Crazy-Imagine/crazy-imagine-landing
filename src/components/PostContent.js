import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
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
    minWidth: 780,
    height: 260,
  },
})

const PostContent = ({ data }) => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      gridGap="38px"
      paddingTop="38px"
      paddingLeft={`${data.article.image[1] || "170px"}`}
    >
      {data.article.image[1] ? (
        <GatsbyImage
          image={getImage(data.article.image[1].localFile)}
          alt="contentImage"
          className={classes.contentImage}
        />
      ) : (
        ""
      )}
      <Box paddingLeft="38px" paddingRight="64px" paddingTop="58px">
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
