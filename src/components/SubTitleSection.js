import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: "flex",
    flexDirection: props.reverse ? "row-reverse" : "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    marginTop: "34px",
    marginBottom: "52px",
    [theme.breakpoints.down("md")]: {
      gap: "41px",
      marginTop: "24px",
      marginBottom: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "25px",
      marginTop: "15px",
      marginBottom: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "15px",
      marginTop: "7px",
      marginBottom: "11px",
    },
  }),
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "41%",
    [theme.breakpoints.down("md")]: {
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "3px",
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
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      lineHeight: "13px",
    },
  },
  img: {
    [theme.breakpoints.down("md")]: {
      width: "25%",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
}))

export const SubTitleSection = ({ title, desc, img, reverse }) => {
  const classes = useStyles({ reverse })
  return (
    <Box className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
      </Box>
      <img src={img} className={classes.img} alt="" />
    </Box>
  )
}

export default SubTitleSection
