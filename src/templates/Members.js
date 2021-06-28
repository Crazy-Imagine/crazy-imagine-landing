import React from "react"
import { Box } from "@material-ui/core"
import MembersCard from "../components/MembersCard"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import MembersDescription from "../components/MembersDescription"
import MembersTechnologies from "../components/MembersTechnologies"
import MembersMoreDetails from "../components/MembersMoreDetails"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

const Members = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Box paddingTop="100px">
        <MembersCard />
        <MembersDescription />
        <MembersTechnologies />
        <MembersMoreDetails />
        <Footer />
        <Copyright />
      </Box>
    </PageWrapper>
  )
}

export default Members
