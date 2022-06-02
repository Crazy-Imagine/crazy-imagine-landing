import React, { useRef } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
      height: "auto",
      alignSelf: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "65%",
    },
  },
  classContainer: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "5px",
      height: "auto",
      alignSelf: "center",
    },
  },
  subtitle: {
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  subtitle2: {
    animation: `$myEffect 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title: {
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
  },
  title2: {
    animation: `$myEffect 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 1,
      transform: "scale(1.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  img: {
    visibility: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      width: "100%",
    },
  },
  img2: {
    animation: `$myEffecto 5000ms`,
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      width: "100%",
    },
  },
  desc: {
    visibility: "hidden",
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  desc2: {
    animation: `$myEffecto 5000ms`,
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  "@keyframes myEffecto": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
}))

const Capabilities = ({ title, desc, img, cls }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box ref={ref} className={classes[cls]}>
      <Typography className={isVisible ? classes.subtitle2 : classes.subtitle}>CAPABILITIES</Typography>
      <Typography className={isVisible ? classes.title2 : classes.title}>{title}</Typography>
      <Typography className={isVisible ? classes.desc2 : classes.desc}>{desc}</Typography>
      {img && <img className={isVisible ? classes.img2 : classes.img} src={img} />}
    </Box>
  )
}
export default Capabilities
