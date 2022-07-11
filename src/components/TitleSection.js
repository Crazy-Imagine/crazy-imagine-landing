import React, { useRef } from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import mainImage from "../images/Group619.svg"
import { useIntersection } from "../hooks/useIntersection"
import { useI18next } from "gatsby-plugin-react-i18next"

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
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  titleContainer: {
    alignSelf: "flex-start",
  },
  title2: {
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
  blueTitle2: {
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
  desc2: {
    //animation: `$myEffectos 2000ms`,
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
    visibility: "hidden",
  },
  img2: {
    animation: `$myEffect 2000ms`,
    width: "314px",
    height: "357px",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "auto",
    },
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

export const TitleSection = ({ desc }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  //const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <img
          src={mainImage}
          className={isVisible ? classes.img2 : classes.img}
          alt="Title"
        />
      </Box>
      <Box className={classes.textContainer}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title2}>{t("home_homeMainSection_titleSection_title")}</Typography>
          <Typography className={classes.blueTitle2}>{t("home_homeMainSection_titleSection_blueTitle")}</Typography>
        </Box>
        <Typography ref={ref} className={classes.desc2}>
          {desc}
        </Typography>
      </Box>
    </Box>
  )
}

export default TitleSection
