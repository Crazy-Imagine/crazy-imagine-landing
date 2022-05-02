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
  container: {
    display: "flex",
    justifyContent: "center",
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
    justifyContent: "center",
    gap: "50px",
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
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "50px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "28px",
    padding: "44px 0px 44px 44px",
    borderLeft: "1.5px solid #233B7E",
  },
  iconsContainer: {
    display: "flex",
    alignSelf: "flex-start",
    /* marginRight: "auto", */
    gap: "21px",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    gap: "4px",
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Nexa",
    fontWeight: "700",
    lineHeight: "16px",
    fontSize: "14px",
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Hero New",
    fontWeight: "400",
    fontSize: "14px",
  },
  footerLogo: {},
})

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
