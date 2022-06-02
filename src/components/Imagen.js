import React, { useEffect, useRef } from "react"
import { Box, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  img: {
    animation: `$myEffect 3000ms`,
    marginTop: "auto",
    width: "100%",
    height: "100%",
  },
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
    animation: `$myEffect 3000ms`,
    marginTop: "auto",
    width: "100%",
    height: "100%",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
}))

const Imagen = ({ setY }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box ref={ref} className={isVisible ? classes.img2 : classes.img}>
      <StaticImage className={`${isVisible && classes.img2}`} src="../images/crazy1.png" />
    </Box>
  )
}

export default Imagen
