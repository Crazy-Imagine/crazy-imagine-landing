import React from "react"
import { graphql } from "gatsby"
import { Box, Hidden, makeStyles } from "@material-ui/core"
import MembersCard from "../components/MembersCard"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import MembersDescription from "../components/MembersDescription"
import MembersMoreDetails from "../components/MembersMoreDetails"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import NavbarMobile from "../components/NavbarMobile"
import TeamMembersSection from "../components/TeamMembersSection"
import Layout from "../components/layout"

const useStyles = makeStyles({
  teamSectionTitle: {
    maxWidth: "100%",
  },
})

const Members = ({ data }) => {
  const classes = useStyles()
  const member = data.member
  return (
    <Layout seo={member.seo} >
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="dark" variantIcons="dark" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
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
    </Layout>
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
      slug
      seo {
        id
        metaDescription
        metaTitle
        shareImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
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
