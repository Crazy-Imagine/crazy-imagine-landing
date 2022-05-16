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
  },
  cardContainerCenter: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}))

const CapabilitiesSection = () => {
  const classes = useStyles()

  // const capabilitiesSection = useStaticQuery(query)
  // const images =
  //   capabilitiesSection.allStrapiHomepage.nodes[0].CapabilitiesImages
  // const fullstackImage = images[1].localFile.publicURL
  // const qualitysupportImage = images[2].localFile.publicURL

  return (
    <>
      <Box className={classes.container}>
        <Capabilities
          title={`Full-Stack
      Development`}
          desc={`With strong backgrounds in code
      ranging from PHP7 to Javascript to
      CSS3, our full stack developres have
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
        deployment popelines
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

// const query = graphql`
//   query {
//     allStrapiHomepage {
//       nodes {
//         CapabilitiesImages {
//           localFile {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `
export default CapabilitiesSection
