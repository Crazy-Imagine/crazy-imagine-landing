import React from 'react';
//import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { makeStyles, Box, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button2: {
    background: "transparent",
    //background: "#797EF6",
    //borderRadius: "20px",
    //marginBottom: "37px",
    //marginTop: "28px",
    spacer: "25px",
    margin: "5px 15px 5px 15px",
    "&:hover": {
      //backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "130%",
      letterSpacing: "0.02em",
      //fontFamily: "Nexa Bold",
      //fontStyle: "normal",
      //fontWeight: "400",
      fontSize: "14px",
      //padding: "14px 20px 12px 20px",
      //lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      //letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("xs")]: {
      //borderRadius: "50px",
      //marginBottom: "17px",
      //marginTop: "18px",
      spacer: "5px",
      margin: "0px 5px 0px 5px",
      "& > span": {
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "50",
        fontSize: "8px",
        padding: "4px 5px 4px 5px",
        lineHeight: "10px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.05em",
        color: "#FFFFFF",
      },
    },
  },
}))

const Language = () => {
  const classes = useStyles()
  //const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  // const handleClick = (lang) => {
  //   localStorage.setItem('lang', lang)
  //   //setAgreed(true)
  // }


  return (


    <div>
      <Box>
        <Box style={{ flexDirection: "row" }}>
          <Button
            className={classes.button2}
            onClick={(e) => {
              e.preventDefault();
              changeLanguage("es");
            }}>ES</Button>
          <Button
            className={classes.button2}
            onClick={(e) => {
              e.preventDefault();
              changeLanguage("en");
            }}>EN</Button>
        </Box>
      </Box>
    </div>



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
