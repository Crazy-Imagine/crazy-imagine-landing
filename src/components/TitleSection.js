import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import mainImage from "../images/Group619.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    height: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    width: "39%",
    whiteSpace: "pre-line",
  },
  titleContainer: {
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    alignSelf: "flex-start",
  },
  blueTitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#27AAE1",
    alignSelf: "flex-start",
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
  img: {},
}))

export const TitleSection = ({ desc, img }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.img}>
        <img src={mainImage} alt="Title Image" />
      </Box>
      <Box className={classes.textContainer}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>{`Why 
        Should You`}</Typography>
          <Typography className={classes.blueTitle}>Choose Us</Typography>
        </Box>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default TitleSection
