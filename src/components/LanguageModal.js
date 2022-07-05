import React from 'react';
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import { Hidden, Box, Button, Grid, Typography } from "@material-ui/core"

const Language = () => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  return (


    <div>
      <Box>
        <Box>
          <Button onClick={(e) => {
            e.preventDefault();
            changeLanguage("es");
          }}>ES</Button>
          <Button onClick={(e) => {
            e.preventDefault();
            changeLanguage("en");
          }}>EN</Button>
        </Box>
      </Box>
    </div>



  );
}

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
