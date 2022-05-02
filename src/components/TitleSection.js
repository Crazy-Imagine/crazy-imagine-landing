import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "59px",
    width: "77%",
    marginTop: "44px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
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
}))

export const TitleSection = ({ title, desc }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box>
        <StaticImage src="../images/Rectangle114.svg" />
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default TitleSection
