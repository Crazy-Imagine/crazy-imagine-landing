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

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  contactIcon: {
    fontSize: "22px",
    color: "#249DCF",
  },
  infoIcon: {
    color: "#27AAE1",
    marginTop: 3,
    alingSelf: "center",
  },
  footerContainer: {
    display: "flex",
    height: "192px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "25%",
    height: "100%",
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
    width: "70%",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 50,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "25%",
    gap: 28,
    padding: 44,
    borderLeft: "1px solid #233B7E",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
  },
  footerLogo: {
    marginTop: 32,
    width: 147,
    height: 78,
  },
})

const Footer = ({ height = "192px", align = "center" }) => {
  const classes = useStyles()
  return (
    <Section backgroundColor="#193174" width="100%" height={height}>
      <Box className={classes.footerContainer}>
        <Box className={classes.logoContainer}>
          <StaticImage
            src="../images/LOGO.png"
            alt="footerImage"
            className={classes.footerLogo}
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
