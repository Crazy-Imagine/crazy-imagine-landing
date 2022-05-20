import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "./ContactForm"
import Section from "./Section"
import headerImage from '../images/satelite.svg'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "50px",
    color: "#193174",
    [theme.breakpoints.down('xs')]: {
      fontSize: "25px",
      lineHeight: "30px",
    },
  },

  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    [theme.breakpoints.down('xs')]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginTop: "83px",
    gap: "19px",
  },
  img: {
    marginTop: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "150px",
    height: "514px",
    width: "110%",
    [theme.breakpoints.down('sm')]: {
      height: "auto",
      flexDirection: "column",
      marginBottom: "20px",
      gap: "0px",
      marginTop: "-30px",
      width: "100%",
    },
  },
}))

const ContactSection = ({ bgColor, bgImage }) => {
  const classes = useStyles()

  return (
    <Section
      width="76%"
      backgroundImage={bgImage ? bgImage : ""}
      backgroundColor={bgColor ? bgColor : ""}
    >
      <Box className={classes.container}>
        <Box className={classes.textContainer}>
          <Typography className={classes.subtitle}>REACH OUT</Typography>
          <Typography className={classes.title}>
            {`Imagine What`}
          </Typography>
          <Typography className={classes.title} style={{ marginTop: '-17px' }}>
            {`We Can Create`}
          </Typography>
          <Box className={classes.img}>
            <StaticImage src="../images/satelite.svg" />
          </Box>
        </Box>
        <ContactForm />
      </Box>
    </Section>
  )
}

export default ContactSection
