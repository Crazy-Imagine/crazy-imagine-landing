import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: "flex",
    gap: "59px",
    width: props.img ? "unset" : "59%",
    justifyContent: props.img ? "center" : "flex-start",
    margin: props.img ? "unset" : "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
    },
  }),
  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(0, 400)]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
  textContainer: props => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: props.img ? "35%" : "auto",
    [theme.breakpoints.down("md")]: {
      width: props.img ? "59%" : "auto",
    },
  }),
  desc: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  img: {
    width: "unset",
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.between(400, 0)]: {
      width: "45%",
    },
  },
}))

const ServiceCapabilities = ({ title, desc, img }) => {
  const classes = useStyles({ img })
  return (
    <Box className={classes.container}>
      {img && <img src={img} className={classes.img} alt={`${title}`} />}
      <Box className={classes.textContainer}>
        <Typography className={classes.subtitle}>CAPABILITIES</Typography>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
