import React, { useState, useEffect, useRef } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  memberGridContainer: {
    maxWidth: 1090,
  },
  mainTitle: {
    fontSize: 55,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Gotham-ultra",
    textAlign: "center",
    color: "#3399FF",
    marginBottom: 100,
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
      marginBottom: 50,
    },
  },
  title: {
    color: "#000a30",
    fontSize: 44,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  titleRight: {
    color: "#000a30",
    fontSize: 44,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  paragraph: {
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: 25,
    paddingBottom: 5,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 30,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 17,
    },
  },
  displayImage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerResponsive: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  containerReverse: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  boxLine: {
    width: "45px",
    height: "6px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  boxLineRight: {
    width: "45px",
    height: "6px",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  animationLeft: {
    animation: `$myEffectLeft 3000ms`,
  },
  animationRight: {
    animation: `$myEffectRight 3000ms`,
  },
  shakeTitle: {
    animation: `$shakeIt 3000ms`,
  },
  "@keyframes myEffectLeft": {
    "0%": {
      transform: "translateX(-200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectRight": {
    "0%": {
      transform: "translateX(200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes shakeIt": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
    "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
    "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
    "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
    "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
    "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
    "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
  },
}))

const TeamMembersSection = () => {
  const classes = useStyles()
  const teamRef = useRef()
  const teamRef2 = useRef()
  const teamRef3 = useRef()
  const teamRef4 = useRef()
  const teamRef5 = useRef()
  const teamRef6 = useRef()
  const teamRef7 = useRef()
  const [movingTitle, setMovingTitle] = useState(false)
  const [isVisibleTitle, setVisibleTitle] = useState(false)
  const [isVisibleTitle2, setVisibleTitle2] = useState(false)
  const [isVisibleTitle3, setVisibleTitle3] = useState(false)
  const [isVisibleTitle4, setVisibleTitle4] = useState(false)
  const [isVisibleTitle5, setVisibleTitle5] = useState(false)
  const [isVisibleTitle6, setVisibleTitle6] = useState(false)

  useEffect(() => {
    const teamRefCurrent = teamRef.current
    const teamRef2Current = teamRef2.current
    const teamRef3Current = teamRef3.current
    const teamRef4Current = teamRef4.current
    const teamRef5Current = teamRef5.current
    const teamRef6Current = teamRef6.current
    const teamRef7Current = teamRef7.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!movingTitle && entry.isIntersecting)
          setMovingTitle(entry.isIntersecting)
      })
    })

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle && entry.isIntersecting)
          setVisibleTitle(entry.isIntersecting)
      })
    })

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle2 && entry.isIntersecting)
          setVisibleTitle2(entry.isIntersecting)
      })
    })

    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle3 && entry.isIntersecting)
          setVisibleTitle3(entry.isIntersecting)
      })
    })

    const observer5 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle4 && entry.isIntersecting)
          setVisibleTitle4(entry.isIntersecting)
      })
    })

    const observer6 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle5 && entry.isIntersecting)
          setVisibleTitle5(entry.isIntersecting)
      })
    })

    const observer7 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle6 && entry.isIntersecting)
          setVisibleTitle6(entry.isIntersecting)
      })
    })

    observer.observe(teamRefCurrent)
    observer2.observe(teamRef2Current)
    observer3.observe(teamRef3Current)
    observer4.observe(teamRef4Current)
    observer5.observe(teamRef5Current)
    observer6.observe(teamRef6Current)
    observer7.observe(teamRef7Current)

    return () => {
      observer.unobserve(teamRefCurrent)
      observer2.unobserve(teamRef2Current)
      observer3.unobserve(teamRef3Current)
      observer4.unobserve(teamRef4Current)
      observer5.unobserve(teamRef5Current)
      observer6.unobserve(teamRef6Current)
      observer7.unobserve(teamRef7Current)
    } // clean up
  }, [
    movingTitle,
    isVisibleTitle,
    isVisibleTitle2,
    isVisibleTitle3,
    isVisibleTitle4,
    isVisibleTitle5,
    isVisibleTitle6,
  ])

  return (
    <Box marginTop={10} marginBottom={10}>
      <Typography
        variant="h5"
        className={`${classes.mainTitle}  ${
          movingTitle ? classes.shakeTitle : ""
        }`}
        ref={teamRef}
      >
        Meet The Team
        <Box
          width="45px"
          height="6px"
          marginLeft="auto"
          marginRight="auto"
          style={{ backgroundColor: "#3399FF" }}
        ></Box>
      </Typography>
      <Grid container className={classes.containerResponsive}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef2}
            className={`${isVisibleTitle ? classes.animationLeft : ""}`}
          >
            <Typography className={classes.title}>Efficient</Typography>
            <Box
              className={classes.boxLine}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginRight: "35px" }}
          >
            Our team members are characterized by their efficiency, they are
            focused on achieving project goals. Every day they work to finish
            task by task of every project that they are responsible for within
            the established time frame. If they need help, they ask for info,
            clarify doubts, and they go forward. At Crazy Imagine we encourage
            communication between team members and the client to make sure that
            the expectations are clear.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-start">
            <StaticImage src="../images/IMG_6895.jpg" alt="team" />
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.containerReverse}>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-end">
            <StaticImage src="../images/IMG_7617.jpg" alt="team" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef3}
            className={`${isVisibleTitle2 ? classes.animationRight : ""}`}
          >
            <Typography className={classes.titleRight}>Qualified</Typography>
            <Box
              className={classes.boxLineRight}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginLeft: "35px" }}
          >
            Our team is formed by engineers, full-stack developers, front-end
            developers, back-end developers, virtual assistants, and project
            managers. All of them with proven experience in previous jobs and
            qualities that make them great professionals.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.containerResponsive}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef4}
            className={`${isVisibleTitle3 ? classes.animationLeft : ""}`}
          >
            <Typography className={classes.title}>Experience</Typography>
            <Box
              className={classes.boxLine}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginRight: "30px" }}
          >
            We have in our team people from +1 year of experience to +5 years of
            experience in the development area, and they are accumulating more
            and more skills working in projects, learning through courses,
            practicing, and helping each other, feedback flows through the team
            members to improve and be better every day. Most experimented
            members help their less experienced teammates. This allows us to
            offer great opportunities for every client and budget.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-start">
            <StaticImage src="../images/IMG_6931.jpg" alt="team" />
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.containerReverse}>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-end">
            <StaticImage src="../images/IMG_7478.jpg" alt="team" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef5}
            className={`${isVisibleTitle4 ? classes.animationRight : ""}`}
          >
            <Typography className={classes.titleRight}>Reliable</Typography>
            <Box
              className={classes.boxLineRight}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginLeft: "30px" }}
          >
            Our team has only one purpose, fulfill clients’ needs, and they
            reach this goal under any circumstance.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.containerResponsive}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef6}
            className={`${isVisibleTitle5 ? classes.animationLeft : ""}`}
          >
            <Typography className={classes.title}>Friendly</Typography>
            <Box
              className={classes.boxLine}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginRight: "30px" }}
          >
            We encourage a friendly environment, teaching our members the
            importance of teamwork. This is how they learn to work with others,
            find strategies to do a better job when they cooperate in teams with
            their mates. They feel comfortable meeting new people, new job
            mates, and new challenges.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-start">
            <StaticImage src="../images/IMG_7496.jpg" alt="team" />
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.containerReverse}>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.displayImage} justifyContent="flex-end">
            <StaticImage src="../images/IMG_7601.jpg" alt="team" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            ref={teamRef7}
            className={`${isVisibleTitle6 ? classes.animationRight : ""}`}
          >
            <Typography className={classes.titleRight}>Updated</Typography>
            <Box
              className={classes.boxLineRight}
              style={{ backgroundColor: "#000a30" }}
            ></Box>
          </Box>
          <Typography
            className={classes.paragraph}
            style={{ marginLeft: "30px" }}
          >
            We focus on the latest technologies available, JavaScript, CSS,
            HMTL, PHP, WordPress, MongoDB, Python... Our developers are
            constantly learning how to use new tools, strategies and techniques
            to perform better at their job.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TeamMembersSection
