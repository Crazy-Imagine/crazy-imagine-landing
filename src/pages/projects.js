import React from "react"
import { Box } from "@material-ui/core"
import ProjectsMainSection from "../components/ProjectsMainSection"
import OurProjects from "../components/OurProjects"
import ProjectsServices from "../components/ProjectsServices"
import ProjectsContact from "../components/ProjectsContact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import PageWrapper from "../components/PageWrapper"

const projects = () => {
  return (
    <PageWrapper>
      <Navbar variant="dark" />
      <Box paddingTop="185px">
        <ProjectsMainSection />
        <OurProjects />
        <ProjectsServices />
        <ProjectsContact />
        <Footer />
        <Copyright />
      </Box>
    </PageWrapper>
  )
}

export default projects
