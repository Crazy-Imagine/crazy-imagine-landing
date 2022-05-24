import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    marginTop: "144px",
    marginBottom: "52px",
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px"

    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "41%",
    [theme.breakpoints.down('sm')]: {
      width: "79%",
      gap: "10px",
      marginBottom: "17px"
    },
    [theme.breakpoints.down('xs')]: {
      width: "86%",
      gap: "4px",
    },

  },
  title: {
    animation: `$myEffecto 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    width: "526px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  "@keyframes myEffecto": {
    "0%": {
      opacity: 0,
      transform: "scale(0)"
    },
    "50%": {
      opacity: 0.5,
      transform: "scale(0.5)"
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)"
    }
  },
  desc: {
    animation: `$myEffectos 8000ms`,
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down('xs')]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "13px",
    },
  },
  "@keyframes myEffectos": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    }
  },
  img: {
    animation: `$myEffect 3000ms`,
    [theme.breakpoints.down('xs')]: {
      width: "80%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "80%",
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
  imgn: {
    [theme.breakpoints.down('sm')]: {
      marginTop: "17px",
      justifyContent: "center",
      textAlign: "center",
    },
  },
}))

export const TitleSection = ({ title, desc, img }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.imgn}>
        <img className={classes.img} src={img} alt="" />
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default TitleSection
