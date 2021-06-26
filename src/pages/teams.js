import React from "react"

import { Box, CssBaseline } from "@material-ui/core"

import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TeamMembersSection from "../components/TeamMembersSection"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import ContactSection from "../components/ContactSection"

const teamsPage = () => {
  return (
    <CssBaseline>
      <Navbar />
      <Box paddingTop="150px">
        <HeroSection />
        <TeamMembersSection />
        <ContactSection />
        <Footer />
        <Copyright />
      </Box>
    </CssBaseline>
  )
}

export default teamsPage
