import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import HomeCard from "./HomeCard"
import TitleSection from "./TitleSection"

const useStyles = makeStyles(theme => ({
  container: {
    height: "837px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#E5E5E5",
  },
  button: {
    background: "#797EF6",
    borderRadius: "100px",
    marginBottom: "87px",
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
  },
  cardContainer: {
    marginTop: "auto",
    marginBottom: "48px",
  },
}))

const HomeMainSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <TitleSection
        style={{ marginTop: "144px" }}
        title="Why Should You Choose Us"
        desc="We will help you to strategize your web presence, designing and
          executing sitemaps and wireframes to provide a sleek, elegant, and
          seamless end-user experience"
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.cardContainer}
      >
        <Grid item xs="auto">
          <HomeCard title="Full-stack Development" icon={faCode} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title="User Experience" icon={faThumbsUp} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title="Quality Support" icon={faCircleCheck} />
        </Grid>
      </Grid>
      <Button className={classes.button}>GET STARTED</Button>
    </Box>
  )
}

export default HomeMainSection
