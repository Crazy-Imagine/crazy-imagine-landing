import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "./ContactForm"
import Section from "./Section"
import { text } from "@fortawesome/fontawesome-svg-core"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "50px",
    /* or 125% */
    color: "#193174",
  },

  subtitle: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    /* identical to box height */
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
  },

  contactResponsive: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  formResponsive: {
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
  },
  img: {
    alignSelf: "flex-end",
  },
}))

const ContactSection = ({ bgColor, bgImage, showShadow, variant }) => {
  const classes = useStyles()

  return (
    <Section
      width="92%"
      backgroundImage={bgImage ? bgImage : ""}
      backgroundColor={bgColor ? bgColor : ""}
    >
      <Grid
        container
        className={classes.gridContainer}
        justifyContent="space-between"
        spacing={10}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box className={classes.textContainer}>
            <Typography className={classes.subtitle}>REACH OUT</Typography>
            <Typography className={classes.title}>
              Imagine What We Can Create
            </Typography>
          </Box>
          <StaticImage
            src="../images/Rectangle161.svg"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box>
            <ContactForm variant={variant} />
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default ContactSection
