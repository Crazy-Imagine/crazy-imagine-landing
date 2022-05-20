import React from "react"
import { graphql } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"
import CustomerReview from "./CustomerReview"
import bgImage from "../images/background.svg"

const useStyes = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
      lineHeight: "17px",
      marginBottom: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      lineHeight: "13px",
      marginBottom: "15px",
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
    [theme.breakpoints.down("md")]: {
      paddingTop: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "34px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "17px",
    },
  },
}))

const ReferenceSection = () => {
  const classes = useStyes()

  return (
    <Box className={classes.referenceContainer}>
      <Typography className={classes.title}>
        {`People Who Work
                  With Us Say`}
      </Typography>
      <CustomerReview />
    </Box>
  )
}

export default ReferenceSection
