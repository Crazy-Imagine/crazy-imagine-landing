import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import HomeCard from "./HomeCard"
import TitleSection from "./TitleSection"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  container: {
    height: "837px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    [theme.breakpoints.down("md")]: {
      height: "586px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "363px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  cardContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      flexDirection: "column",
    },
  },
  button: {
    background: "#797EF6",
    borderRadius: "100px",
    marginBottom: "87px",
    marginTop: "48px",
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "61px",
      marginTop: "34px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "21px",
      marginTop: "21px",
      "& > span": {
        fontSize: "6px",
        lineHeight: "9px",
        padding: "6px 10px 6px 10px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "8px",
      marginTop: "8px",
      padding: "2px 1px 1px 1px",
      "& > span": {
        fontSize: "4px",
        lineHeight: "inherit",
      },
    },
  },
}))

const HomeMainSection = () => {
  const classes = useStyles()
  /*  const capabilitiesSection = useStaticQuery(query)
  const images =
    capabilitiesSection.allStrapiHomepage.nodes[0].CapabilitiesImages
  const mainImage = images[0].localFile.publicURL
  console.log(mainImage) */

  return (
    <Box className={classes.container}>
      <TitleSection
        desc="We will help you to strategize your web presence, designing and
          executing sitemaps and wireframes to provide a sleek, elegant, and
          seamless end-user experience"
        /* img={mainImage} */
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.cardContainer}
      >
        <Grid item xs="auto">
          <HomeCard title={`Full-stack\nDevelopment`} icon={faCode} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={`User\nExperience`} icon={faThumbsUp} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={`Quality\nSupport`} icon={faCircleCheck} />
        </Grid>
      </Grid>
      <Button className={classes.button}>GET STARTED</Button>
    </Box>
  )
}
/* const query = graphql`
  query {
    allStrapiHomepage {
      nodes {
        CapabilitiesImages {
          localFile {
            publicURL
          }
        }
      }
    }
  }
` */
export default HomeMainSection
