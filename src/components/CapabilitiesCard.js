import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  container: {
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "29px 20px 29px 20px",
    borderRadius: "14px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "22px",
    aliginItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "175px",
      gap: "15px",
    },
  },
  icon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
      lineHeight: "19px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  desc: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
}))

export const CapabilitiesCard = ({ icon, title, desc }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <FontAwesomeIcon icon={icon} className={classes.icon} size="1x" />
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.desc}>{desc}</Typography>
      <Link className={classes.link}>SERVICES →</Link>
    </Box>
  )
}

export default CapabilitiesCard
