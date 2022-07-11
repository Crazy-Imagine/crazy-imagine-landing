import React, { useRef } from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import bgImage from "../images/background.svg"
import { useIntersection } from "../hooks/useIntersection"
import { useI18next } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    height: "470px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#193174",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },
  textContainer: {
    visibility: "hidden",
  },
  textContainer2: {
    animation: `$myEffect 2000ms`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
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
  text: {
    fontFamily: "Nexa",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    textAlign: "center",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },
  desc: {
    fontFamily: "Hero New",
    fontWeight: "600",
    whiteSpace: "pre-line",
    fontSize: "30px",
    lineHeight: "39px",
    color: "#FFFFFF",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "27px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "17px",
    },
  },
}))

const HomeDescription = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  //const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();
  return (
    <Box ref={ref} className={classes.container}>
      <Box
        className={isVisible ? classes.textContainer2 : classes.textContainer}
      >
        <Typography className={classes.text}>
          {t("home_homeDescription_text")}
        </Typography>
        <br></br>
        <Typography
          className={classes.desc}
        >{t("home_homeDescription_description")}</Typography>
      </Box>
    </Box>
  )
}

export default HomeDescription
