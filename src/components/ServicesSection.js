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
import bgImage from "../images/ServiceBg.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "128px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "64px",
    },
    overflow: "hidden",
  },
  bg: {
    backgroundImage: `url(${bgImage})`,
    backgroundColor: "#F9F9F9",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  bgWhite: { backgroundColor: "white" },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "52px",
    paddingBottom: "115px",
    justifyContent: "center",
    gap: "34px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  pMajor: {
    paddingBottom: "70px",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "50px",
    },
  },
  pMinor: {
    paddingBottom: "52px",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "50px",
    },
  },
}))

const ServicesSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Box className={`${classes.container} ${classes.bgWhite}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title1")}
          desc={t("common_capabilities_description1")}
          img={fullStackImage}
        />
        <Box className={`${classes.cardContainer} ${classes.pMinor}`}>
          <CardService
            title={t("common_capabilities_capabilitiesCard_title1")}
            icon={faCode}
            contentList={[
              t("services_capabilities_capabilitiesCard_description1_item1"),
              t("services_capabilities_capabilitiesCard_description1_item2"),
              t("services_capabilities_capabilitiesCard_description1_item3"),
            ]}
          />
          <CardService
            title={t("common_capabilities_capabilitiesCard_title2")}
            icon={faCircleCheck}
            contentList={[
              t("services_capabilities_capabilitiesCard_description2_item1"),
              t("services_capabilities_capabilitiesCard_description2_item2"),
              t("services_capabilities_capabilitiesCard_description2_item3"),
            ]}
          />
        </Box>
      </Box>
      <Box className={`${classes.container} ${classes.bg}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title2")}
          desc={t("common_capabilities_description2")}
        />
        <Box className={`${classes.cardContainer} ${classes.pMajor}`}>
          <CardService
            title={t("common_capabilities_capabilitiesCard_title3")}
            icon={faBagShopping}
            contentList={[
              t("services_capabilities_capabilitiesCard_description3_item1"),
              t("services_capabilities_capabilitiesCard_description3_item2"),
              t("services_capabilities_capabilitiesCard_description3_item3"),
            ]}
          />
          <CardService
            title={t("services_capabilities_capabilitiesCard_title4")}
            icon={faMobile}
            contentList={[
              t("services_capabilities_capabilitiesCard_description4_item1"),
              t("services_capabilities_capabilitiesCard_description4_item2"),
              t("services_capabilities_capabilitiesCard_description4_item3"),
            ]}
          />
        </Box>
      </Box>
      <Box className={`${classes.container} ${classes.bgWhite}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title3")}
          desc={t("common_capabilities_description3")}
          img={qualitySupport}
        />
        <Box className={`${classes.cardContainer} ${classes.pMajor}`}>
          <CardService
            title={t("common_capabilities_capabilitiesCard_title5")}
            icon={faChartBar}
            contentList={[
              t("services_capabilities_capabilitiesCard_description5_item1"),
              t("services_capabilities_capabilitiesCard_description5_item2"),
              t("services_capabilities_capabilitiesCard_description5_item3"),
            ]}
          />
          <CardService
            title={t("common_capabilities_capabilitiesCard_title6")}
            icon={faUserTie}
            contentList={[
              t("services_capabilities_capabilitiesCard_description6_item1"),
              t("services_capabilities_capabilitiesCard_description6_item2"),
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default ServicesSection
