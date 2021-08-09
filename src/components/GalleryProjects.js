import React, { useState } from "react"
import { Box, Button, Hidden, makeStyles } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons"

const useStyles = makeStyles({
  galleryImage: {
    width: "100%",
    height: 322,
    transition: "transform 300ms",
    "&:hover": {
      transform: "scale(0.95)",
    },
    "&:active": {
      zIndex: "999",
      transform: "scale(1.3, 1.5)",
    },
  },
  carouselButton: {
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      color: "#23aee1",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "transparent",
    },
  },
})

const GalleryProjects = ({ gallery }) => {
  const classes = useStyles()

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Box marginTop="50px">
      <Box display="flex">
        {gallery[activeStep] ? (
          <>
            <Button
              variant="contained"
              startIcon={<ArrowBackOutlined />}
              onClick={handleBack}
              disabled={activeStep === 0}
              className={classes.carouselButton}
            />
            <GatsbyImage
              image={getImage(gallery[activeStep].localFile)}
              alt={`image`}
              className={classes.galleryImage}
            />{" "}
            <Hidden mdDown>
              <GatsbyImage
                image={getImage(gallery[activeStep + 1].localFile)}
                alt={`image`}
                className={classes.galleryImage}
              />
              <GatsbyImage
                image={getImage(gallery[activeStep].localFile)}
                alt={`image`}
                className={classes.galleryImage}
              />
              <GatsbyImage
                image={getImage(gallery[activeStep + 2].localFile)}
                alt={`image`}
                className={classes.galleryImage}
              />
            </Hidden>
            <Button
              variant="contained"
              startIcon={<ArrowForwardOutlined />}
              onClick={handleNext}
              disabled={activeStep === gallery.length - 3}
              className={classes.carouselButton}
            />
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  )
}

export default GalleryProjects
