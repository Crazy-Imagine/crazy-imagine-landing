import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import SearchIcon from "@material-ui/icons/Search"
import useScroll from "../hooks/useScroll"
import { HOME, TEAMS } from "../navigation/sitemap"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "white",
  }),
  iconSpacing: {
    marginLeft: theme.spacing(10),
  },
  navbarIcons: props => ({
    fontSize: 20,
    color:
      props.variant === "secondary" &&
      "white" &&
      (props.scroll ? "white" : "#23aae1"),
  }),
  linkTypograpy: props => ({
    transition: "color 300ms ease",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "29px",
    color:
      (props.variant === "dark" && "black") ||
      (props.scroll ? "#FFFFFF" : "black"),
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: props.scroll ? "#FFFFFF" : "black",
    },
  }),
  linkTypographyColor: props => ({
    color:
      props.scroll && props.variant === "secondary"
        ? "#23aae1"
        : "white" && props.variant === "secondary" && "black",
  }),
  navbarLogo: {
    width: 140,
    height: 73,
  },
}))

const Navbar = ({ variant = "primary" }) => {
  const { scroll } = useScroll()
  const classes = useStyles({
    scroll,
    variant,
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
          justifyContent="space-evenly"
        >
          <Link to={HOME}>
            <StaticImage
              src="../images/LOGO.png"
              alt="logo"
              className={classes.navbarLogo}
            />
          </Link>
          <Link to={`${HOME}`}>
            <HomeIcon
              className={(classes.iconSpacing, classes.navbarIcons)}
              color="primary"
              fontSize="large"
            />
          </Link>
          <Typography variant="h5">
            <Link to={`${HOME}#about`} className={classes.linkTypograpy}>
              ABOUT US
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to={`${HOME}#services`}
              className={clsx(classes.linkTypograpy)}
            >
              Services
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to={`${TEAMS}`} className={classes.linkTypograpy}>
              Team
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to={`${HOME}#blog`} className={classes.linkTypograpy}>
              Blog
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to={`${HOME}#contact`} className={classes.linkTypograpy}>
              Contact
            </Link>
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="inherit"
            width="20%"
          >
            <Link to={`${HOME}`}>
              <FacebookIcon
                className={(classes.spacing, classes.navbarIcons)}
                color="primary"
                fontSize="large"
              />
            </Link>
            <Link to={`${HOME}`}>
              <TwitterIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to={`${HOME}`}>
              <InstagramIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to={`${HOME}`}>
              <LinkedInIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to={`${HOME}`}>
              <SearchIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
