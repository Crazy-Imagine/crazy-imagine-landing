import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import MoreInfo from "./MoreInfo"
import ContactForm from "./ContactForm"
import Section from "./Section"

const useStyles = makeStyles({
  gridContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 48,
    paddingTop: 71,
  },
})

const ContactSection = () => {
  const classes = useStyles()
  return (
    <Section width="1000px" backgroundColor="#23aae1">
      <Grid className={classes.gridContainer}>
        <Grid item>
          <MoreInfo />
        </Grid>
        <Grid item>
          <ContactForm />
        </Grid>
      </Grid>
    </Section>
  )
}

export default ContactSection
