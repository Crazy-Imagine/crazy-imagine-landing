import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  moreInfoContent: {
    color: "white",
    marginBottom: 24,
    fontSize: 17,
    lineHeight: "27px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  boxLine: {
    backgroundColor: "white",
  },
  imageLocation: {
    backgroundColor: "white",
    width: 446,
    height: 270,
    border: 0,
    borderRadius: 10,
  },
}))

const MoreInfo = () => {
  const classes = useStyles()
  return (
    <Box>
      <Box
        display={{ xs: "flex", md: "block" }}
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h3" className={classes.title}>
          More Info
        </Typography>
        <Box
          width="45px"
          height="6px"
          my="14px"
          className={classes.boxLine}
        ></Box>
      </Box>
      <Typography className={classes.moreInfoContent}>
        <LocationOnIcon />
        Urb Ambroio Plaza #1 street House #2/123, <br /> San Cristobal,
        Venezuela.
      </Typography>
      <Typography className={classes.moreInfoContent}>
        <PhoneIcon /> +58 414 70079236
      </Typography>
      <Typography className={classes.moreInfoContent}>
        <EmailIcon /> contact@crazyimagine.com
      </Typography>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1976.5230466520018!2d-72.20859894197719!3d7.784938006087513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d7.784993699999999!2d-72.2076548!5e0!3m2!1ses-419!2sve!4v1624006479913!5m2!1ses-419!2sve"
          title="location"
          loading="lazy"
          className={classes.imageLocation}
        ></iframe>
      </Box>
    </Box>
  )
}

export default MoreInfo
