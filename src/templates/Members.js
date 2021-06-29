import React from "react"
import { graphql } from "gatsby"
import { Box } from "@material-ui/core"
import MembersCard from "../components/MembersCard"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import MembersDescription from "../components/MembersDescription"
import MembersTechnologies from "../components/MembersTechnologies"
import MembersMoreDetails from "../components/MembersMoreDetails"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

const Members = ({ data }) => {
  const member = data.member
  return (
    <PageWrapper>
      <Navbar />
      <Box paddingTop="150px">
        <MembersCard member={member} />
        <MembersDescription />
        <MembersTechnologies />
        <MembersMoreDetails />
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
