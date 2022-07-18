import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import SubTitleSection from "./SubTitleSection"
import AboutTitle from "./AboutTitle"
import aboutImage from "../images/sateliteBackground.svg"
import aboutImage1 from "../images/antenaBackground.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1137px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
}))

const AboutSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <>
      <Box className={classes.container}>
        <AboutTitle
          title={t("about_aboutSection_title1")}
          desc={t("about_aboutSection_description1")}
          img={aboutImage}
        />
        <SubTitleSection
          title={t("about_aboutSection_title2")}
          desc={t("about_aboutSection_description2")}
          img={aboutImage1}
        />
      </Box>
    </>
  )
}

export default AboutSection
