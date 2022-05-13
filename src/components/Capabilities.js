import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import cntImage from "../images/outlet.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "32%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "22px",
  },
  classContainer: {
    width: "32%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "22px",
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
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
  },
  desc: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
  },
  cntImg: {
    order: 2,
    marginLeft: "auto",
  },
  img: {
    marginTop: "auto",
  },
}))

const Capabilities = ({ title, desc, img, cls, bgImg }) => {
  const classes = useStyles()
  return (
    <Box className={classes[cls]}>
      <Box></Box>
      <Typography className={classes.subtitle}>CAPABILITIES</Typography>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.desc}>{desc}</Typography>
      {img && <img className={classes.img} src={img} />}
      {/* <Box className={classes.cntImg}>
        {bgImg && <img src={cntImage}></img>}
      </Box> */}
    </Box>
  )
}
export default Capabilities
