import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import MoreInfo from "./MoreInfo"
import ContactForm from "./ContactForm"
import Section from "./Section"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "flex",
    justifyContent: "space-between",
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
}))

const ContactSection = () => {
  const classes = useStyles()
  return (
    <Section width="1000px" backgroundColor="#23aae1">
      <Grid container className={classes.gridContainer} id="contact">
        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.contactResponsive}>
            <MoreInfo />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.formResponsive}>
            <Box className={classes.contactResponsive}>
              <ContactForm />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default ContactSection
