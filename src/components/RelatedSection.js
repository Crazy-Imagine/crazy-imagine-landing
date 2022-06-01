import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Link from "@material-ui/core/Link"
import RelatedProjects from "../components/RelatedProjects"

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
    alignItems: "center",
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

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Related Projects</Typography>
      <Link className={classes.link} style={{ textDecoration: "none" }}>
        ALL BLOGS →
      </Link>
      <RelatedProjects />
    </Box>
  )
}

export default RelatedSection
