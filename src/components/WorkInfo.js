import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    animation: `$myEffect 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "50px",
    whiteSpace: "pre-line",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      marginTop: "40px",
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginTop: "70px",
      lineHeight: "22px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  desc: {
    animation: `$myEffecto 3000ms`,
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    marginTop: "19px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginTop: "13px",
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

const WorkInfo = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{`Interested
      In Working
      With Us?`}</Typography>
    </Box>
  )
}

export default WorkInfo
