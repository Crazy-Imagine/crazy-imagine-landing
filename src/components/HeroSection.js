import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Remove } from "@material-ui/icons"

const useStyles = makeStyles({
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
})

const HeroSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        team: strapiTeampage {
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
  const classes = useStyles()

  return (
    <Box height="795px">
      <BackgroundImage
        Tag="section"
        className={classes.bgImage}
        fluid={imageData}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          height="800px"
          paddingBottom="152px"
          marginLeft="230px"
          maxWidth="690px"
        >
          <Typography className={classes.title}>
            <span className={classes.titleSpan}>Simplicity</span> <br /> is
            about subtracting the obvious and adding the meaningful
          </Typography>
          <br />
          <Typography className={classes.author}>
            <Remove className={classes.authorIcon} /> John Meada
          </Typography>
        </Box>
      </BackgroundImage>
    </Box>
  )
}

export default HeroSection
