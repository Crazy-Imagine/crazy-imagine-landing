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
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

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
    alignItems: "stretch",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      gap: "14px",
    },
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}))

const CapabilitiesSection = () => {
  const classes = useStyles()
  const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();

  return (
    <>
      <Box className={classes.container} id="capabilities">
        <Capabilities
          title={t("common_capabilities_title1")}
          desc={t("common_capabilities_description1")}
          cls="container"
          img={fullstackImage}
        />
        <Box className={classes.cardContainer}>
          <CapabilitiesCard
            icon={faCode}
            title={t("common_capabilities_capabilitiesCard_title1")}
            desc={t("home_capabilities_capabilitiesCard_description1")}
          />
          <CapabilitiesCard
            icon={faGears}
            title={t("common_capabilities_capabilitiesCard_title2")}
            desc={t("home_capabilities_capabilitiesCard_description2")}
          />
        </Box>
      </Box>
      <Box className={classes.reverseContainer}>
        <Capabilities
          title={t("common_capabilities_title2")}
          desc={t("common_capabilities_description2")}
          cls="classContainer"
          bgImg={true}
        />
        <Box className={classes.cardContainerCenter}>
          <CapabilitiesCard
            icon={faBagShopping}
            title={t("common_capabilities_capabilitiesCard_title3")}
            desc={t("home_capabilities_capabilitiesCard_description3")}
          />
          <CapabilitiesCard
            icon={faMobile}
            title={t("home_capabilities_capabilitiesCard_title4")}
            desc={t("home_capabilities_capabilitiesCard_description4")}
          />
        </Box>
      </Box>
      <Box className={classes.container}>
        <Capabilities
          title={t("common_capabilities_title3")}
          desc={t("common_capabilities_description3")}
          cls="container"
          img={qualityImage}
        />
        <Box className={classes.cardContainer}>
          <CapabilitiesCard
            icon={faChartSimple}
            title={t("common_capabilities_capabilitiesCard_title5")}
            desc={t("home_capabilities_capabilitiesCard_description5")}
          />
          <CapabilitiesCard
            icon={faUserTie}
            title={t("common_capabilities_capabilitiesCard_title6")}
            desc={t("home_capabilities_capabilitiesCard_description6")}
          />
        </Box>
      </Box>
    </>
  )
}

export default CapabilitiesSection
