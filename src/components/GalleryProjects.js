import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DescriptionProjects from "../components/DescriptionProjects"

const useStyles = makeStyles(theme => ({
  galleryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      padding: "0 35px",
    },
    [theme.breakpoints.between(0, 600)]: {
      flexDirection: "column",
    },
  },
}))

const GalleryProjects = ({ gallery, description }) => {
  const classes = useStyles()
  const firstGallery = gallery.slice(2, 4)
  const secondGallery = gallery.slice(4)

  return (
    <>
      <Box className={classes.galleryContainer}>
        {firstGallery.map(({ localFile }) => (
          <GatsbyImage
            image={getImage(localFile)}
            style={{
              maxWidth: "530px",
              objectFit: "contain",
            }}
            imgStyle={{
              maxWidth: "530px",
              objectFit: "contain",
            }}
            alt={`image`}
          />
        ))}
      </Box>
      <DescriptionProjects description={description} />
      <Box className={classes.galleryContainer}>
        {secondGallery.map(({ localFile }) => (
          <GatsbyImage
            image={getImage(localFile)}
            imgStyle={{
              maxWidth: "530px",
              objectFit: "contain",
            }}
            style={{
              maxWidth: "530px",
              objectFit: "contain",
            }}
            alt={`image`}
          />
        ))}
      </Box>
    </>
  )
}

export default GalleryProjects
