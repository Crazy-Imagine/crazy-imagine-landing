import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import SubTitleSection from "./SubTitleSection"
import aboutImage from "../images/sateliteBackground.svg"
import aboutImage1 from "../images/antenaBackground.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mmarginTop: "46px",
    marginBottom: "66px",
    background: "#FFF",
    [theme.breakpoints.down("md")]: {
      marginTop: "32px",
      marginBottom: "46px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginBottom: "28px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginBottom: "14px",
    },
  },
}))
const AboutSection = ({ bgColor, bgImage }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <SubTitleSection
          title={`Working together…`}
          reverse={true}
          desc="At CrazyImagine, our biggest strength is the quality of our team. We have a dynamic and diverse mix of full-stack, front-end, back-end, and mobile developers, 
                as well as industry-leading project managers who are passionate about combining technology with creativity to develop web solutions to help your business thrive."
          img={aboutImage}
        />
        <SubTitleSection
          title="…to create more."
          desc="Collaboration with our internal team as well as with our clients sets our work apart from the pack. 
                Our commitment to communication as well as accountability drives us towards innovation and unrivaled quality."
          img={aboutImage1}
        />
      </Box>
    </>
  )
}

export default AboutSection
