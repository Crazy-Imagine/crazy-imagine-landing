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
    fontSize: 16,
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
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
  },
}))

const HomeMainSection = ({ title, mainTitle, description, image }) => {
  const classes = useStyles()

  return (
    <Box>

      <BgImage
        image={image}
        alt="mainSectionImage"
        className={classes.imageSize}
      >
        <Box
          height="100%"
          width="70%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mx="auto"
          textAlign="center"
          className={classes.boxContainer}
        >
          <Typography variant="h2" color="secondary" className={classes.title}>
            {title}
          </Typography>

          <Typography
            variant="h1"
            color="secondary"
            className={classes.mainTitle}
          >
            {mainTitle}
          </Typography>

          <Typography
            variant="h6"
            color="secondary"
            className={classes.subTitle}
          >
            {description}
          </Typography>
        </Box>
      </BgImage>

      <Grid container className={classes.cardContainer}>
        <Grid item xs="auto">
          <HomeCard
            title="Code"
            description="bof appliance involves using cutting-edge technologies such as PHP7, HTML5, JavaScript, CSS3, WordPress, and Angular: amongst others."
            Icon={AccountCircleIcon}
          />
        </Grid>
        <Grid item xs="auto">
          <HomeCard
            title="User Experience"
            description="Out philosophy goes hand in hand with user interface satisfaction and exellence."
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
