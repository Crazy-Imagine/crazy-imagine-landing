import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { Box, makeStyles, Typography } from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Section from "./Section"
import {
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
  CONTACT,
} from "../navigation/sitemap"
//import { Autocomplete } from "@material-ui/lab"

const useStyles = makeStyles(theme => ({
  root: {
    color: "white",
    background: "red",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  contactIcon: {
    fontSize: "22px",
    color: "#249DCF",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  infoIcon: {
    color: "#27AAE1",
    marginTop: 3,
    alingSelf: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  footerContainer: {
    display: "flex",
    height: "192px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      flexDirection: "column",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    height: "100%",

    [theme.breakpoints.down("sm")]: {

    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      gap: "0px",
      marginBottom: "-45px",
      marginTop: "15px",
      padding: "14px 4px 54px 4px",
    },
  },
  formatContactSection: {
    "& $sectionLink": {
      marginBottom: 20,
    },
    "& $sectionTitle": {
      lineHeight: "inherit ",
      marginBottom: 4,
      marginTop: 13,
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "50px",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
      width: "0px",
      display: "none"
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "28px",
    padding: "44px 0px 44px 44px",
    borderLeft: "1.5px solid #233B7E",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      borderLeft: "0px solid #233B7E",
    },
    [theme.breakpoints.down("xs")]: {
      //visibility: "hidden"
      padding: "4px 0px 4px 4px",
      marginBottom: "15px",
    },
  },
  iconsContainer: {
    display: "flex",
    alignSelf: "center",
    /* marginRight: "auto", */
    gap: "21px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
    },
  },
  info: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    gap: "4px",
    [theme.breakpoints.down("xs")]: {
      lineHeight: "8px",
    },
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Nexa",
    fontWeight: "700",
    lineHeight: "16px",
    fontSize: "14px",
    textDecoration: "none",
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Hero New",
    fontWeight: "400",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  footerSection: {
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    },
  },
  footerLogo: {},
}))

const Footer = ({ height = "192px", align = "center" }) => {
  const classes = useStyles()
  return (
    <Section backgroundColor="#193174" width="92%" height={height}>
      <Box className={classes.footerContainer}>
        <Box className={classes.logoContainer}>
          <StaticImage
            src="../images/crazy-imagine-icon.svg"
            alt="footerImage"
          />
          <Box className={classes.iconsContainer}>
            <TwitterIcon className={classes.contactIcon}></TwitterIcon>
            <LinkedInIcon className={classes.contactIcon}></LinkedInIcon>
            <InstagramIcon className={classes.contactIcon}></InstagramIcon>
            <FacebookIcon className={classes.contactIcon}></FacebookIcon>
          </Box>
        </Box>
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
            <Link to={`${HOME}#blog`} className={classes.linkTypography}>
              BLOG
            </Link>
          </Typography>
          <Typography>
            <Link to={`${WORK_WITH_US}`} className={classes.linkTypography}>
              WORK WITH US
            </Link>
          </Typography>
          <Typography>
            <Link to={`${CONTACT}`} className={classes.linkTypography}>
              CONTACT
            </Link>
          </Typography>
        </Box>
        <Box className={classes.infoContainer}>
          <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faBuilding}
              className={classes.infoIcon}
              size="1x"
            />
            <Typography className={classes.infoTypography}>
              Urb Ambrosio Plaza #1 Street House #2/123 <br></br> San Cristobal,
              Venezuela
            </Typography>
          </Box>
          <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className={classes.infoIcon}
              size="1x"
            />
            <Typography className={classes.infoTypography}>
              Support@crazyimagine.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}

export default Footer
