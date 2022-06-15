import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import bgImage from "../images/headerBackground.svg"
import { Link } from "gatsby"
import { HOME, PROJECTS } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  backgroundIn: props => ({
    backgroundColor: "#27AAE1",
    width: "93.2%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "14px",
    overflow: "hidden",
    height: props.little ? "332px" : "530px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingTop: "10px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      height: props.little ? "312px" : "290px",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      height: "auto",
      //width: "99%",
      width: "100%",
      borderRadius: "0px",
      //flexDirection: "column",
      background: props.little ? "#27AAE1" : "transparent",

    },
    [theme.breakpoints.between(450, 350)]: {
      //flexDirection: "column",
      height: props.little ? "257px" : "235px",
    },
    [theme.breakpoints.between(350, 0)]: {
      //flexDirection: "column",
      height: props.little ? "237px" : "215px",
    },
  }),
  backgroundOut: props => ({
    background: "linear-gradient(179.23deg, #193174 27.17%, #27AAE1 96.81%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: props.little ? "490px" : "688px",
    mixBlendMode: "normal",
    width: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: props.little ? "450px" : "540px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: props.little ? "370px" : "350px",
    },
    [theme.breakpoints.between(0, 400)]: {
      flexDirection: "column",
      //height: props.little ? "290px" : "350px",
    },
  }),
  buttonLeft: {
    backgroundColor: "#FFFFFF",
    borderRadius: "100px",
    color: "#1E2F97",
    padding: "14px 20px 12px 20px",
    border: "2px solid #FFFFFF",
    "&:hover": {
      background: "transparent",
      color: "#FFFFFF",
    },
    "& > span": {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: 900,
      textAlign: "center",
      letterSpacing: "0.05em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "5px 5px 5px 5px",
      "& > span": {
        fontSize: "12px",
        lineHeight: "inherit",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 6px 6px 6px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "inherit",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3px 3px 3px 3px",
      border: "1px solid #FFFFFF",
      borderRadius: "8px",
      "& > span": {
        fontSize: "8px",
        lineHeight: "inherit",
      },
    },
  },
  buttonRight: {
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    color: "#FFFFFF",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    "& > span": {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: 900,
      textAlign: "center",
      letterSpacing: "0.05em",
    },
    "&:hover": {
      background: "#FFFFFF",
      color: "#1E2F97",
    },
    [theme.breakpoints.down("md")]: {
      padding: "5px 5px 5px 5px",
      "& > span": {
        fontSize: "12px",
        lineHeight: "inherit",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px 5px 5px 5px",
      border: "1px solid #FFFFFF",
      "& > span": {
        fontSize: "8px",
        lineHeight: "inherit",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "4px 4px 4px 4px",
      border: "1px solid #FFFFFF",
      borderRadius: "8px",
      "& > span": {
        fontSize: "7px",
        lineHeight: "inherit",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    [theme.breakpoints.down("sm")]: {
      gap: "3px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "5px",
      marginBottom: "5px",
    },
  },
  textContainer: props => ({
    backgroundColor: "#27AAE1",
    display: "flex",
    flexDirection: "column",
    padding: "100px 0px 100px 100px",
    borderRadius: "14px",
    gap: "42px",
    justifyContent: props.little ? "center" : "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 50px 50px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 20px 50px",
      width: "100%",
      //alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px 10px 10px",
      width: "100%",
      gap: "14px",
      justifyContent: "center",
      background: props.little ? "#27AAE1" : "transparent",
    },
  }),
  imgContainer: props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginRight: props.little ? "100px" : "0px",
    [theme.breakpoints.down("sm")]: {
      marginRight: props.little ? "50px" : "0px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: props.little ? "10px" : "0px",
    },
  }),
  img: {
    animation: `$myEffect 2000ms`,
    width: "307px",
    height: "407px",
    [theme.breakpoints.down("xl")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  title: props => ({
    fontStyle: "normal",
    fontWeight: "900",
    fontFamily: "Nexa Bold",
    fontSize: props.little ? "70px" : "90px",
    lineHeight: "81px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      lineHeight: "71px",
      fontWeight: 900,
      fontSize: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: props.little ? "61px" : "40px",
      fontSize: props.little ? "51px" : "30px",
      fontWeight: props.little ? 600 : 400,
    },
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "normal",
      //textAlign: "center",
      lineHeight: props.little ? "51px" : "40px",
      fontSize: props.little ? "23px" : "30px",
      fontWeight: 100,
    },
    [theme.breakpoints.between(0, 400)]: {
      lineHeight: props.little ? "41px" : "30px",
      fontSize: props.little ? "21px" : "25px",
      fontWeight: 100,
    },
    [theme.breakpoints.between(0, 350)]: {
      lineHeight: props.little ? "31px" : "20px",
      fontSize: props.little ? "21px" : "20px",
      fontWeight: 100,
    },
  }),
  desc: props => ({
    display: props.btn ? "inherit" : "none",
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#E3FFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "inherit",
      //textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      lineHeight: "inherit",
    },
  }),
}))

export const SectionHeader = ({ title, desc, btn, little, img }) => {
  const classes = useStyles({ little, btn })

  return (
    <Box className={classes.backgroundOut}>
      <Box className={classes.backgroundIn}>
        <Box className={classes.textContainer}>
          <Typography className={classes.title}><span>{title}</span></Typography>
          <Typography className={classes.desc}>{desc}</Typography>
          {btn && (
            <Box className={classes.buttonContainer}>
              <Link
                to={`${HOME}#capabilities`}
                style={{ textDecoration: "none" }}
              >
                <Button className={classes.buttonLeft}>Capabilities</Button>{" "}
              </Link>
              <Link to={`${PROJECTS}`} style={{ textDecoration: "none" }}>
                <Button className={classes.buttonRight}>Get Started</Button>
              </Link>
            </Box>
          )}
        </Box>
        <Box className={classes.imgContainer}>
          <img className={classes.img} src={img} alt="Header Section" />
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
