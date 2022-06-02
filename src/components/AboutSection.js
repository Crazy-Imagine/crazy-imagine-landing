import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import SubTitleSection from "./SubTitleSection"
import AboutTitle from "./AboutTitle"
import aboutImage from "../images/sateliteBackground.svg"
import aboutImage1 from "../images/antenaBackground.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1137px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}))

const AboutSection = ({ bgColor, bgImage, setY }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <AboutTitle
          title={`Working together…`}
          desc="At CrazyImagine, our biggest strength is the quality of our team. We have a dynamic and diverse mix of full-stack, front-end, back-end, and mobile developers, 
                as well as industry-leading project managers who are passionate about combining technology with creativity to develop web solutions to help your business thrive."
          img={aboutImage}
        />
        <SubTitleSection
          title="…to create more."
          desc="Collaboration with our internal team as well as with our clients sets our work apart from the pack. 
                Our commitment to communication as well as accountability drives us towards innovation and unrivaled quality."
          img={aboutImage1}
          setY={setY}
        />
      </Box>
    </>
  )
}

export default AboutSection
