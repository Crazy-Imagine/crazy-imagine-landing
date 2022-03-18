import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const useStyles = makeStyles(theme => ({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "center center",
    backgroundPosition: "right !important",
    "&::before *": {
      backgroundPosition: "right !important",
    },
  },
  headerTitle: {
    color: "#3399FF",
    fontSize: 65,
    fontFamily: "Gotham-ultra",
    [theme.breakpoints.down("md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 45,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 38,
    },
  },
}))

const WorkMainSection = () => {
  const classes = useStyles()
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "MainWork.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 100
            webpOptions: { quality: 100 }
          )
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pluginImage = getImage(backgroundImage)

  return (
    <Box marginTop="110px">
      <BgImage image={pluginImage} className={classes.headerImage}>
        <Box className={classes.headerContainer}>
          <Typography
            variant="h2"
            align="center"
            className={classes.headerTitle}
          >
            ¡Work With Us!
          </Typography>
        </Box>
      </BgImage>
    </Box>
  )
}

export default WorkMainSection
