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
import { HOME, PROJECTS, TEAMS, WORK_WITH_US } from "../navigation/sitemap"
import icon from "../images/crazy-imagine-icon.svg"

const useStyles = makeStyles(theme => ({
  root: {
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  contactIcon: {
    fontSize: "22px",
    color: "#249DCF",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },
  },
  infoIcon: {
    color: "#27AAE1",
    marginTop: 3,
    alingSelf: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
    },
  },
  footerContainer: {
    display: "flex",
    height: "192px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      height: "134px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "83px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px",
    },
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35%",
      height: "35%",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25%",
      gap: "22px",
    },
  },
  formatContactSection: {
    "& $sectionLink": {
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "9px",
      },
    },
    "& $sectionTitle": {
      lineHeight: "inherit ",
      marginBottom: 4,
      marginTop: "13px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "3px",
        marginTop: "9px",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2px",
        marginTop: "7px",
      },
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
      gap: "38px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
    [theme.breakpoints.between(0, 500)]: {
      gap: "3px",
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
      gap: "20px",
      padding: "31px 0 31px 31px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "12px",
      padding: "19px 0 19px 19px",
    },
    [theme.breakpoints.between(0, 450)]: {
      width: "25%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "25%",
      gap: "4px",
      padding: "8px 0 4px 4px",
    },
  },
  iconsContainer: {
    display: "flex",
    alignSelf: "flex-start",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "3px",
    },
  },
  info: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    gap: "4px",
    [theme.breakpoints.down("md")]: {
      lineHeight: "14px",
      gap: "3px",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "7px",
      gap: "3px",
    },
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Nexa",
    fontWeight: "700",
    lineHeight: "16px",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      lineHeight: "11px",
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "7px",
      fontSize: "6px",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "5px",
      fontSize: "5px",
    },
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Hero New",
    fontWeight: "400",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
  footerLogo: {
    alignSelf: "flex-start",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.between(0, 450)]: {
      width: "85%",
    },
  },
}))

const Footer = ({ height = "192px", align = "center" }) => {
  const classes = useStyles()
  return (
    <Section backgroundColor="#193174" width="92%" height={height}>
      <Box className={classes.footerContainer}>
        <Box className={classes.logoContainer}>
          <img className={classes.footerLogo} src={icon} alt="Footer Icon" />
          <Box className={classes.iconsContainer}>
            <TwitterIcon className={classes.contactIcon}></TwitterIcon>
            <LinkedInIcon className={classes.contactIcon}></LinkedInIcon>
            <InstagramIcon className={classes.contactIcon}></InstagramIcon>
            <FacebookIcon className={classes.contactIcon}></FacebookIcon>
          </Box>
        </Box>
        <Box className={classes.linkContainer}>
          <Typography>
            <Link className={classes.linkTypography}>ABOUT</Link>
          </Typography>
          <Typography>
            <Link className={classes.linkTypography}>SERVICES</Link>
          </Typography>
          <Typography>
            <Link className={classes.linkTypography}>BLOG</Link>
          </Typography>
          <Typography>
            <Link className={classes.linkTypography}>WORK WITH US</Link>
          </Typography>
          <Typography>
            <Link className={classes.linkTypography}>CONTACT</Link>
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
