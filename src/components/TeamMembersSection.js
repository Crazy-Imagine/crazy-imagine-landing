import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import TeamMember from "./TeamMember"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  memberGridContainer: {
    maxWidth: 1090,
  },
  memberGrid: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  ourTeamTitle: {
    fontSize: 65,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    maxWidth: 523,
    lineHeight: 1,
  },
}))

const TeamMembersSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        members: allStrapiMembers {
          edges {
            node {
              id
              name
              cardDescription
              avatar {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const classes = useStyles()
  const members = data.members.edges
  return (
    <Box marginBottom="40px">
      <Box
        display="flex"
        textAlign="center"
        justifyContent="center"
        marginBottom="54px"
      >
        <Typography className={classes.ourTeamTitle}>
          Our Team Members
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid
          container
          spacing={3}
          className={classes.memberGridContainer}
          justify="center"
        >
          {members.map((el, i) => (
            <Grid
              item
              xs={12}
              sm="auto"
              md="auto"
              className={classes.memberGrid}
              key={el.node.id}
            >
              <TeamMember
                title={el.node.name}
                description={el.node.cardDescription}
                image={el.node.avatar[0].localFile}
              />
            </Grid>
          ))}
          <Grid item>
            <Box width={230} />
          </Grid>
          <Grid item>
            <Box width={230} />
          </Grid>
          <Grid item>
            <Box width={230} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TeamMembersSection
