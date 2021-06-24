import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import useScroll from "../hooks/useScroll"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "white",
  }),

  navbarMobileIcons: props => ({
    fontSize: 50,
    color: props.scroll ? "white" : "#23aae1",
  }),
  navbarMobileLogo: {
    width: 140,
    height: 73,
  },
}))

const NavbarMobile = () => {
  //vale ahora como llamo esa funcion aqui?
  // como lo harias solo que sin pasarle parametros y sacando el valor que te retorna :3
  const { scroll } = useScroll()
  const classes = useStyles({
    scroll,
  })

  return (
    <AppBar color="transparent" position="fixed" className={classes.container}>
      <Toolbar>
        <Box
          m={1}
          mx={15}
          display="flex"
          width="100%"
          height="6em"
          alignItems="center"
          justifyContent="space-between"
        >
          <StaticImage
            src="../images/logo.jpeg"
            alt="logo"
            className={classes.navbarMobileLogo}
          />
          <MenuIcon className={classes.navbarMobileIcons} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMobile
