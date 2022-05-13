import * as React from "react"
import { Hidden } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import SectionHeader from "../components/SectionHeader"
import WorkForm from "../components/WorkForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

const WorkWithUsPage = () => {
  return (
    <PageWrapper>
      <Hidden mdDown>
        <Navbar variant="dark" variantIcons="dark" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile variantIcons="primary" />
      </Hidden>
      <SectionHeader
        title={`Work With Us
      At Crazy Imagine`}
        desc=""
        btn={false}
      />
      <WorkForm />
      <Footer height="400px" align="flex-end" />
      <Copyright />
    </PageWrapper>
  )
}

export default WorkWithUsPage
