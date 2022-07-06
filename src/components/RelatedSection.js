import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import RelatedProjects from "../components/RelatedProjects"
import { PROJECTS } from "../navigation/sitemap"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"


const useStyes = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fonSstyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineWeight: "28px",
      marginTop: "55px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "23px",
    paddingTop: "78px",
    paddingBottom: "54px",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "auto",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
}))

const RelatedSection = () => {
  const classes = useStyes()
  const { t } = useTranslation()

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{t("project_RelatedSection_title")}</Typography>
      <Link
        to={`${PROJECTS}`}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        {t("common_lastestPosts_button_allBlogs")}
      </Link>
      <RelatedProjects />
    </Box>
  )
}

export default RelatedSection
