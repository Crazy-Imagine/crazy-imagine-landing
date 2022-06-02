import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
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
      marginTop: "15px",
      lineHeight: "22px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  desc: {
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
