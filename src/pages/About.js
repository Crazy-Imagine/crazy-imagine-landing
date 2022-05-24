import React from "react"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import SectionHeader from "../components/SectionHeader"
import { Hidden } from "@material-ui/core"
import headerImage from "../images/marciano.svg"
import AboutSection from "../components/AboutSection"
import Imagen from "../components/Imagen"

const About = () => {
  return (
    <PageWrapper>
      <Hidden mdDown>
        <Navbar variant="secondary" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile variantIcons="primary" />
      </Hidden>
      <SectionHeader
        title={`Our Team is Your
                Greatest Resource`}
        btn={false}
        img={headerImage}
        little={true}
      />
      <AboutSection />
      <Imagen />
      <Footer />
      <Copyright />
    </PageWrapper>
  )
}

export default About
