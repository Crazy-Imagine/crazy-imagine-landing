import { Hidden } from '@material-ui/core'
import React, { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import Copyright from '../components/Copyright'
import headerImage from '../images/marciano.svg'
import AboutSection from '../components/AboutSection'
import Imagen from '../components/Imagen'



const About = () => {
    const ref = useRef()

    const [y, setY] = useState(0);

    const handleNavigation = (e) => {
        const div = ref.current
        const window = e.currentTarget;
        setY(div.getBoundingClientRect().y);
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);

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
            <div ref={ref}></div>
            <AboutSection />
            <Imagen
                setY={y}
            />
            <Footer />
            <Copyright />
        </PageWrapper>
    );
}

export default About;
