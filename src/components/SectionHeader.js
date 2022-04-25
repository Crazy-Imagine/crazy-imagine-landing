import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  backgroundIn: {
    backgroundColor: "#27AAE1",
    width: "50%",
    margin: "auto",
    height: "530px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  backgroundOut: {
    background: "linear-gradient(179.23deg, #193174 27.17%, #27AAE1 96.81%)",
    mixBlendMode: "normal",
    opacity: 0.9,
    height: "688px",
    width: "100%",
  },
  buttonLeft: {
    background: "#FFFFFF",
    borderRadius: "100px",
  },
  buttonRight: {
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "100px",
  },
  title: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "90px",
    color: "#FFFFFF",
  },
  desc: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    texTtransform: "uppercase",
    color: "#E3FFFF",
  },
}))

export const SectionHeader = () => {
  const classes = useStyles()

  return (
    <Box className={classes.backgroundOut}>
      <Box className={classes.backgroundIn}>
        <Typography className={classes.title}>
          Ideas Beyond Your Imagination
        </Typography>
        <Typography className={classes.desc}>
          TEAM WORK IS THE HEART OF EVERYTHING WE DO
        </Typography>
        {/* <GatsbyImage></GatsbyImage>
        <StaticImage></StaticImage> */}
        <Button>Capabilities</Button>
        <Button>Get Started</Button>
      </Box>
    </Box>
  )
}

export default SectionHeader
