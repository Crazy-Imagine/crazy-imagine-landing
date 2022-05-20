import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import ContactForm from "./ContactForm"
import Section from "./Section"
import contactImage from "../images/satelite.svg"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "50px",
    color: "#193174",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
      lineHeight: "21px",
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
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginTop: "83px",
    gap: "19px",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      marginTop: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      marginTop: "36px",
    },
  },
  imgContainer: {
    marginTop: "auto",
  },
  img: {
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "150px",
    height: "514px",
    [theme.breakpoints.down("md")]: {
      gap: "105px",
      height: "360px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "61px",
      height: "300px",
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
          <Typography className={classes.title}>{`Imagine What 
          We Can Create`}</Typography>
          <img src={contactImage} className={classes.img} />
        </Box>
        <ContactForm />
      </Box>
    </Section>
  )
}

export default ContactSection
