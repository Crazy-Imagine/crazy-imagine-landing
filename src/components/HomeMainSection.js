import React from "react"

import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CodeIcon from "@material-ui/icons/Code"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

import background from "../images/fondo.jpg"
import "../css/typography.css"
import HomeCard from "./HomeCard"

const useStyles = makeStyles({
  imageSize: {
    width: "100%",
    height: 1000,
    borderRadius: "0% 0% 70% 70% / 0% 0% 30% 30% ",
  },
  title: {
    fontSize: 44,
    fontFamily: "gotham-book",
    color: "white",
  },
  mainTitle: {
    fontSize: 75,
    fontFamily: "gotham-book",
    color: "white",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "gotham-book",
    color: "white",
  },
  cardIcon: {
    fontSize: 64,
  },
  cardCenter: {
    backgroundColor: "#23aae1",
  },
})

const HomeMainSection = ({ title, mainTitle, description }) => {
  const classes = useStyles()

  return (
    <Box>
      <CardMedia
        image={background}
        title="imageMainSection"
        className={classes.imageSize}
      >
        <Box
          height="100vh"
          width="70%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mx="auto"
          textAlign="center"
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
      </CardMedia>
      <Box display="flex" justifyContent="center" gridGap="30px">
        <HomeCard
          title="Code"
          description="Our field of appliance involves using cutting-edge technologies such as PHP7, HTML5, JavaScript, CSS3, WordPress, and Angular: amongst others."
          Icon={AccountCircleIcon}
        />
        <HomeCard
          title="User Experience"
          description="Out philosophy goes hand in hand with user interface satisfaction and exellence."
          Icon={CodeIcon}
        />
        <HomeCard
          title="Quality"
          description="We are the best so tha's why offer you 100% quality in our services"
          Icon={ArrowUpwardIcon}
        />
      </Box>
    </Box>
  )
}

export default HomeMainSection
