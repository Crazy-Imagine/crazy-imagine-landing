import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import RoomIcon from "@material-ui/icons/Room"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import Section from "./Section"
import { HOME, PROJECTS, TEAMS } from "../navigation/sitemap"

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  footerLogo: {
    width: 147,
    height: 78,
  },
  sectionTitle: {
    marginBottom: 14,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: "59px",
  },
  sectionLink: {
    marginBottom: 18,
    fontSize: 19,
    lineHeight: "21px",
  },
  footerIcons: {
    marginRight: 8,
    marginTop: 16,
  },
  formatContactSection: {
    "& $sectionLink": {
      marginBottom: 8,
    },
    "& $sectionTitle": {
      lineHeight: "inherit",
      marginBottom: 4,
      marginTop: 13,
    },
  },
  gridContainer: {
    height: "100%",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  resetLink: {
    color: "#ffffff",
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none",
    },
  },
})

const Footer = ({ height = "auto", align = "center" }) => {
  const classes = useStyles()
  return (
    <Section backgroundColor="#1D1D1D" width="1060px" height={height}>
      <Box py={5} className={classes.root} height="100%">
        <Grid container alignItems={align} className={classes.gridContainer}>
          <Grid item xs={12} md={5} className={classes.items}>
            <StaticImage
              src="../images/LOGO.png"
              alt="footerImage"
              className={classes.footerLogo}
            />
            <Box
              className={classes.formatContactSection}
              display={{ xs: "flex", md: "block" }}
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h3" className={classes.sectionTitle}>
                CONTACT
              </Typography>
              <Typography className={classes.sectionLink}>
                <RoomIcon /> Urb Ambrosio Plaza #1 street
              </Typography>
              <Typography className={classes.sectionLink}>
                House #2/123, San Cristobal, Venezuela.
              </Typography>
              <Typography className={classes.sectionLink}>
                <EmailIcon /> support@crazyimagine.com
              </Typography>
            </Box>
          </Grid>
          <Grid item container xs={12} md={7} spacing={1}>
            <Grid item xs={12} md={4} className={classes.items}>
              <Typography variant="h3" className={classes.sectionTitle}>
                ABOUT US
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${PROJECTS}`} className={classes.resetLink}>
                  Projects
                </Link>
              </Typography>

              <Typography className={classes.sectionLink}>
                <Link to={`${TEAMS}`} className={classes.resetLink}>
                  Our Team
                </Link>
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#about`} className={classes.resetLink}>
                  About Crazy Imagine
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.items}>
              <Typography variant="h3" className={classes.sectionTitle}>
                COMPANY
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${PROJECTS}`} className={classes.resetLink}>
                  What else we povide
                </Link>
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${PROJECTS}#all`} className={classes.resetLink}>
                  Our Technologies
                </Link>
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#stats`} className={classes.resetLink}>
                Our Stats
                </Link>
                </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#clients`} className={classes.resetLink}>
                  What our clients say
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.items}>
              <Typography variant="h3" className={classes.sectionTitle}>
                GET STARTED
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#contact`} className={classes.resetLink}>
                  Contact Us
                </Link>
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#projects`} className={classes.resetLink}>
                  Our References
                </Link>
              </Typography>
              <Typography className={classes.sectionLink}>
                <Link to={`${HOME}#blog`} className={classes.resetLink}>
                  Last Posts
                </Link>
              </Typography>
              <Typography>
                <FacebookIcon className={classes.footerIcons} />{" "}
                <TwitterIcon className={classes.footerIcons} />{" "}
                <InstagramIcon className={classes.footerIcons} />{" "}
                <LinkedInIcon className={classes.footerIcons} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}

export default Footer
