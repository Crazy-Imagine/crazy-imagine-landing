import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import bgImage from "../images/headerBackground.svg"

const useStyles = makeStyles(theme => ({
  backgroundIn: props => ({
    backgroundColor: "#27AAE1",
    width: "92%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "14px",
    height: props.little ? "332px" : "530px",
  }),
  backgroundOut: props => ({
    background: "linear-gradient(179.23deg, #193174 27.17%, #27AAE1 96.81%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: props.little ? "490px" : "688px",
    mixBlendMode: "normal",
    width: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  }),
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
  textContainer: props => ({
    backgroundColor: "#27AAE1",
    display: "flex",
    flexDirection: "column",
    padding: "100px 0px 100px 100px",
    borderRadius: "14px",
    gap: "42px",
    justifyContent: props.little ? "center" : "flex-start",
    alignItems: "flex-start",
  }),
  imgContainer: props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: props.little ? 100 : 0,
  }),
  title: props => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa Bold",
    fontSize: props.little ? "70px" : "90px",
    lineHeight: "81px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
  }),
  desc: props => ({
    display: props.btn ? "inherit" : "none",
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#E3FFFF",
  }),
}))

export const SectionHeader = ({ title, desc, btn, little, img }) => {
  const classes = useStyles({ little, btn })

  return (
    <Box className={classes.backgroundOut}>
      <Box className={classes.backgroundIn}>
        <Box className={classes.textContainer}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.desc}>{desc}</Typography>
          {btn && (
            <Box className={classes.buttonContainer}>
              <Button className={classes.buttonLeft}>Capabilities</Button>
              <Button className={classes.buttonRight}>Get Started</Button>
            </Box>
          )}
        </Box>
        <Box className={classes.imgContainer}>
          <img src={img} alt="Header Image" />
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
