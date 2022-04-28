import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#071A4E",
  },
  copyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    height: "78px",
  },
  copyright: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 12,
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
      <Box className={classes.copyContainer}>
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
    </Box>
  )
}

export default Copyright
