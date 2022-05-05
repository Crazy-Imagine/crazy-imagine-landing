import React from "react"
import { graphql } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"

import CustomerReview from "./CustomerReview"

const useStyes = makeStyles({
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
  },
  referenceContainer: {
    textAlign: "center",
    background: "#193174",
    paddingTop: "78px",
  },
})

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
