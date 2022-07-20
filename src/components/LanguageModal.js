import React from 'react';
//import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { makeStyles, Box, FormControl, Select, MenuItem } from "@material-ui/core"
import { useTranslation } from "gatsby-plugin-react-i18next"

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
    minWidth: 120,
    zIndex: 99,
    color: "white",
    "&::before": {
      display: "none",
      borderBottom: "none",
      border: "none",
    },
    "&::after": {
      display: "none",
      borderBottom: "none",
      border: "none",
    },
    "&::hover": {
      display: "none",
      borderBottom: "none",
      border: "none",
    },
  },
  selectEmpty: {
    marginTop: "5px",
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    "&::before": {
      display: "none",
      borderBottom: "none",
      border: "none",
    },
    "&::after": {
      display: "none",
      borderBottom: "none",
      border: "none",
    },
    "&::hover": {
      display: "none",
      borderBottom: "none",
      border: "none",
      background: "transparent",
      backgroundColor: "transparent",
    },
    "& svg": {
      display: "none",
    },
  },
  item: {
    color: "#193174",
  },
}))

const Language = () => {
  const classes = useStyles()
  const { languages, changeLanguage } = useI18next();
  const [age, setAge] = React.useState('');
  const { t } = useTranslation()
  const handleChange = (event) => {
    setAge(event.target.value);
    if (event.target.value === "ES") { changeLanguage("es"); }
    if (event.target.value === "EN") { changeLanguage("en"); }
  };

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <Select
          value={t("languageModal_select")}
          onChange={handleChange}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={t("languageModal_select")} style={{ zIndex: 999, }} className={classes.item}>
            {t("languageModal_select")}
          </MenuItem>
          <MenuItem value="EN" style={{ zIndex: 999, }} className={classes.item}>EN</MenuItem>
          <MenuItem value="ES" style={{ zIndex: 999, }} className={classes.item}>ES</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Language;