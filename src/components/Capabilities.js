import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { useI18next } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
      height: "auto",
      alignSelf: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "65%",
    },
  },
  classContainer: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "5px",
      height: "auto",
      width: "70%",
      alignSelf: "center",
    },
  },
  subtitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
  },
  img2: {
    width: "405px",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      width: "100%",
    },
  },
  desc2: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}))

const Capabilities = ({ title, desc, img, cls }) => {
  const classes = useStyles()
  const { t } = useI18next();
  return (
    <Box className={classes[cls]}>
      <Typography className={classes.subtitle2}>{t("common_button_capabilities")}</Typography>
      <Typography className={classes.title2}>{title}</Typography>
      <Typography className={classes.desc2}>{desc}</Typography>
      {img && <img className={classes.img2} src={img} alt="Capabilities" />}
    </Box>
  )
}
export default Capabilities
