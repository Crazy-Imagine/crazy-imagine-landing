import React, { useRef } from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  mainTitle: {
    fontSize: 55,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Gotham-ultra",
    textAlign: "center",
    color: "#3399FF",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
      marginBottom: 50,
    },
  },
  titleLeft: {
    color: "#000a30",
    fontSize: 44,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  titleRight: {
    color: "#000a30",
    fontSize: 44,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  paragraphLeft: {
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: 25,
    paddingBottom: 5,
    marginRight: 35,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 30,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 17,
    },
  },
  paragraphRight: {
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: 25,
    paddingBottom: 5,
    marginLeft: "35px",
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 30,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 17,
    },
  },
  hideParagraph: {
    display: "none",
  },
  displayImage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  containerResponsive: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  containerReverse: {
    display: "flex",
    flexDirection: "row-reverse",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  boxLineLeft: {
    width: "45px",
    height: "6px",
    backgroundColor: "#000a30",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  boxLineRight: {
    width: "45px",
    height: "6px",
    marginLeft: "35px",
    backgroundColor: "#000a30",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  boxLineCenter: {
    width: "45px",
    height: "6px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#3399FF",
  },
  animationLeft: {
    animation: `$myEffectLeft 3000ms`,
  },
  animationRight: {
    animation: `$myEffectRight 3000ms`,
  },
  shakeTitle: {
    animation: `$shakeIt 3000ms`,
  },
  "@keyframes myEffectLeft": {
    "0%": {
      transform: "translateX(-200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectRight": {
    "0%": {
      transform: "translateX(200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes shakeIt": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
    "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
    "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
    "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
    "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
    "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
    "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
  },
}))

export const AnimatedTitle = ({ title, content, image, orientation, alt }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const mdGrid = orientation === "center" ? 12 : 6

  return (
    <Grid
      container
      className={`${
        orientation === "left"
          ? classes.containerResponsive
          : orientation === "right"
          ? classes.containerReverse
          : ""
      }`}
    >
      <Grid item xs={12} sm={12} md={mdGrid}>
        <Box
          ref={ref}
          className={`${
            isVisible
              ? orientation === "left"
                ? classes.animationLeft
                : orientation === "right"
                ? classes.animationRight
                : classes.shakeTitle
              : ""
          } `}
        >
          <Typography
            variant="h5"
            className={`${
              orientation === "left"
                ? classes.titleLeft
                : orientation === "right"
                ? classes.titleRight
                : classes.mainTitle
            }`}
          >
            {title}
          </Typography>
          <Box
            className={`${
              orientation === "left"
                ? classes.boxLineLeft
                : orientation === "right"
                ? classes.boxLineRight
                : classes.boxLineCenter
            }`}
          ></Box>
        </Box>
        <Typography
          className={`${
            orientation === "left"
              ? classes.paragraphLeft
              : orientation === "right"
              ? classes.paragraphRight
              : classes.hideParagraph
          }`}
        >
          {content}
        </Typography>
      </Grid>
      {orientation !== "center" && (
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage}>
            <img className={classes.img} src={image} alt={alt} />
          </Box>
        </Grid>
      )}
    </Grid>
  )
}
