import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: "#304fd5",
  },
  imageContainer: {
    backgroundColor: "#27AAE1",
    display: "flex",
    justifyContent: "center",
    padding: "45px 0px",
    marginTop: "90px",
  },
  title: {
    fontFamily: "Gotham-Black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 90,
    marginBottom: -70,
    color: "white",
    lineHeight: 0.9,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
      textAlign: "center",
    },
  },
}))

const HeroProjectsSection = ({ image, title }) => {
  const classes = useStyles()

  const dataImage = getImage(
    image.length > 1 ? image[1].localFile : image[0].localFile
  )
  return (
      <Box
        className={classes.imageContainer}
      >
          <GatsbyImage
            image={dataImage}
            alt={title}
          />
      </Box>
  )
}

export default HeroProjectsSection
