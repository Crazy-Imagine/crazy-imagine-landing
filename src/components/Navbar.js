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
    backgroundColor: props.scroll ? props.color : "rgba(25, 49, 116, 0.87)",
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
  contactButton: {
    width: "151px",
    height: " 40px",
    background: "transparent",
    borderRadius: "100px",
    textDecoration: "none",
    border: "2px solid #FFFFFF",
    "&:hover": {
      background: "#FFFFFF",
      "& a": {
        color: "#1E2F97",
      },
    },
  },
  linkTypography: props => ({
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    width: "100%",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    color: props.scroll ? props.linkVariant : "white",
    position: "relative",
    textDecoration: "none !important",
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      transition: "transform .5s ease",
    },
    "&:hover": {
      color: "white",
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
  contactTypography: props => ({
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    color: "#FFFFFF",
  }),
  effect: {
    paddingTop: "10px",
    "&::before": {
      left: "0",
      width: "100%",
      bottom: "-2px",
      height: "3px",
      background: "white",
      transform: "scaleX(0)",
    },
    "&:hover::before": {
      transform: "scaleX(1)",
    },
  },
  contactTypographyOutside: {
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    backgroundColor: "#1E2F97",
    color: "red",
    "&:hover": {
      color: "#FFFFF",
    },
  },
}))

const Navbar = ({
  variant = "primary",
  variantIcons = "primary",
  color = "transparent",
}) => {
  const { scroll } = useScroll()
  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)

  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
    color,
  })

  return (
    <AppBar color={color} position="fixed" className={classes.container}>
      <Toolbar className={classes.root}>
        <Box class={classes.barContainer}>
          <Link to={HOME}>
            <StaticImage src="../images/crazy-imagine-icon.svg" alt="logo" />
          </Link>
          <Box className={classes.linkContainer}>
            <Typography>
              <Link
                to={`${ABOUT}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                ABOUT
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${PROJECTS}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                SERVICES
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${BLOG}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                BLOG
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${WORK_WITH_US}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                WORK WITH US
              </Link>
            </Typography>
          </Box>
          <Link
            to={`${CONTACT}`}
            style={{ textDecoration: "none", borderRadius: "100px" }}
          >
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
