import React, { useRef } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import ContactForm from "./ContactForm"
import Section from "./Section"
import Image from "../images/satelite.svg"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "50px",
    color: "#193174",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      lineHeight: "30px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-500%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  subtitle: {
    visibility: "hidden",
  },
  subtitle2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  img2: {
    marginTop: "auto",
  },
  imag: {
    width: "352px",
    height: "234px",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "auto",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "150px",
    height: "514px",
    width: "110%",
    [theme.breakpoints.down("sm")]: {
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
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()
  return (
    <Section
      width="76%"
      backgroundImage={bgImage ? bgImage : ""}
      backgroundColor={bgColor ? bgColor : ""}
    >
      <Box ref={ref} className={classes.container}>
        <Box className={classes.textContainer}>
          <Typography
            className={isVisible ? classes.subtitle2 : classes.subtitle}
          >
            {t("home_contacSection_subtitle")}
          </Typography>
          <Typography
            className={isVisible ? classes.title2 : classes.title}
          >{t("home_contacSection_title1")}</Typography>
          <Typography
            className={isVisible ? classes.title2 : classes.title}
            style={{ marginTop: "-17px" }}
          >
            {t("home_contacSection_title2")}
          </Typography>
          <Box className={classes.img2}>
            <img src={Image} className={classes.imag} alt="imagen" />
          </Box>
        </Box>
        <ContactForm />
      </Box>
    </Section>
  )
}

export default ContactSection
