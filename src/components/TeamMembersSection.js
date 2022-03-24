import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { AnimatedTitle } from "./AnimatedTitle"
import firstImage from "../images/IMG_6895.jpg"
import secondImage from "../images/IMG_7617.jpg"
import thirdImage from "../images/IMG_7478.jpg"
import fourthImage from "../images/IMG_6931.jpg"
import fifthImage from "../images/IMG_7496.jpg"
import sixthImage from "../images/IMG_7601.jpg"

const useStyles = makeStyles({
  marginBox: {
    marginTop: 10,
    marginBottom: 10,
  },
})

const TeamMembersSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.marginBox}>
      <AnimatedTitle
        title="Meet The Team"
        content=""
        image=""
        boxClass=""
        titleClass="mainTitle"
        animation="shakeTitle"
        paragraphClass="hideParagraph"
        lineClass="boxLineCenter"
        md={12}
        alt=""
      ></AnimatedTitle>
      <AnimatedTitle
        title="Efficient"
        content="Our team members are characterized by their efficiency, they are
            focused on achieving project goals. Every day they work to finish
            task by task of every project that they are responsible for within
            the established time frame. If they need help, they ask for info,
            clarify doubts, and they go forward. At Crazy Imagine we encourage
            communication between team members and the client to make sure that
            the expectations are clear."
        boxClass="containerResponsive"
        titleClass="titleLeft"
        animation="animationLeft"
        paragraphClass="paragraphLeft"
        lineClass="boxLineLeft"
        image={firstImage}
        md={6}
        alt="An efficient team"
      ></AnimatedTitle>
      <AnimatedTitle
        title="Qualified"
        content="Our team is formed by engineers, full-stack developers, front-end
            developers, back-end developers, virtual assistants, and project
            managers. All of them with proven experience in previous jobs and
            qualities that make them great professionals."
        boxClass="containerReverse"
        titleClass="titleRight"
        animation="animationRight"
        paragraphClass="paragraphRight"
        lineClass="boxLineRight"
        image={secondImage}
        md={6}
        alt="A qualified team"
      ></AnimatedTitle>
      <AnimatedTitle
        title="Experience"
        content="We have in our team people from +1 year of experience to +5 years of
            experience in the development area, and they are accumulating more
            and more skills working in projects, learning through courses,
            practicing, and helping each other, feedback flows through the team
            members to improve and be better every day. Most experimented
            members help their less experienced teammates. This allows us to
            offer great opportunities for every client and budget."
        boxClass="containerResponsive"
        titleClass="titleLeft"
        animation="animationLeft"
        paragraphClass="paragraphLeft"
        lineClass="boxLineLeft"
        image={thirdImage}
        md={6}
        alt="An experience team"
      ></AnimatedTitle>
      <AnimatedTitle
        title="Reliable"
        content="Our team has only one purpose, fulfill clients’ needs, and they
            reach this goal under any circumstance."
        boxClass="containerReverse"
        titleClass="titleRight"
        animation="animationRight"
        paragraphClass="paragraphRight"
        lineClass="boxLineRight"
        image={fourthImage}
        md={6}
        alt="A reliable team"
      ></AnimatedTitle>
      <AnimatedTitle
        title="Friendly"
        content="We encourage a friendly environment, teaching our members the
            importance of teamwork. This is how they learn to work with others,
            find strategies to do a better job when they cooperate in teams with
            their mates. They feel comfortable meeting new people, new job
            mates, and new challenges."
        boxClass="containerResponsive"
        titleClass="titleLeft"
        animation="animationLeft"
        paragraphClass="paragraphLeft"
        lineClass="boxLineLeft"
        alt="A friendly team"
        image={fifthImage}
        md={6}
      ></AnimatedTitle>
      <AnimatedTitle
        title="Updated"
        content="We focus on the latest technologies available, JavaScript, CSS,
            HMTL, PHP, WordPress, MongoDB, Python... Our developers are
            constantly learning how to use new tools, strategies and techniques
            to perform better at their job."
        boxClass="containerReverse"
        titleClass="titleRight"
        animation="animationRight"
        paragraphClass="paragraphRight"
        lineClass="boxLineRight"
        alt="An updated team"
        image={sixthImage}
        md={6}
      ></AnimatedTitle>
    </Box>
  )
}

export default TeamMembersSection
