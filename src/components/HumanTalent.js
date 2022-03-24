import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx"

import { Box, Grid, makeStyles, Typography } from "@material-ui/core"

import { TEAMS } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "#000a30",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  removeMargin: {
    marginTop: 0,
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#1e1e1e",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  ourTeamLink: {
    color: "#23aae1",
  },
  ourTeamImage: {
    width: 562,
    height: 302,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  humanTalentImage: {
    width: 562,
    height: 355,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
    <Box className={classes.humanTalentContentBox}>
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
    <StaticQuery
      query={query}
      render={data => {
        const dataImageOne = data.homePage.teamImages[1].localFile
        const dataImageTwo = data.homePage.teamImages[0].localFile
        return (
          <Box
            marginBottom="88px"
            width="100%"
            display="flex"
            justifyContent="center"
            id="stats"
          >
            <Box maxWidth="1050px">
              <Grid container spacing={4}>
                <Grid container item xs={12}>
                  <Grid item sm={12} md="auto">
                    <Content title="Our Team">
                      With a wide team of full-stack, front, back end and mobile
                      developers, project managers and architects on different
                      levels of expertise, we are sure that we could offer you
                      the people who will fit better to you needs.
                    </Content>
                  </Grid>
                  <Grid item xs>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className={classes.teamImgeResponsive}
                    >
                      <GatsbyImage
                        image={getImage(dataImageTwo)}
                        alt="Our Team"
                        className={classes.ourTeamImage}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs className={classes.humanTalentImageResponsive}>
                    <Box className={classes.humanTalentBox}>
                      <GatsbyImage
                        image={getImage(dataImageOne)}
                        alt="Our Team"
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
                      Always looking for ways to improve and deliver great qualy
                      of work, for us, terms like partnership, empowerment and
                      teamwork, are core values. <br />
                      <br /> If you want to know more about our team please
                      check our page{" "}
                      <Link to={TEAMS} className={classes.ourTeamLink}>
                        Here
                      </Link>
                    </Content>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    homePage: strapiHomepage {
      teamImages {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
export default HumanTalent
