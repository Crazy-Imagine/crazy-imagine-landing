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
    marginTop: "124px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      lineHeight: "35px",
      marginTop: "87px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "22px",
      marginTop: "54px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "22px",
      marginTop: "20px",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      marginTop: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
      marginTop: "7px",
    },
  },
}))

const WorkInfo = () => {
  const classes = useStyles()

  return (
    <Box>
      <Typography className={classes.title}>{`Interested
      In Working
      With Us`}</Typography>
      <Typography className={classes.desc}>
        {`Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor 
        incididunt ut labore et dolore 
        magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation ullamco.`}
      </Typography>
    </Box>
  )
}

export default WorkInfo
