import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import bgImage from "../images/background.svg"

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
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  text: {
    fontFamily: "Nexa",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    textAlign: "center",
    whiteSpace: "pre-line",
  },
  desc: {
    fontFamily: "Hero New",
    fontWeight: "600",
    whiteSpace: "pre-line",
    fontSize: "30px",
    lineHeight: "39px",
    color: "#FFFFFF",
    textAlign: "center",
  },
}))

const HomeDescription = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography className={classes.text}>
          {`With deep expertise that spans across the web development spectrum,\nwe can optimize your digital presence at any level.`}
        </Typography>
        <br></br>
        <Typography
          className={classes.desc}
        >{`Whether you are interested in partial web or 
        mobile development, full scale web development 
        and project management, or something in 
        between, CrazyImagine is here for you.`}</Typography>
      </Box>
    </Box>
  )
}

export default HomeDescription
