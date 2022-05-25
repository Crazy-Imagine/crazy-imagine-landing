import * as React from "react"
import { Hidden } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import SectionHeader from "../components/SectionHeader"
import WorkForm from "../components/WorkForm"
import Navbar from "../components/Navbar"
import Imagen from "../components/Imagen"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import headerImage from "../images/rocket.svg"

const WorkWithUsPage = () => {
  return (
    <PageWrapper>
      <Hidden mdDown>
        <Navbar variant="secondary" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile />
      </Hidden>
      <SectionHeader
        title={`Work With Us
      At Crazy Imagine`}
        btn={false}
        little={true}
        img={headerImage}
      />
      <WorkForm />
      <Imagen />
      <Footer />
      <Copyright />
    </PageWrapper>
  )
}

export default WorkWithUsPage
