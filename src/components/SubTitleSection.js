import React, { useRef } from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    marginTop: "34px",
    marginBottom: "52px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "41%",
    [theme.breakpoints.down("sm")]: {
      width: "79%",
      gap: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "86%",
      gap: "4px",
      marginBottom: "17px",
    },
  },
  title2: {
    //animation: `$myEffectos 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontWeight: "auto",
      fontSize: "53px",
      lineHeight: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  desc2: {
    //animation: `$myEffectos 2000ms`,
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  img: {
    visibility: "hidden",
  },
  img2: {
    animation: `$myEffect 2000ms`,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      marginTop: "-27px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  imgn: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      textAlign: "center",
    },
  },
}))

export const SubTitleSection = ({ title, desc, img }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box ref={ref} className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography className={classes.title2}>
          {title}
        </Typography>
        <Typography className={classes.desc2}>
          {desc}
        </Typography>
      </Box>
      <Box className={classes.imgn}>
        <img
          className={isVisible ? classes.img2 : classes.img}
          src={img}
          alt=""
        />
      </Box>
    </Box>
  )
}

export default SubTitleSection
