import { Hidden } from "@material-ui/core"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"
import Copyright from "../components/Copyright"
import headerImage from "../images/astronaut.svg"
import Layout from "../components/layout"


const Contact = () => {
  return (
    <Layout seo={{ metaTitle: "Imagine What We Can Create", metaDescription: "ContactUs" }} >
      <PageWrapper>
        <header>
          <Hidden mdDown>
            <Navbar variant="secondary" />
          </Hidden>
          <Hidden lgUp>
            <NavbarMobile variantIcons="primary" />
          </Hidden>
          <SectionHeader
            title={`Let's Imagine 
                Together`}
            btn={false}
            img={headerImage}
            little={true}
          />
        </header>
        <main>
          <ContactSection />
        </main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </PageWrapper>
    </Layout>
  )
}

export default Contact
