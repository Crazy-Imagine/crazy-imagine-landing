import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "115px",
  },
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
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    marginBottom: "26px",
  },
  description: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    width: "50%",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "21px",
  },
})

const AboutProjects = ({ aboutProject, moreAbout, gallery, images }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>About the project</Typography>
        <Typography className={classes.description}>{aboutProject}</Typography>
      </Box>
      <Box className={classes.imgContainer}>
        <GatsbyImage
          image={getImage(
            gallery[0] ? gallery[0].localFile : images[0].localFile
          )}
          imgStyle={{
            maxWidth: "530px",
            objectFit: "contain",
          }}
          style={{ maxWidth: "530px", objectFit: "contain" }}
          alt="About the project"
        />
        <GatsbyImage
          image={getImage(
            gallery[1] ? gallery[1].localFile : images[0].localFile
          )}
          imgStyle={{
            maxWidth: "530px",
            objectFit: "contain",
          }}
          style={{ maxWidth: "530px", objectFit: "contain" }}
          alt="More"
        />
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.title}>More than game</Typography>
        <Typography className={classes.description}>{moreAbout}</Typography>
      </Box>
    </>
  )
}

export default AboutProjects
