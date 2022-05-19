import { Hidden } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import ContactSection from '../components/ContactSection'
import Copyright from '../components/Copyright'
import headerImage from '../images/astronaut.svg'

const Contact = () => {
    return (
        <PageWrapper>
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
            <ContactSection />
            <Footer />
            <Copyright />
        </PageWrapper>
    )
}

export default Contact;
