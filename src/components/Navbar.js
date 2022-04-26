import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import { HOME, PROJECTS, WORK_WITH_US } from "../navigation/sitemap"
import { colors, colorsIconos } from "../helpers/navbarColors"
import Button from "@material-ui/core/Button"
import useScroll from "../hooks/useScroll"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "white",
    zIndex: 999999,
  }),
  iconSpacing: {
    marginLeft: theme.spacing(10),
  },
  navbarIcons: props => ({
    fontSize: 25,
    color: props.scroll ? props.iconsVariant : "#23aae1",
  }),

  linkTypography: props => ({
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "16px",
    letterSpacing: "0.1em",
    textAlign: "right",
    transition: "all 300ms ease",
    color: props.scroll ? props.linkVariant : "black",
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: props.scroll ? props.linkVariant : "black",
    },
  }),

  barContainer: {
    margin: 1,
    display: "flex",
    width: "100%",
    height: "6em",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 50px",
    gap: "50px",
  },

  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },

  contactTypography: {
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    lineHeight: "14px",
    letterSpacing: "0.05em",
    textAlign: "center",
    color: "#1E2F97",
  },

  contactButton: {
    width: "151px",
    height: " 40px",
    background: "#FFFFFF",
    borderRadius: "100px",
  },

  navbarLogo: {
    width: 140,
    height: 73,
  },
}))

const Navbar = ({ variant = "primary", variantIcons = "primary" }) => {
  const { scroll } = useScroll()

  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)

  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
  })

  return (
    <AppBar color="transparent" position="fixed" className={classes.container}>
      <Toolbar>
        <Box class={classes.barContainer}>
          <Link to={HOME}>
            <StaticImage
              src="../images/LOGO.png"
              alt="logo"
              className={classes.navbarLogo}
            />
          </Link>
          <Box className={classes.linkContainer}>
            <Typography variant="h5">
              <Link to={`${HOME}#about`} className={classes.linkTypography}>
                About
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={`${PROJECTS}`} className={classes.linkTypography}>
                Services
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={`${HOME}#blog`} className={classes.linkTypography}>
                Blog
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={`${WORK_WITH_US}`} className={classes.linkTypography}>
                Work With Us
              </Link>
            </Typography>
          </Box>
          <Button href="#contained-buttons" className={classes.contactButton}>
            <Link to={`${HOME}#contact`} className={classes.contactTypography}>
              Contact Us
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
