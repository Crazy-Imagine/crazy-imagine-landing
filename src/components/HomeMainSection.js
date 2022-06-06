import React, { useRef } from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import {
  faCode,
  faThumbsUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import HomeCard from "./HomeCard"
import TitleSection from "./TitleSection"
import { Link } from "gatsby"
import { PROJECTS } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    height: "837px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  cardContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      flexDirection: "column",
    },
  },
  button: {
    visibility: "hidden",
    background: "#797EF6",
    borderRadius: "100px",
    marginBottom: "87px",
    marginTop: "48px",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "61px",
      marginTop: "34px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
  },
  button2: {
    animation: `$myEffect 3000ms`,
    background: "#797EF6",
    borderRadius: "100px",
    marginBottom: "87px",
    marginTop: "48px",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "61px",
      marginTop: "34px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
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
}))

const HomeMainSection = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box className={classes.container}>
      <TitleSection
        desc="We will help you to strategize your web presence, designing and
          executing sitemaps and wireframes to provide a sleek, elegant, and
          seamless end-user experience"
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.cardContainer}
      >
        <Grid item xs="auto">
          <HomeCard title={`Full-stack\nDevelopment`} icon={faCode} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={`User\nExperience`} icon={faThumbsUp} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={`Quality\nSupport`} icon={faCircleCheck} />
        </Grid>
      </Grid>
      <Link to={`${PROJECTS}`} style={{ textDecoration: "none" }}>
        <Button
          ref={ref}
          className={isVisible ? classes.button2 : classes.button}
        >
          GET STARTED
        </Button>
      </Link>
    </Box>
  )
}

export default HomeMainSection
