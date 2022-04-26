import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "78px",
    padding: "0px 50px",
    backgroundColor: "#071A4E",
  },
  copyright: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: "0em",
    textAlign: "left",
    fontStyle: "normal",
  },
  barText: {
    color: "#27AAE1",
    fontSize: "15px",
    height: "17px",
  },
  text: {
    textAlign: "right",
    fontWeight: 700,
    fontSize: 12,
  },
})

const Copyright = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.copyright}>
        {" "}
        ©2022 Crazy Imagine, All Rights Reserved
      </Typography>
      <Typography className={classes.copyright}>
        {" "}
        Terms & Conditions <span className={classes.barText}>|</span> Privacy
        Policy
      </Typography>
    </Box>
  )
}

export default Copyright
