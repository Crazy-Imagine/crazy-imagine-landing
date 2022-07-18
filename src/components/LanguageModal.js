import React from 'react';
//import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { makeStyles, Box, Button } from "@material-ui/core"

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
}))

const Language = () => {
  const classes = useStyles()
  const { languages, changeLanguage } = useI18next();

  return (
    <Box>
      <Box style={{ flexDirection: "row", diplay: "flex" }}>
        <Button
          className={classes.button2}
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("es");
          }}>🇪🇸</Button>
        <Button
          className={classes.button2}
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("en");
          }}>🇺🇸</Button>
      </Box>
    </Box>
  );
}

export default Language;