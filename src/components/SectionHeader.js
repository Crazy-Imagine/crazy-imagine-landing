import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  backgroundIn: {
    backgroundColor: "#27AAE1",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: 42,
    height: "530px",
    justifyContent: "center",
    alignItems: "flex-start",
    transform: "rotate(180deg)",
    width: "92%",
    marginBottom: 50,
  },
  backgroundOut: {
    background: "linear-gradient(179.23deg, #193174 27.17%, #27AAE1 96.81%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "688px",
    mixBlendMode: "normal",
    opacity: 0.9,
    width: "100%",
    transform: "rotate(180deg)",
  },
  buttonLeft: {
    backgroundColor: "#FFFFFF",
    borderRadius: "100px",
    color: "#1E2F97",
    fontSize: 14,
    textAlign: "center",
  },
  buttonRight: {
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    color: "#FFFFFF",
    borderRadius: "100px",
    fontSize: 12,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  title: {
    fontStyle: "normal",
    fontWeight: 700,
    width: "64%",
    fontSize: "90px",
    color: "#FFFFFF",
  },
  desc: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
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
        <Box className={classes.buttonContainer}>
          <Button className={classes.buttonLeft}>Capabilities</Button>
          <Button className={classes.buttonRight}>Get Started</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
