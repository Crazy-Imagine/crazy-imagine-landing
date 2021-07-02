import React from "react"
import { graphql } from "gatsby"
import { Box, Hidden } from "@material-ui/core"
import MembersCard from "../components/MembersCard"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import MembersDescription from "../components/MembersDescription"
import MembersMoreDetails from "../components/MembersMoreDetails"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import NavbarMobile from "../components/NavbarMobile"

const Members = ({ data }) => {
  const member = data.member
  return (
    <PageWrapper>
      <Hidden mdDown>
        <Navbar variant="dark" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile />
      </Hidden>
      <Box paddingTop="150px">
        <MembersCard member={member} />
        <MembersDescription member={member} />

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
