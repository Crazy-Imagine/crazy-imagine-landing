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
    [theme.breakpoints.down("md")]: {
      gap: "41px",
      height: "auto",
      marginTop: "35px",
      marginBottom: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column ",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "39%",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      marginTop: "9px",
      marginBottom: "9px",
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
    },
  },
  titleContainer: {
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    alignSelf: "flex-start",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
      lineHeight: "29px",
    },
  },
  blueTitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#27AAE1",
    alignSelf: "flex-start",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
      lineHeight: "29px",
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
  img: {
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
      alignItems: "center",
    },
    [theme.breakpoints.between(200, 600)]: {
      width: "45%",
    },
    [theme.breakpoints.between(0, 200)]: {
      width: "55%",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "inherit",
      justifyContent: "center",
      marginTop: "10px",
    },
  },
}))

export const TitleSection = ({ desc, img }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <img src={mainImage} className={classes.img} alt="Title Image" />
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
