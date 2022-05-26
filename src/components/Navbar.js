import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import {
  CONTACT,
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
  BLOG,
} from "../navigation/sitemap"
import { colors, colorsIconos } from "../helpers/navbarColors"
import Button from "@material-ui/core/Button"
import useScroll from "../hooks/useScroll"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    width: "100%",
    backgroundColor: props.scroll ? "transparent" : "rgba(25, 49, 116, 0.87)",
    zIndex: 999999,
  }),
  iconSpacing: {
    marginLeft: theme.spacing(10),
  },
  root: {
    justifyContent: "center",
  },
  navbarIcons: props => ({
    fontSize: 25,
    color: props.scroll ? props.iconsVariant : "white",
  }),
  contactButton: props => ({
    width: "151px",
    height: " 40px",
    background: "#FFFFFF",
    borderRadius: "100px",
    "&:hover": {
      background: "#F5F5F5",
    },
  }),
  linkTypography: props => ({
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    width: "100%",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    transition: "all 300ms ease",
    color: props.scroll ? props.linkVariant : "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: props.scroll ? props.linkVariant : "white",
    },
  }),
  barContainer: {
    margin: 1,
    display: "flex",
    width: "94%",
    height: "6em",
    justifyContent: "space-between",
    alignItems: "center",
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
      <Toolbar className={classes.root}>
        <Box class={classes.barContainer}>
          <Link to={HOME}>
            <StaticImage src="../images/crazy-imagine-icon.svg" alt="logo" />
          </Link>
          <Box className={classes.linkContainer}>
            <Typography>
              <Link to={`${ABOUT}`} className={classes.linkTypography}>
                ABOUT
              </Link>
            </Typography>
            <Typography>
              <Link to={`${PROJECTS}`} className={classes.linkTypography}>
                SERVICES
              </Link>
            </Typography>
            <Typography>
              <Link to={`${BLOG}`} className={classes.linkTypography}>
                BLOG
              </Link>
            </Typography>
            <Typography>
              <Link to={`${WORK_WITH_US}`} className={classes.linkTypography}>
                WORK WITH US
              </Link>
            </Typography>
          </Box>
          <Link to={`${CONTACT}`} style={{ textDecoration: "none" }}>
            <Button className={classes.contactButton}>
              <Link
                to={`${CONTACT}`}
                style={{ textDecoration: "none" }}
                className={classes.contactTypography}
              >
                Contact Us
              </Link>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
