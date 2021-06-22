import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "white",
  }),

  navbarIcons: props => ({
    fontSize: 50,
    color: props.scroll ? "white" : "#23aae1",
  }),
  navbarLogo: {
    width: 140,
    height: 73,
  },
}))

const NavbarMobile = () => {
  const [scroll, setScroll] = useState(true)
  const classes = useStyles({
    scroll,
  })

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

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
            className={classes.navbarLogo}
          />
          <MenuIcon className={classes.navbarIcons} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMobile
