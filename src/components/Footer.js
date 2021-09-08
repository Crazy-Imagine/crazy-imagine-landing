import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import Section from "./Section"

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
                <PhoneIcon /> +58 414 7079236
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
              <Typography className={classes.sectionLink}>Projects</Typography>
              <Typography className={classes.sectionLink}>Our Team</Typography>
              <Typography className={classes.sectionLink}>
                About Crazy Imagine
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.items}>
              <Typography variant="h3" className={classes.sectionTitle}>
                COMPANY
              </Typography>
              <Typography className={classes.sectionLink}>
                What else we povide
              </Typography>
              <Typography className={classes.sectionLink}>
                Our Technologies
              </Typography>
              <Typography className={classes.sectionLink}>Our Stats</Typography>
              <Typography className={classes.sectionLink}>
                What our clients say
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.items}>
              <Typography variant="h3" className={classes.sectionTitle}>
                GET STARTED
              </Typography>
              <Typography className={classes.sectionLink}>
                Contact Us
              </Typography>
              <Typography className={classes.sectionLink}>
                Our References
              </Typography>
              <Typography className={classes.sectionLink}>
                Last Posts
              </Typography>
              <Typography>
                <FacebookIcon className={classes.footerIcons} />{" "}
                <InstagramIcon className={classes.footerIcons} />{" "}
                <TwitterIcon className={classes.footerIcons} />{" "}
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
