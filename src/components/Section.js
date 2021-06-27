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
  })

  return (
    <Box
      className={classes.sectionContainer}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={width} height={height ? height : "auto"}>
        {children}
      </Box>
    </Box>
  )
}

export default Section
