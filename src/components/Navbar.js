import React from "react"
import { Link } from "gatsby"
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
import Image from "../images/crazy-imagine-icon.svg"
import { useI18next } from "gatsby-plugin-react-i18next"
import LanguageModal from "../components/LanguageModal"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    width: "100%",
    backgroundColor: props.scroll ? props.color : "rgba(25, 49, 116, 0.87)",
    zIndex: 9,
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
    width: "150px",
    height: " 40px",
    background: "transparent",
    borderRadius: "100px",
    textDecoration: "none",
    border: "2px solid #FFFFFF",
    "&:hover": {
      background: "#FFFFFF",
      "& span": {
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
    [theme.breakpoints.between(1280, 1300)]: {
      gap: "20px",
    },
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    [theme.breakpoints.between(1345, 1470)]: {
      gap: "20px",
    },
    [theme.breakpoints.between(1322, 1345)]: {
      gap: "15px",
    },
    [theme.breakpoints.between(1300, 1322)]: {
      gap: "10px",
    },
  },
  contactTypography: {
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    color: "#FFFFFF",
  },
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
  const { t } = useI18next();
  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
    color,
  })

  return (
    <AppBar color={color} position="fixed" className={classes.container}>
      <Toolbar className={classes.root}>
        <Box className={classes.barContainer}>
          <Link to={HOME}>
            <img src={Image} alt="logo" style={{ width: "100%", height: "100%" }} />
          </Link>
          <Box className={classes.linkContainer}>
            <Typography>
              <Link
                to={`${ABOUT}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                {t("common_button_about")}
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${PROJECTS}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                {t("common_button_services")}
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${BLOG}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                {t("common_button_blog")}
              </Link>
            </Typography>
            <Typography>
              <Link
                to={`${WORK_WITH_US}`}
                className={`${classes.linkTypography} ${classes.effect}`}
              >
                {t("common_button_work_with_us")}
              </Link>
            </Typography>
            <LanguageModal />
          </Box>
          <Link
            to={`${CONTACT}`}
            style={{ textDecoration: "none", borderRadius: "100px" }}
          >
            <Button className={classes.contactButton}>
              <span
                style={{ textDecoration: "none" }}
                className={classes.contactTypography}
              >
                {t("common_button_contact_us")}
              </span>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
