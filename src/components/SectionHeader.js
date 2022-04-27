import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  backgroundIn: {
    backgroundColor: "#27AAE1",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "row",
    height: "530px",
    justifyContent: "space-between",
    transform: "rotate(180deg)",
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
    padding: "14px 20px 12px 20px",
    "& > span": {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: 700,
      textAlign: "center",
      letterSpacing: "0.05em",
    },
  },
  buttonRight: {
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    color: "#FFFFFF",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",

    "& > span": {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: 700,
      textAlign: "center",
      letterSpacing: "0.05em",
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
  },
  textContainer: {
    backgroundColor: "#27AAE1",
    display: "flex",
    flexDirection: "column",
    padding: 100,
    gap: 42,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "92%",

    marginBottom: 50,
  },
  title: {
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa",
    fontSize: "90px",
    width: "65%",
    lineHeight: "81px",
    color: "#FFFFFF",
  },
  desc: {
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa",
    fontSize: "20px",
    lineHeight: "20px",
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
        <Box className={classes.textContainer}>
          <Typography className={classes.title}>
            Ideas Beyond Your Imagination
          </Typography>
          <Typography className={classes.desc}>
            TEAMWORK IS THE HEART OF EVERYTHING WE DO
          </Typography>

          <Box className={classes.buttonContainer}>
            <Button className={classes.buttonLeft}>Capabilities</Button>
            <Button className={classes.buttonRight}>Get Started</Button>
          </Box>
        </Box>
        <StaticImage src="../images/Frame587.svg" alt="Header Image" />
      </Box>
    </Box>
  )
}

export default SectionHeader
