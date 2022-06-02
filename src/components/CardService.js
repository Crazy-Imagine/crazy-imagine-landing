import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartBar } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles(theme => ({
  container: {
    width: "470px",
    height: "465px",
    display: "flex",
    flexDirection: "column",
    justfiyContent: "center",
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#193174",
    marginTop: "27px",
    whiteSpace: "pre-line",
    minHeight: "54px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "18px",
      marginTop: "18px",
    },
  },
  list: {
    marginBottom: "46px",
    marginLeft: "41px",
    marginRight: "29px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "31px",
      marginLeft: "30px",
      marginRight: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      marginLeft: "20px",
      marginRight: "9px",
    },
  },
  listItem: {
    marginBottom: "20px",
    fontfamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "140%",
    letterspacing: "0.02em",
    color: "#193174",
    "&::marker": {
      color: "#797EF6",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "14px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px",
      fontSize: "12px",
    },
  },
  icon: {
    marginTop: "32px",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      marginTop: "23px",
      fontSize: "21px",
      lineHeight: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "18px",
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
}))

const CardService = ({ icon, title, contentList }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <Typography className={classes.title}>{title}</Typography>
      <ul className={classes.list}>
        {contentList?.map(value => (
          <li className={classes.listItem}>{value}</li>
        ))}
      </ul>
    </Box>
  )
}

export default CardService
