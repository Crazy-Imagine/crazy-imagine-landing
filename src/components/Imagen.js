import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  img: {
    marginTop: "auto",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  container: {
    width: "100%",
  },
}))

const Imagen = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <StaticImage className={classes.img} src="../images/crazy1.png" />
    </Box>
  )
}

export default Imagen
