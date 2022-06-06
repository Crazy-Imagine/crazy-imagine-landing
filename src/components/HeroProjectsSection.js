import React from "react"
import { Box, makeStyles } from "@material-ui/core"
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
    [theme.breakpoints.down("md")]: {
      padding: "25px 0px",
    },
  },
}))

const HeroProjectsSection = ({ image, title }) => {
  const classes = useStyles()

  const dataImage = getImage(
    image.length > 1 ? image[1].localFile : image[0].localFile
  )
  return (
    <Box className={classes.imageContainer}>
      <GatsbyImage image={dataImage} alt={title} />
    </Box>
  )
}

export default HeroProjectsSection
