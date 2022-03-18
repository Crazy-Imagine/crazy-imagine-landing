import React from "react"
import ceo from "../images/IMG_6762.jpg"
import team from "../images/IMG_6935.jpg"
import { Box, Typography, makeStyles } from "@material-ui/core"
import background from "../images/MainTeam.jpg"

const useStyles = makeStyles(theme => ({
  containerResponsive: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px 200px",
    backgroundColor: "#043565",
    backgroundImage: `url(${background})`,
    objectFit: "cover",
    objectPosition: "50% 50%",
    paddingTop: "65px",
    height: "1000px",
    [theme.breakpoints.between("450", "900")]: {
      height: "850px",
    },
    [theme.breakpoints.between("0", "450")]: {
      height: "700px",
    },
  },
  bgImage: {
    width: "100%",
    height: 800,
  },
  bgBox: {
    backgroundColor: "black",
  },
  ceoPic: {
    width: "240px",
    height: "240px",
    objectFit: "contain",
    [theme.breakpoints.between("450", "900")]: {
      width: "180px",
      height: "180px",
    },
    [theme.breakpoints.between("0", "450")]: {
      width: "120px",
      height: "120px",
    },
  },
  teamPic: {
    width: "720px",
    height: "240px",
    objectFit: "contain",
    [theme.breakpoints.between("450", "900")]: {
      width: "400px",
      height: "180px",
    },
    [theme.breakpoints.between("200", "450")]: {
      width: "300px",
      height: "120px",
    },
  },
  title: {
    color: "white",
    fontSize: 49,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    lineHeight: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
  },
  titleSpan: {
    color: "#23aae1",
    fontSize: 65,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    lineHeight: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
  },
  ceoContainer: {
    objectFit: "contain",
  },
  teamContainer: {
    objectFit: "contain",
  },
  author: {
    color: "white",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
  },
  authorIcon: {
    fontSize: "2rem",
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      padding: 5,
      justifyContent: "center",
    },
  },
}))

const HeroSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.containerResponsive}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.ceoContainer}>
          <img className={classes.ceoPic} src={ceo} alt="The boss" />
        </Box>
        <Typography
          style={{
            textAlign: "center",
            color: "#FBF5F3",
            paddingTop: "25px",
            paddingBottom: "35px",
            fontFamily: "Gotham-ultra",
            fontSize: 25,
          }}
        >
          CEO<br></br>Blas Hernández
        </Typography>
      </Box>
      <Box className={classes.teamContainer}>
        <img className={classes.teamPic} src={team} alt="The team" />
      </Box>
      <Typography
        style={{ color: "#FBF5F3", fontFamily: "Gotham-ultra", fontSize: 25 }}
      >
        Our Crazy Team
      </Typography>
    </Box>
  )
}

export default HeroSection
