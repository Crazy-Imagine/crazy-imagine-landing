import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#071A4E",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  copyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    height: "78px",
    [theme.breakpoints.down("md")]: {
      height: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "34px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  copyright: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "12px",
    textAlign: "left",
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
  barText: {
    color: "#27AAE1",
    fontSize: "15px",
    height: "17px",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      height: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      height: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
  text: {
    textAlign: "right",
    fontWeight: 700,
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
}))

const Copyright = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.container}>
      <Box className={classes.copyContainer}>
        <Typography className={classes.copyright}>
          {" "}
          {t("home_copyright_label1")}
        </Typography>
        <Typography className={classes.copyright}>
          {" "}
          {t("home_copyright_label2")}<span className={classes.barText}>|</span>{t("home_copyright_label3")}
        </Typography>
      </Box>
    </Box>
  )
}

export default Copyright
