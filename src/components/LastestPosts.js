import React, { useRef } from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import BlogPost from "./BlogPost"
import bgImage from "../images/background.svg"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import { useI18next } from "gatsby-plugin-react-i18next"

const useStyes = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "78px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineWeight: "28px",
      marginTop: "55px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "23px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
    },
  },
  link: {
    visibility: "hidden",
  },
  link2: {
    animation: `$myEffectos 5000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  "@keyframes myEffectos": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
}))

const LastestPosts = () => {
  const classes = useStyes()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  //const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();

  return (
    <Box ref={ref} className={classes.container}>
      <Typography
        className={isVisible ? classes.title2 : classes.title}
      >{t("home_lastestPosts_title")}</Typography>
      <Link
        to={`${BLOG}`}
        className={isVisible ? classes.link2 : classes.link}
        style={{ textDecoration: "none" }}
      >
        {t("common_lastestPosts_button_allBlogs")}
      </Link>
      <BlogPost />
    </Box>
  )
}

export default LastestPosts
