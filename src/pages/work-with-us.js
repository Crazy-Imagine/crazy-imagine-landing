import * as React from "react"
import { Hidden } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"
import WorkMainSection from "../components/WorkMainSection"
import WorkInfo from "../components/WorkInfo"
import WorkForm from "../components/WorkForm"
import WorkSelection from "../components/WorkSelection"
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
      <WorkMainSection />
      <WorkInfo />
      <WorkSelection />
      <WorkForm />
      <Footer height="400px" align="flex-end" />
      <Copyright />
    </PageWrapper>
  )
}

export default WorkWithUsPage
