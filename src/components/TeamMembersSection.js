import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import clsx from "clsx"
import TeamMember from "./TeamMember"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  memberGridContainer: {
    maxWidth: 1090,
  },
  memberGrid: props => ({
    backgroundColor: props.bgColor,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  }),
  ourTeamTitle: {
    fontSize: 65,
    fontFamily: "Gotham",
    textTransform: "uppercase",
    maxWidth: 523,
    lineHeight: 1,
  },
  memberContainer: props => ({
    backgroundColor: props.bgColor,
  }),
}))

const TeamMembersSection = ({
  maxNumberOfItems,
  title = "Our Team Members",
  titleClassName,
  bgColor = "white",
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        members: allStrapiMembers {
          edges {
            node {
              id
              name
              lastName
              cardDescription
              slug
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
  const classes = useStyles({ bgColor })
  const members = data.members.edges
  return (
    <Box
      paddingBottom="40px"
      className={classes.memberContainer}
      paddingTop="90px"
    >
      <Box
        display="flex"
        textAlign="center"
        justifyContent="center"
        marginBottom="54px"
      >
        <Typography className={clsx(classes.ourTeamTitle, titleClassName)}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid
          container
          spacing={3}
          className={classes.memberGridContainer}
          justify="center"
        >
          {members.slice(0, maxNumberOfItems || members.length).map((el, i) => (
            <Grid
              item
              xs={12}
              sm="auto"
              md="auto"
              className={classes.memberGrid}
              key={el.node.id}
            >
              <TeamMember
                name={el.node.name}
                lastName={el.node.lastName}
                slug={el.node.slug}
                description={el.node.cardDescription}
                image={el.node.avatar[0].localFile}
                backgroundItem={bgColor}
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
