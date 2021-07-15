import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import MoreInfo from "./MoreInfo"
import ContactForm from "./ContactForm"
import Section from "./Section"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingBottom: 48,
    paddingTop: 71,
  },
  contactResponsive: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  formResponsive: {
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
  },
  shadowOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    boxShadow: "inset 1px 17px 34px 1px rgba(4,8,0,0.25)",
  },
}))

const ContactSection = ({ bgColor, bgImage, showShadow, variant }) => {
  const classes = useStyles()

  return (
    <Section
      width="1000px"
      backgroundImage={bgImage ? bgImage : ""}
      backgroundColor={bgColor ? bgColor : ""}
    >
      {showShadow ? <Box className={classes.shadowOverlay} /> : null}
      <Grid
        container
        className={classes.gridContainer}
        justify="space-between"
        spacing={10}
      >
        <Grid item xs={12} sm={12} md="auto">
          <Box className={classes.contactResponsive}>
            <MoreInfo />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md="auto">
          <Box className={classes.formResponsive}>
            <Box className={classes.contactResponsive}>
              <ContactForm variant={variant} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default ContactSection
