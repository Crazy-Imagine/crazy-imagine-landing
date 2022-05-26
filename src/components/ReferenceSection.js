import React from "react"
import { graphql } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"
import CustomerReview from "./CustomerReview"
import bgImage from "../images/background.svg"

const useStyes = makeStyles(theme => ({
  title: {
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
