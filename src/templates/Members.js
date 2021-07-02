import React from "react"
import { graphql } from "gatsby"
import { Box, makeStyles } from "@material-ui/core"
import MembersCard from "../components/MembersCard"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import MembersDescription from "../components/MembersDescription"
import MembersMoreDetails from "../components/MembersMoreDetails"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import TeamMembersSection from "../components/TeamMembersSection"

const useStyles = makeStyles({
  teamSectionTitle: {
    maxWidth: "100%",
  },
})

const Members = ({ data }) => {
  const classes = useStyles()
  const member = data.member
  return (
    <PageWrapper>
      <Navbar />
      <Box paddingTop="150px">
        <MembersCard member={member} />
        <MembersDescription member={member} />

        <MembersMoreDetails />
        <TeamMembersSection
          maxNumberOfItems={4}
          title="team members"
          titleClassName={classes.teamSectionTitle}
          bgColor="rgb(236, 236, 236)"
        />
        <Footer />
        <Copyright />
      </Box>
    </PageWrapper>
  )
}
export const query = graphql`
  query Member($id: String!) {
    member: strapiMembers(id: { eq: $id }) {
      id
      name
      description
      positions
      role
      techcnologies
      email
      lastName
      portfolio: Portfolio
      skill {
        name
        percentage
      }

      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 480
              height: 572
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

export default Members
