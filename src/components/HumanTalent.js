import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

import { Box, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core"

import ourTeamImage from "../images/gatsby-icon.png"
import "../css/typography.css"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "#000a30",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  removeMargin: {
    marginTop: 0,
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#1e1e1e",
  },
  ourTeamLink: {
    color: "#23aae1",
  },
  ourTeamImage: {
    width: 562,
    height: 302,
  },
  humanTalentImage: {
    width: 562,
    height: 355,
  },
  boxLine: {
    backgroundColor: "#23aae1",
  },
  boxResponsive: {
    maxWidth: 375,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  teamImgeResponsive: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
    },
  },
  humanTalentImageResponsive: {
    [theme.breakpoints.down("md")]: {
      order: 2,
      justifyContent: "center",
    },
  },
  humanTalentContentResponsive: {
    [theme.breakpoints.down("md")]: {
      order: 1,
      maxWidth: "100%",
    },
  },
  humanTalentBox: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minWidth: "100%",
    },
  },
  humanTalentContentBox: {
    maxWidth: "400px",
    marginRight: "24px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      maxWidth: "100%",
      marginRight: 0,
    },
  },
}))

const Content = ({ title, children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.humanTalentContentBox} id="team">
      <Typography
        variant="h2"
        className={clsx(classes.title, classes.removeMargin)}
      >
        {title}
      </Typography>
      <Box className={classes.humanTalentBox}>
        <Box
          width="45px"
          height="6px"
          my="24px"
          className={classes.boxLine}
        ></Box>
      </Box>
      <Typography className={classes.content}>{children}</Typography>
    </Box>
  )
}

const HumanTalent = () => {
  const classes = useStyles()

  return (
    <Box
      marginTop="70px"
      marginBottom="88px"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Box maxWidth="1050px">
        <Grid container spacing={4}>
          <Grid container item xs={12}>
            <Grid item sm={12} md="auto">
              <Content title="Our Team">
                Wirt a wide team of full-stack, front, back end and mobile
                developers, projct managers and artitects on different levels of
                expertise, we are sure that we could offer you the people who
                will fit better to you needs
              </Content>
            </Grid>
            <Grid item xs>
              <Box
                display="flex"
                justifyContent="flex-end"
                className={classes.teamImgeResponsive}
              >
                <CardMedia
                  image={ourTeamImage}
                  title="Our Team"
                  className={classes.ourTeamImage}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs className={classes.humanTalentImageResponsive}>
              <Box className={classes.humanTalentBox}>
                <CardMedia
                  image={ourTeamImage}
                  title="Our Team"
                  className={classes.humanTalentImage}
                />
              </Box>
            </Grid>
            <Grid item className={classes.humanTalentContentResponsive}>
              <Content
                title={
                  <>
                    We are proud <br /> of the human resource talent
                  </>
                }
              >
                always looking for ways to improve and deliver gret qualy of
                work for us, terms like partnership, empowerment and teamwork,
                are core values. <br />
                <br /> If you want to know more about our team please check our
                page{" "}
                <Link to="/" className={classes.ourTeamLink}>
                  Here
                </Link>
              </Content>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default HumanTalent
