import React from "react"

import { Box, CssBaseline } from "@material-ui/core"

import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TeamMembersSection from "../components/TeamMembersSection"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import ContactSection from "../components/ContactSection"
import bgImage from "../images/teamContactBackground.png"

const teamsPage = () => {
  return (
    <CssBaseline>
      <Navbar />
      <Box paddingTop="150px">
        <HeroSection />
        <TeamMembersSection />
        <ContactSection bgImage={bgImage} showShadow variant="dark" />
        <Footer />
        <Copyright />
      </Box>
    </CssBaseline>
  )
}

export default teamsPage
