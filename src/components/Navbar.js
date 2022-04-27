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
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    transition: "all 300ms ease",
    color: props.scroll ? props.linkVariant : "black",
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
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    color: "#1E2F97",
  },

  contactButton: {
    width: "151px",
    height: " 40px",
    background: "#FFFFFF",
    borderRadius: "100px",
  },

  navbarLogo: {},
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
            <StaticImage src="../images/crazy-imagine-icon.svg" alt="logo" />
          </Link>
          <Box className={classes.linkContainer}>
            <Typography>
              <Link to={`${HOME}#about`} className={classes.linkTypography}>
                ABOUT
              </Link>
            </Typography>
            <Typography>
              <Link to={`${PROJECTS}`} className={classes.linkTypography}>
                SERVICES
              </Link>
            </Typography>
            <Typography>
              <Link to={`${HOME}#blog`} className={classes.linkTypography}>
                BLOG
              </Link>
            </Typography>
            <Typography>
              <Link to={`${WORK_WITH_US}`} className={classes.linkTypography}>
                WORK WITH US
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
