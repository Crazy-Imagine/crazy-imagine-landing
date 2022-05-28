import { Box, makeStyles } from "@material-ui/core"
import React from "react"
import CardService from "./CardService"
import ServiceCapabilities from "./ServiceCapabilities"
import fullStackImage from "../images/laptop-purple.svg"
import qualitySupport from "../images/quality-blue.svg"
import {
  faBagShopping,
  faChartBar,
  faCircleCheck,
  faMobile,
  faCode,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "128px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "52px",
    marginBottom: "115px",
    justifyContent: "center",
    gap: "34px",
  },
}))

const ServicesSection = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <ServiceCapabilities
          title={`Full-Stack
          Development`}
          desc={`With strong backgrounds in code ranging from PHP7 to
          Javascript to CSS3, our full stack developers have the skills
          and experience to elevate your digital presence.`}
          img={fullStackImage}
        />
        <Box className={classes.cardContainer}>
          <CardService
            title={`Web
            Development`}
            icon={faCode}
            contentList={[
              "Specialize in client-focused websites and cloud solutions.",
              "Excel in utilizing the latest technologies – Javascript, React js, Angular js, Vue js,and PHP.",
              "Seamlessly integrate frameworks into Laravel, Wordpress, and Codeigniter.",
            ]}
          />
          <CardService
            title={`Deployment
            + DevOps`}
            icon={faCircleCheck}
            contentList={[
              "Ensure product quality and performance via a pipeline of continuous delivery",
              "Excel in creating reliable infrustructures that can be managed by coding",
              "Seamlessly integrate popular cloud services such as AWS, Azure, and Google Cloud",
            ]}
          />
        </Box>
      </Box>
      <Box className={classes.container}>
        <ServiceCapabilities
          title={`User
          Experience`}
          desc={`A positive and memorable user experience is our top
          priority, from partial web development to full scale project
          management and everything in between.`}
        />
        <Box className={classes.cardContainer}>
          <CardService
            title="eCommerce"
            icon={faBagShopping}
            contentList={[
              "Utilize the latest technology to create user-friendly interfaces",
              "Enable quick transactions, increasing your business’s profitability",
              "Seamlessly integrate payment platforms such as Woocommerce, Prestashop, and Shopify",
            ]}
          />
          <CardService
            title={`Mobile
            Development`}
            icon={faMobile}
            contentList={[
              "Specialize in iOS, Swift iOS, and Android",
              "Excel in the latest hybrid technologies such as React Native and Ionic",
              "Create intuitive and user-friendly apps that will foster engagement and interaction",
            ]}
          />
        </Box>
      </Box>
      <Box className={classes.container}>
        <ServiceCapabilities
          title={`Quality
          Support`}
          desc={`Nothing is more important than providing a high quality
          experience, which is why we use a full range of QA systems
          to ensure your project is launch ready.`}
          img={qualitySupport}
        />
        <Box className={classes.cardContainer}>
          <CardService
            title="Marketing"
            icon={faChartBar}
            contentList={[
              "Ensure that your brand is well positioned among search results",
              "Experience with major social media networks such as LinkedIn, Instagram, and Facebook",
              "Help build brand awareness and convert more users to consumers",
            ]}
          />
          <CardService
            title={`Virtual
            Assistance`}
            icon={faUserTie}
            contentList={[
              "Tasks that range from managing your virtual store, scheduling client meetings, organizing your digital storage, or placing online orders",
              "Ensure that your business runs smoothly so you can focus on everything else",
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default ServicesSection
