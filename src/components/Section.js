import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionContainer: props => ({
    backgroundImage: props.backgroundImage
      ? ` url(${props.backgroundImage})`
      : "",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "",
    backgroundRepeat: props.backgroundImage ? "no-repeat" : "",
    backgroundSize: props.backgroundImage ? "60% 100%" : "",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  }),
  sectionResponsive: props => ({
    height: props.height ? props.height : "auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  }),
}))

const Section = ({
  width,
  backgroundColor = "",
  backgroundImage = "",
  height = "",
  children,
}) => {
  const classes = useStyles({
    backgroundColor,
    backgroundImage,
    height,
  })


  return (
    <Box className={classes.sectionContainer}>
      <Box width={width} className={classes.sectionResponsive}>
        {children}
      </Box>
    </Box>
  )
}

export default Section
