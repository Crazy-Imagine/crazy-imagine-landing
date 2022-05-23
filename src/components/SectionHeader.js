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
    justifyContent: props.little ? "flex-start" : "space-between",
    borderRadius: "14px",
    height: props.little ? "332px" : "530px",
    [theme.breakpoints.down("md")]: {
      height: props.little ? "232px" : "371px",
    },
    [theme.breakpoints.down("sm")]: {
      height: props.little ? "130px" : "230px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "4px",
      height: props.little ? "60px" : "105px",
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
    [theme.breakpoints.down("md")]: {
      height: props.little ? "343px" : "482px",
    },
    [theme.breakpoints.down("sm")]: {
      height: props.little ? "162px" : "260px",
    },
    [theme.breakpoints.down("xs")]: {
      height: props.little ? "81px" : "130px",
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
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "8px",
        lineHeight: "7px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 9px 6px 10px",
      "& > span": {
        fontSize: "6px",
        lineHeight: "5px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3px 3px 3px 3px",
      "& > span": {
        fontSize: "4px",
        lineHeight: "inherit",
      },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "9px",
      lineHeight: "7px",
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "8px",
        lineHeight: "7px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      lineHeight: "4px",
      padding: "6px 9px 6px 10px",
      "& > span": {
        fontSize: "6px",
        lineHeight: "5px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "4px 3px 3px 3px",
      border: "1px solid #FFFFFF",
      "& > span": {
        fontSize: "4px",
        lineHeight: "inherit",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    [theme.breakpoints.down("xs")]: {
      gap: "3px",
    },
  },
  textContainer: props => ({
    backgroundColor: "#27AAE1",
    display: "flex",
    flexDirection: "column",
    padding: props.little ? "0px 0px 0px 100px" : "100px 0px 0px 100px",
    borderRadius: "14px",
    gap: "42px",
    justifyContent: props.little ? "center" : "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      padding: props.little ? "0px 0px 0px 70px" : "70px 0px 0px 70px",
      gap: "29px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: props.little ? "0px 0px 0px 49px" : "49px 0px 0px 49px",
      gap: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 0px 0px 15px",
      justifyContent: "center",
      gap: "10px",
      "& > span": {
        fontSize: "6px",
        lineHeight: "5px",
      },
    },
  }),
  imgContainer: props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: props.little ? 100 : 0,
    [theme.breakpoints.down("md")]: {
      alignItems: "self-end",
    },
  }),
  title: props => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa Bold",
    fontSize: props.little ? "70px" : "90px",
    lineHeight: "81px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: props.little ? "49px" : "63px",
      lineHeight: "57px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: props.little ? "34px" : "44px",
      lineHeight: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: props.little ? "15px" : "18px",
      lineHeight: "20px",
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
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
      lineHeight: "inherit",
    },
  }),
  img: {
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22%",
      height: "22%",
    },
  },
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
