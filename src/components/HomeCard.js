import React from "react"
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    width: "150px",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    whiteSpace: "pre-line",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      width: "105px",
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "65px",
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "33px",
      fontSize: "6px",
      lineHeight: "6px",
    },
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
    [theme.breakpoints.down("md")]: {
      width: "220px",
      height: "130px",
      gap: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "154px",
      height: "91px",
      gap: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "78px",
      height: "46px",
      gap: "6px",
    },
  },
  cardIcon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      lineHeight: "6px",
    },
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
