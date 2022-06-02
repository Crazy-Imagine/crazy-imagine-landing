import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React, { useRef } from "react"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: "flex",
    gap: "59px",
    width: props.img ? "unset" : "59%",
    justifyContent: props.img ? "center" : "flex-start",
    margin: props.img ? "unset" : "auto",
  }),
  subtitle: {
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
  },
  subtitle2: {
    animation: `$myEffect 3000ms`,
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
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
  },
  title2: {
    animation: `$myEffect 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
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
  textContainer: props => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: props.img ? "35%" : "auto",
  }),
  desc: {
    visibility: "hidden",
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
  },
  desc2: {
    animation: `$myEffecto 3000ms`,
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
  },
  imagen: {
    visibility: "hidden",
  },
  imagen2: {
    animation: `$myEffecto 3000ms`,
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

const ServiceCapabilities = ({ title, desc, img }) => {
  const classes = useStyles({ img })
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box ref={ref} className={classes.container}>
      {img && <img src={img} className={isVisible ? classes.imagen2 : classes.imagen} />}
      <Box className={classes.textContainer}>
        <Typography className={isVisible ? classes.subtitle2 : classes.subtitle}>CAPABILITIES</Typography>
        <Typography className={isVisible ? classes.title2 : classes.title}>{title}</Typography>
        <Typography className={isVisible ? classes.desc2 : classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
