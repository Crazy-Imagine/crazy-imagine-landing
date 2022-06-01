import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "115px",
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
  },
})

const AboutProjects = ({ aboutProject, moreAbout, gallery }) => {
  const classes = useStyles()
  console.log(gallery)

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>About the project</Typography>
        <Typography className={classes.description}>{aboutProject}</Typography>
      </Box>
      <Box className={classes.imgContainer}>
        <GatsbyImage
          image={getImage(gallery[0].localFile)}
          alt="About the project"
          className={classes.projectImage}
        />
        <GatsbyImage
          image={getImage(gallery[1].localFile)}
          alt="More"
          className={classes.projectImage}
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
