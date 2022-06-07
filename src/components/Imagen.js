import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    gap: "150px",
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      height: "280px",
    },
  },
  img2: {
    //animation: `$myEffect 2000ms`,
    marginTop: "auto",
    width: "100%",
    height: "100%",
  },
}))

const Imagen = () => {
  const classes = useStyles()

  return (
    <Box className={classes.img2}>
      <StaticImage
        className={`${classes.img2}`}
        src="../images/crazy1.png"
      />
    </Box>
  )
}

export default Imagen
