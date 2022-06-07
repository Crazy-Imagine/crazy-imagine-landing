import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import Capabilities from "./Capabilities"
import CapabilitiesCard from "./CapabilitiesCard"
import {
  faBagShopping,
  faChartSimple,
  faCode,
  faGears,
  faMobile,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"
import fullstackImage from "../images/laptop.svg"
import bgImage from "../images/Group1.svg"
import qualityImage from "../images/quality.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "45px",
    backgroundColor: "rgb(255, 255, 255)",
    height: "772px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      gap: "32px",
      height: "540px",
      alignSelf: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "20px",
      paddingTop: "50px",
      paddingBottom: "50px",
      flexDirection: "column",
      justifyContent: "center",
      height: "fit-content",
      alignSelf: "center",
    },
  },
  reverseContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    height: "772px",
    gap: "45px",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      gap: "32px",
      height: "540px",
    },
    [theme.breakpoints.down("sm")]: {
      background: "transparent",
      paddingTop: "50px",
      paddingBottom: "50px",
      gap: "20px",
      flexDirection: "column",
      alignSelf: "center",
      height: "auto",
    },
  },
  cardContainerCenter: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "stretch",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}))

const CapabilitiesSection = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.container} id="capabilities">
        <Capabilities
          title={`Full-Stack
      Development`}
          desc={`With strong backgrounds in code
      ranging from PHP7 to Javascript to
      CSS3, our full stack developers have
      the skills and experience to elevate your digital presence`}
          cls="container"
          img={fullstackImage}
        />
        <Box className={classes.cardContainer}>
          <CapabilitiesCard
            icon={faCode}
            title={`Web
        Development`}
            desc={`By focusing on the
          specific needs of your 
          company, we can develop a thoughtful back-end
          architecture and responsive front-end
          design to create a trully
          unique and high-performing user
          experience.`}
          />
          <CapabilitiesCard
            icon={faGears}
            title={`Deployment +
        DevOps`}
            desc={`Our streamlined
        deployment pipelines
        create a stable work
        environment, reliable
        infrastructure, and
        improved software performance.`}
          />
        </Box>
      </Box>
      <Box className={classes.reverseContainer}>
        <Capabilities
          title={`User
          Experience`}
          desc={`A positive and memorable user
          experience is our top priority,
          from partial web development to
          full scale project management
          and everything in between.`}
          cls="classContainer"
          bgImg={true}
        />
        <Box className={classes.cardContainerCenter}>
          <CapabilitiesCard
            icon={faBagShopping}
            title={`eCommerce`}
            desc={`Using the latest
            trending technologies
            such as Woocommerce,
            Prestashop, and Shopify, we can
            seamlessly integrate
            payment platforms to
            meet your 
            operational needs`}
          />
          <CapabilitiesCard
            icon={faMobile}
            title={`Deployment +
      DevOps`}
            desc={`By collaborating with our
            customers on specific
            needs, we create intuitive
            and user-friendly apps
            that will faster
            engagement and interaction with
            their audiences`}
          />
        </Box>
      </Box>
      <Box className={classes.container}>
        <Capabilities
          title={`Quality
          Support`}
          desc={`Nothing is more important than 
          providing a high quality experience, 
          which is why we use a full range of 
          QA systems to ensure your project is 
          launch ready.
          `}
          cls="container"
          img={qualityImage}
        />
        <Box className={classes.cardContainer}>
          <CapabilitiesCard
            icon={faChartSimple}
            title={`Marketing`}
            desc={`Visibility leads to 
            engagement, which is 
            why we have a dedicated team 
            specializing in marketing. With highly 
            skilled SEO experts and experience 
            in LinkedIn, Instagram, and beyond, 
            our social network management 
            can bring brand awareness to 
            businesses of
            any scope.`}
          />
          <CapabilitiesCard
            icon={faUserTie}
            title={`Virtual
            Assistance`}
            desc={`Check off your to-do list
            in no time with the help
            of our skilled virtual
            assistants. From calendar
            management to file
            storage and
            organization, let us
            simplify your digital life.`}
          />
        </Box>
      </Box>
    </>
  )
}

export default CapabilitiesSection
