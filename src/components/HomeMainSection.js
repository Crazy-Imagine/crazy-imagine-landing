import React from "react"
import { BgImage } from "gbimage-bridge"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CodeIcon from "@material-ui/icons/Code"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

import HomeCard from "./HomeCard"

const useStyles = makeStyles(theme => ({
  imageSize: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: "0% 0% 70% 70% / 0% 0% 30% 30% ",
    [theme.breakpoints.down("md")]: {
      borderRadius: 0,
    },
  },
  title: {
    fontSize: 44,
    fontFamily: "gotham-book",
    color: "white",
    textTransform: "uppercase",
  },
  mainTitle: {
    fontSize: 76,
    fontFamily: "Gotham-Black",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 42,
      marginBottom: 30,
    },
  },
  subTitle: {
    fontSize: 23,
    fontFamily: "gotham-Medium",
    color: "white",
    lineHeight: "22px",
    height: 65,
    overflow: "hidden",
    maxWidth: 552,
  },
  cardIcon: {
    fontSize: 64,
  },
  cardCenter: {
    backgroundColor: "#23aae1",
  },
  cardContainer: {
    gap: 30,
    justifyContent: "center",
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
  },
}))

const HomeMainSection = ({ title, mainTitle, description, image }) => {
  const classes = useStyles()

  return (
    <Box>
      <Grid container className={classes.cardContainer}>
        <Grid item xs="auto">
          <HomeCard
            title="Code"
            description="Our background involves using cutting-edge technologies such as: PHP7, HTML5, Javascript, CSS3, Wordpress and Angular, among others."
            Icon={AccountCircleIcon}
          />
        </Grid>
        <Grid item xs="auto">
          <HomeCard
            title="User Experience"
            description="Our philosophy goes hand in hand with user interface satisfaction and excellence."
            Icon={CodeIcon}
          />
        </Grid>
        <Grid item xs="auto">
          <HomeCard
            title="Quality"
            description="We are the best so tha's why offer you 100% quality in our services"
            Icon={ArrowUpwardIcon}
          />
        </Grid>
        <Box id="about" />
      </Grid>
    </Box>
  )
}

export default HomeMainSection
