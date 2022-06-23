import React, { useRef } from "react"
import { Box, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import { PROJECTS } from "../navigation/sitemap"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    visibility: "hidden",
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "29px 20px 29px 20px",
    borderRadius: "14px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "22px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "175px",
      gap: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
      width: "75%",
    },
  },
  container2: {
    animation: `$myEffect 2000ms`,
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "29px 20px 29px 20px",
    borderRadius: "14px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "22px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "175px",
      gap: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
      width: "75%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
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
    lineHeight: "180%",
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
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
}))

export const CapabilitiesCard = ({ icon, title, desc }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box
      ref={ref}
      className={isVisible ? classes.container2 : classes.container}
    >
      <FontAwesomeIcon icon={icon} className={classes.icon} size="1px" />
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.desc}>{desc}</Typography>
      <Link
        to={`${PROJECTS}`}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        SERVICES →
      </Link>
    </Box>
  )
}

export default CapabilitiesCard
