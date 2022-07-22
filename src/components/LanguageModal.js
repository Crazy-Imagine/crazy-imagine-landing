import React, { useEffect } from 'react';
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { makeStyles, Box, FormControl, Select, MenuItem, withTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button2: {
    background: "transparent",
    borderRadius: "100%",
    padding: "0px",
    margin: "0 -9px",
    cursor: "pointer",
    "&:hover": {
      //backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      letterSpacing: "0.02em",
      borderRadius: "100%",
      padding: "0",
      fontSize: "30px",
      alignItems: "center",
      textAlign: "center",
      color: "#FFFFFF",
    },
    [theme.breakpoints.between(1280, 1470)]: {
      "& > span": {
        fontSize: "25px",
      },
    },
    [theme.breakpoints.between(0, 1280)]: {
      margin: "-5px",
    },
  },
  formControl: {
    width: "auto",
    zIndex: 99,
    color: "white",
    "&::before": {
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
    "&::after": {
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
    "&::hover": {
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
  },
  selectEmpty: {
    marginTop: "5px",
    width: "auto",
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    "& MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "& ::MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "&::before, &::after": {
      //display: "none",
      content: "''",
      position: "absolute",
      transition: "transform .5s ease",
      borderBottom: "1px solid white !important",
      color: "white !important",
    },
    "&::hover": {
      display: "none",
      color: "white !important",
      borderBottom: "1px solid white !important",
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        color: "white",
        borderBottom: "1px solid white !important",
      },
    },
    "& .MuiInputBase-input": {
      color: "white !important",
      animationName: "none",
      content: "''",
    },
    "& .MuiInput-underline:before": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "0",
      width: "auto",
      padding: "0 0 0"
    },
    "& svg": {
      display: "none",
    },
  },
  item: {
    color: "#193174",
  },
  effect: {
    "&::before": {
      left: "0",
      width: "100%",
      bottom: "-2px",
      height: "3px",
      background: "white",
      color: "white !important",
      transform: "scaleX(0)",
      borderBottom: "1px solid white !important",
    },
    "&:hover::before": {
      color: "white",
      background: "white",
      transform: "scaleX(1)",
    },
  },
}))

const Language = () => {
  const classes = useStyles()
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation()
  const languageWindow = window.navigator.language.includes("es")
  useEffect(() => {
    if (!sessionStorage.getItem("language")) {
      sessionStorage.setItem("language", "true")
      languageWindow ?
        changeLanguage("es") :
        changeLanguage("en")
    }
  }, [])

  const handleChange = (event) => {
    if (event.target.value === "ES") { changeLanguage("es"); }
    if (event.target.value === "EN") { changeLanguage("en"); }
  };

  return (
    <>
      <Box>
        <FormControl className={classes.formControl}>
          <Select
            value={t("languageModal_select")}
            onChange={handleChange}
            className={`${classes.selectEmpty} ${classes.effect}`}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={t("languageModal_select")} style={{ zIndex: 999, }} className={classes.item}>
              {t("languageModal_select")}
            </MenuItem>
            {(t("languageModal_select") === "ES") ?
              <MenuItem value="EN" style={{ zIndex: 999, }} className={classes.item}>EN</MenuItem>
              :
              <MenuItem value="ES" style={{ zIndex: 999, }} className={classes.item}>ES</MenuItem>
            }
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default Language;