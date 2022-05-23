import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import ContactForm from "./ContactForm"
import contactImage from "../images/satelite.svg"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      lineHeight: "15px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      lineHeight: "7px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    marginTop: "83px",
    gap: "19px",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      height: "270px",
      marginTop: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      height: "270px",
      marginTop: "36px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      alignItems: "center",
      gap: "0px",
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
    [theme.breakpoints.down("xs")]: {
      width: "45%",
    },
  },
  container: {
    display: "flex",
    width: "80%",
    margin: "auto",
    gap: "150px",
    height: "514px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gap: "105px",
      height: "360px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "61px",
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: "0px",
      height: "auto",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    [theme.breakpoints.down("md")]: {
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
  },
}))

const ContactSection = ({ bgColor, bgImage }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.textContainer}>
        <Box className={classes.text}>
          <Typography className={classes.subtitle}>REACH OUT</Typography>
          <Typography className={classes.title}>{`Imagine What 
          We Can Create`}</Typography>
        </Box>
        <img src={contactImage} className={classes.img} />
      </Box>
      <ContactForm />
    </Box>
  )
}

export default ContactSection
