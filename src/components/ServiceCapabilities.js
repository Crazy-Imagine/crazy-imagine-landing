import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    gap: "59px",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "35%",
  },
  desc: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
  },
}))

const ServiceCapabilities = ({ title, desc, img }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <img src={img} />
      <Box className={classes.textContainer}>
        <Typography className={classes.subtitle}>CAPABILITIES</Typography>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
