import React, { useRef } from "react"
import { graphql } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"
import CustomerReview from "./CustomerReview"
import bgImage from "../images/background.svg"
import { useIntersection } from "../hooks/useIntersection"

const useStyes = makeStyles(theme => ({
  title: {
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    marginBottom: "50px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginBottom: "35px",
    },
  },
  title2: {
    animation: `$myEffect 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    marginBottom: "50px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginBottom: "35px",
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
  referenceContainer: {
    textAlign: "center",
    background: "#193174",
    paddingTop: "78px",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      paddingTop: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "34px",
    },
  },
}))

const ReferenceSection = () => {
  const classes = useStyes()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")

  return (
    <Box className={classes.referenceContainer}>
      <Typography ref={ref} className={isVisible ? classes.title2 : classes.title}>
        {`People Who Work
                  With Us Say`}
      </Typography>
      <CustomerReview />
    </Box>
  )
}

export default ReferenceSection
