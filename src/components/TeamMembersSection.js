import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Box } from "@material-ui/core"
import TeamMember from "./TeamMember"
import image from "../images/backgroundfafa.jpg"

const useStyles = makeStyles(theme => ({
  memberGridContainer: {
    maxWidth: 1090,
  },
  memberGrid: {
    marginBottom: 40,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  title: {
    fontSize: 65,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    maxWidth: 523,
    lineHeight: 1,
  },
}))

const TeamMembersSection = () => {
  const classes = useStyles()
  return (
    <Box marginBottom="40px">
      <Box
        display="flex"
        textAlign="center"
        justifyContent="center"
        marginBottom="54px"
      >
        <Typography className={classes.title}>Our Team Members</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid container className={classes.memberGridContainer}>
          <Grid item xs={12} sm md className={classes.memberGrid}>
            <TeamMember
              title="Lorem ipsum Amaet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
              image={image}
            />
          </Grid>
          <Grid item xs={12} sm md className={classes.memberGrid}>
            <TeamMember
              title="Lorem ipsum Amaet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
              image={image}
            />
          </Grid>
          <Grid item xs={12} sm md className={classes.memberGrid}>
            <TeamMember
              title="Lorem ipsum Amaet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
              image={image}
            />
          </Grid>
          <Grid item xs={12} sm md className={classes.memberGrid}>
            <TeamMember
              title="Lorem ipsum Amaet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
              image={image}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TeamMembersSection
