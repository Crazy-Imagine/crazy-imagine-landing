import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Box, Typography, makeStyles } from "@material-ui/core"
import { Remove } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  containerResponsive: {
    [theme.breakpoints.down("md")]: {
      margin: 0,
      display: "flex",
      justifyContent: "center",
    },
  },
  bgImage: {
    width: "100%",
    height: 800,
  },
  bgBox: {
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 49,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    lineHeight: 1,
  },
  titleSpan: {
    color: "#23aae1",
    fontSize: 65,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    lineHeight: 1,
  },
  author: {
    color: "white",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
  },
  authorIcon: {
    fontSize: "2rem",
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      padding: 5,
      justifyContent: "center",
    },
  },
}))

const HeroSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        team: strapiTeampage {
          Title
          Author
          Image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  const imageData = data.team.Image[0].localFile.childImageSharp.fluid
  const title = data.team.Title
  const author = data.team.Author

  const classes = useStyles()

  return (
    <Box height="795px" marginBottom="60px">
      <BackgroundImage
        Tag="section"
        className={classes.bgImage}
        fluid={imageData}
      >
        <Box marginLeft="230px" className={classes.containerResponsive}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="800px"
            paddingBottom="152px"
            maxWidth="690px"
            className={classes.titleContainer}
          >
            <Typography className={classes.title}>
              <span className={classes.titleSpan}>{title.slice(0, 10)}</span>{" "}
              <br />
              {title.slice(10)}
            </Typography>
            <br />
            <Typography className={classes.author}>
              <Remove className={classes.authorIcon} /> {author}
            </Typography>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  )
}

export default HeroSection
