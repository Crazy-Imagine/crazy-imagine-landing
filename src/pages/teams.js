import React from "react"

import { Box, Hidden } from "@material-ui/core"

import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TeamMembersSection from "../components/TeamMembersSection"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import ContactSection from "../components/ContactSection"
import bgImage from "../images/teamContactBackground.png"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import Layout from "../components/layout"

const TeamsPage = () => {
  return (
    <Layout seo={{ metaTitle: "Teams" }}>
      <PageWrapper>
        <Hidden mdDown>
          <Navbar variant="secondary" variantIcons="secondary" />
        </Hidden>
        <Hidden lgUp>
          <NavbarMobile />
        </Hidden>
        <Box>
          <HeroSection />
          <TeamMembersSection />
          <ContactSection bgImage={bgImage} showShadow variant="dark" />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

export default TeamsPage
