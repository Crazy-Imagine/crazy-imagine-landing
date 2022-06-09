import { Box, Typography, makeStyles } from "@material-ui/core"
import React, { useRef } from "react"
import { useIntersection } from "../hooks/useIntersection"

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
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  conta: {
    visibility: "hidden",
  },
  conta2: {
    animation: `$myEffect 2000ms`,
  },
  subtitle2: {
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
  title2: {
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
    [theme.breakpoints.down("sm")]: {
      width: props.img ? "59%" : "auto",
    },
  }),
  img: {
    width: "unset",
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.between(400, 0)]: {
      width: "45%",
    },
  },
  desc2: {
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
  imagen2: {
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
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box className={isVisible ? classes.conta2 : classes.conta}>
      <Box className={classes.container}>
        {img && <img src={img} className={classes.imagen2} alt={`${title}`} />}
        <Box className={classes.textContainer}>
          <Typography className={classes.subtitle2}>CAPABILITIES</Typography>
          <Typography className={classes.title2}>{title}</Typography>
          <Typography ref={ref} className={classes.desc2}>
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
