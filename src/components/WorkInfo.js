import * as React from "react"
import { useRef } from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    marginTop: "140px",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "50px",
    whiteSpace: "pre-line",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      marginTop: "120px",
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginTop: "70px",
      lineHeight: "30px",
      textAlign: "center",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "normal",
      width: "75%",
      textAlign: "center",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}))

const WorkInfo = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")

  return (
    <Box ref={ref} className={classes.container}>
      <Typography
        className={isVisible ? classes.title2 : classes.title}
      >{`Interested
      In Working
      With Us?`}</Typography>
    </Box>
  )
}

export default WorkInfo
