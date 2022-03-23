import * as React from "react"
import { useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
  },
  cardAnimation: {
    animation: `$animateCards 4s ease 1s 1 alternate backwards`,
  },
  title: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  shakeTitle: {
    animation: `$shakeIt 2.5s ease 0.5s;`,
  },
  containerResponsive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "80px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gridGap: "20px",
    },
  },
  titleCard: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Lato",
    color: "#000A30",
    lineHeight: 1.3,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 17,
    },
  },
  bodyCard: {
    fontFamily: "Roboto",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
      marginBottom: 25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 17,
    },
  },
  selecTitle: {
    color: "#000a30",
    fontSize: 40,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 50,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  boxCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "15px",
  },
  boxLineCenter: {
    width: "45px",
    height: "6px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#000a30",
  },
  pos: {
    marginBottom: 12,
  },
  centerStyle: {
    fontFamily: "Hind",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      infoRefAlign: "center",
    },
  },
  bgBox: {
    backgroundColor: "#000a30",
  },
  marginBox: {
    marginBottom: "50px",
  },
  center: {
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: 25,
    },
  },
  "@keyframes animateCards": {
    "0%": {
      transform: "translate(0)",
    },

    "20%": {
      transform: "translate(-2px, 2px)",
    },

    "40%": {
      transform: "translate(-2px, -2px)",
    },

    "60%": {
      transform: "translate(2px, 2px)",
    },

    "80%": {
      transform: "translate(2px, -2px)",
    },

    "100%": {
      transform: "translate(0)",
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

const WorkSelection = () => {
  const classes = useStyles()
  const titleref = useRef()
  const contentref = useRef()

  const isVisible = useIntersection(titleref, "10px")
  const isShaking = useIntersection(contentref, "0px")

  return (
    <Box>
      <Box
        ref={titleref}
        className={`${classes.marginBox} ${
          isVisible ? classes.shakeTitle : ""
        }`}
      >
        <Typography className={classes.selecTitle}>
          Selection process
        </Typography>
        <Box className={classes.boxLineCenter}></Box>
      </Box>
      <Box
        ref={contentref}
        className={`${classes.boxCard} ${
          isShaking ? classes.cardAnimation : ""
        }`}
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Step 1</Typography>
            <Typography
              variant="h5"
              component="h2"
              className={classes.titleCard}
            >
              Curriculum Review
            </Typography>
            <Typography className={classes.pos}>keywords</Typography>
            <Typography
              className={classes.bodyCard}
              variant="body2"
              component="p"
            >
              This step consists in analyzing and evaluating your skills and
              experience and the principal aspects that are going to mark your
              performance. We'll check all of your data to have a preview idea
              about you.
            </Typography>
          </CardContent>
        </Card>
        <Box className={classes.containerResponsive}>
          <Card
            className={`${classes.root}  ${
              isVisible ? classes.cardAnimation : ""
            }`}
            ref={contentref}
          >
            <CardContent>
              <Typography className={classes.title}>Step 2</Typography>
              <Typography
                variant="h5"
                component="h2"
                className={classes.titleCard}
              >
                Interview
              </Typography>
              <Typography className={classes.pos}>dialogue</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.bodyCard}
              >
                We'll schedule an interview to meet you, talk, ask things about
                your experience and preview jobs, studies. Additionally if you
                speak english we'll talk a little with you to know how high is
                your english level.
              </Typography>
            </CardContent>
          </Card>
          <Box className={classes.center}>
            <Typography className={classes.centerStyle}>
              The interview process is standard across the industry, but it’s
              always nice to understand what you are going to face.
            </Typography>
          </Box>
          <Card
            className={`${classes.root}  ${
              isVisible ? classes.cardAnimation : ""
            }`}
            ref={contentref}
          >
            <CardContent>
              <Typography className={classes.title}>Step 3</Typography>
              <Typography
                variant="h5"
                component="h2"
                className={classes.titleCard}
              >
                Test
              </Typography>
              <Typography className={classes.pos}>capacities</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.bodyCard}
              >
                Depending on your skills and the client's requirement you will
                be tested with short problems that will be developed to
                demonstrate your skills, the client will be able to see in real
                time your performance and your results before making the final
                decision.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Card
          className={`${classes.root}  ${
            isVisible ? classes.cardAnimation : ""
          }`}
          ref={contentref}
        >
          <CardContent>
            <Typography className={classes.title}>Step 4</Typography>
            <Typography
              variant="h5"
              component="h2"
              className={classes.titleCard}
            >
              Client Assignment
            </Typography>
            <Typography className={classes.pos}>work</Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.bodyCard}
            >
              We put your profile with your skills in our agency to find a
              client who can take advantage of your skills, efficient and on
              time. You'll meet with him and he'll start explain their
              requirements and the way that he want to solve it. If you fill his
              expectatives an you understand each other you will be assigned to
              their project.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default WorkSelection