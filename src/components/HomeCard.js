import React from "react"
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    width: "150px",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    whiteSpace: "pre-line",
    color: "#193174",
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
  },
  cardContent: {
    width: "314px",
    height: "185px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "27px",
    alignItems: "center",
  },
  cardIcon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#27AAE1",
  },
}))

const HomeCard = ({ title, icon }) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardContent}>
        <FontAwesomeIcon icon={icon} className={classes.cardIcon} />
        <Typography className={classes.title}>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default HomeCard
