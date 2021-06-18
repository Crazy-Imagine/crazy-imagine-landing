import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionContainer: props => ({
    backgroundColor: props.backgroundColor ? props.backgroundColor : "",
    backgroundImage: props.backgroundImage ? props.backgroundImage : "",
    backgroundRepeat: props.backgroundImage ? "no-repeat" : "",
    width: "100%",
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
