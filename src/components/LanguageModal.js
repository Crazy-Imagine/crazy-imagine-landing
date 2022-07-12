import React from 'react';
//import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { makeStyles, Box, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button2: {
    background: "transparent",
    //background: "#797EF6",
    borderRadius: "100%",
    //width: "50%",
    padding: "0px",
    margin: "0 -9px",
    //marginBottom: "-10px",
    cursor: "pointer",
    //width: "60px",
    //display: "flex",
    //marginBottom: "37px",
    //marginTop: "28px",
    //spacer: "25px",
    //margin: "5px 15px 5px 15px",
    "&:hover": {
      //backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      //fontWeight: "400",
      //fontSize: "16px",
      //lineHeight: "130%",
      letterSpacing: "0.02em",
      borderRadius: "100%",
      padding: "0",
      //fontFamily: "Nexa Bold",
      //fontStyle: "normal",
      //fontWeight: "400",
      fontSize: "30px",
      //padding: "14px 20px 12px 20px",
      //lineHeight: "14px",
      //display: "flex",
      alignItems: "center",
      textAlign: "center",
      //letterSpacing: "0.05em",
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
  //const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  // const { t } = useI18next();
  // const handleClick = (lang) => {
  //   localStorage.setItem('lang', lang)
  //   //setAgreed(true)
  // }


  return (


    // <div>
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
    // </div>



  );
}
// (e) => {
//   e.preventDefault();
//   localStorage.setItem('lang', 'es')
//   changeLanguage("es");

// }
// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: {language: {eq: $language}}) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
export default Language;
