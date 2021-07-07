import React from "react"
import { Box } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HeroProjectsSection from "../components/HeroProjectsSection"
import AboutProjects from "../components/AboutProjects"
import GalleryProjects from "../components/GalleryProjects"
import DescriptionProjects from "../components/DescriptionProjects"
import MoreProjects from "../components/MoreProjects"

const Project = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Box paddingTop="120px">
        <HeroProjectsSection />
        <AboutProjects />
        <GalleryProjects />
        <DescriptionProjects />
        <MoreProjects />
        <Footer />
        <Copyright />
      </Box>
    </PageWrapper>
  )
}

export default Project
