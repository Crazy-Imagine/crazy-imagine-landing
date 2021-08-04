import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { Code, Computer, RecentActors } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  memberImage: {
    borderRadius: 10,
    boxShadow: "11.143px 6.695px 35px 0px rgba(0, 0, 0, 0.54)",
    zIndex: 999,
  },
  memberName: {
    fontSize: 63,
    fontWeight: "bold",
    lineHeight: 1,
    fontFamily: "Gotham-Bold",
    [theme.breakpoints.down("md")]: {
      fontSize: 50
    }
  },
  memberLastName: {
    marginBottom: 35,
    fontSize: 63,
    color: "#23aae1",
    lineHeight: 1,
    fontFamily: "gotham-book",
    [theme.breakpoints.down("md")]: {
      fontSize: 50
    }
  },
  memberIcons: {
    color: "#23aae1",
    fontSize: 30,
  },
  memberSkills: {
    fontWeight: "bold",
    fontSize: 18,
    maxHeight: 105,
    overflowY: "clip",
    zIndex: 999,
  },
  skillsContainer: {
    maxWidth: 306,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    }
  },
  itemContainer: {
    maxWidth: "100%",
    padding: 0
  },
  memberContainerResponsive: {
    margin: 0,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}))

const MembersCard = ({ member }) => {
  const classes = useStyles()
  const image = getImage(member.avatar[0].localFile)
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="960px">
        <Grid
          container
          justifyContent="space-between"

          className={classes.memberContainerResponsive}
        >
          <Grid item xs={11} md={6}>
            <Box className={classes.memberContainerResponsive} zIndex="999">
              <GatsbyImage
                image={image}
                alt={member.name}
                className={classes.memberImage}
              />
            </Box>
          </Grid>
          <Box width={{md: "100%", lg:"408px"}} padding={{xs: "0px 50px 0px 50px"}}>
            <Grid item xs={12} md={6} className={classes.itemContainer}>
              <Typography variant="h4" className={classes.memberName}>
                {member.name}
              </Typography>
              <Typography className={classes.memberLastName}>
                {member.lastName}
              </Typography>
              <Grid container spacing={3} className={classes.skillsContainer}>
                <Grid item xs={6}>
                  <Box display="flex" flexDirection="column" zIndex="999">
                    <Computer className={classes.memberIcons} />
                    <Typography className={classes.memberSkills}>
                      {member.role}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} className={classes.itemContainer}>
                  <Box display="flex" flexDirection="column">
                    <RecentActors className={classes.memberIcons} />
                    <Typography className={classes.memberSkills}>
                      {member.positions}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" flexDirection="column">
                    <Code className={classes.memberIcons} />
                    <Typography className={classes.memberSkills}>
                      {member.techcnologies}
                    </Typography>
                  </Box>
                </Grid>
                
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default MembersCard
