import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import bgImage from "../images/headerBackground.svg"

const useStyles = makeStyles(theme => ({
  backgroundIn: props => ({
    backgroundColor: "#27AAE1",
    width: "93.2%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "14px",
    overflow: "hidden",
    height: props.little ? "332px" : "530px",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center",
      height: "auto",
      width: "93.2%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "93.2%",
      justifyContent: "center"
    },

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
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      height: "638px",
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
      height: "538px",
    },
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

    [theme.breakpoints.down('md')]: {
      padding: "50px 0px 50px 50px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down('xs')]: {
      padding: "10px 0px 10px 10px",
    },
  }),
  imgContainer: props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginRight: props.little ? "100px" : "0px",
    [theme.breakpoints.down('sm')]: {
      visibility: "hidden",
      width: "0px"
    },
    [theme.breakpoints.down('xs')]: {
      visibility: "hidden"
    },
  }),
  img: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down('sm')]: {
      width: "auto"
    },
    [theme.breakpoints.down('xs')]: {
      visibility: "hidden"
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)"
    }
  },
  title: props => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa Bold",
    fontSize: props.little ? "70px" : "90px",
    lineHeight: "81px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down('md')]: {
      lineHeight: "71px",
      fontWeight: 600,
      fontSize: "58px"
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: "81px",
      fontSize: props.little ? "70px" : "90px",
      fontWeight: 700,
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: "41px",
      fontSize: "33px",
      fontWeight: 100,
    },
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
          <img className={classes.img} src={img} alt="Header Image" />
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
