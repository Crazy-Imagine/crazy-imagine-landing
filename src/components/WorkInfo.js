import * as React from "react"
import { Box } from "@material-ui/core"
import { AnimatedTitle } from "./AnimatedTitle"
import image from "../images/IMG_6778.jpg"
import secondImage from "../images/IMG_7492.jpg"

const WorkInfo = () => {
  return (
    <Box paddingTop="35px">
      <AnimatedTitle
        title="YOUR DREAM JOB, HERE!"
        content="We are a fresh and comfortable startup with more than 5 years on
                the market. We work with the most recent development
                technologies, offering the best of our efforts to bring to the
                client the best quality products. Covering most of the
                development areas. Our products and services have highlights on
                turnaround time, design, mobile responsive, web, and app
                development."
        orientation="left"
        image={image}
        alt="Team mates"
      ></AnimatedTitle>
      <AnimatedTitle
        title="KNOW OUR VALUES"
        content="We mainly focuse on responsability, efficiency, respect, kindness, we care about your physical and mental health.
          We take care of our employees, promoting a relaxed and fun work environment, choosing social activities to integrate all of them.
          We evaluate you, and we choose you a challenge that you can reach results and improve your skills.
          Our principal challenge is that you grow with us"
        orientation="right"
        image={secondImage}
        alt="Boss with the team"
      ></AnimatedTitle>
    </Box>
  )
}

export default WorkInfo
