import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import cntImage from "../images/outlet.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
  classContainer: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
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
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}))

const Capabilities = ({ title, desc, img, cls }) => {
  const classes = useStyles()
  return (
    <Box className={classes[cls]}>
      <Typography className={classes.subtitle}>CAPABILITIES</Typography>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.desc}>{desc}</Typography>
      {img && <img className={classes.img} src={img} />}
    </Box>
  )
}
export default Capabilities
