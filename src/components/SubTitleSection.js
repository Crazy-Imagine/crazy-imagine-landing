import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "59px",
        marginTop: "34px",
        marginBottom: "52px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            height: "auto",
            marginTop: "17px",
            marginBottom: "17px"

        },
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "20px",
        width: "41%",
        [theme.breakpoints.down('sm')]: {
            width: "79%",
            gap: "10px"
        },
        [theme.breakpoints.down('xs')]: {
            width: "86%",
            gap: "10px",
            marginBottom: "17px"
        },
    },
    title: {
        animation: `$myEffecto 5000ms`,
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "58px",
        lineHeight: "58px",
        color: "#193174",
        [theme.breakpoints.down('sm')]: {
            width: "auto",
            fontWeight: "auto",
            fontSize: "28px",
            lineHeight: "28px",
        },
    },
    "@keyframes myEffecto": {
        "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
        "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
        "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
        "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
        "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
        "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
        "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
        "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
    },
    desc: {
        animation: `$myEffectos 5000ms`,
        fontFamily: "Hero New",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "130%",
        letterSpacing: "0.02em",
        color: "#193174",
        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
        },
    },
    "@keyframes myEffectos": {
        "0%": {
            opacity: 0,
        },
        "50%": {
            opacity: 0.5,
        },
        "100%": {
            opacity: 1,
        }
    },
    img: {
        animation: `$myEffect 5000ms`,
        [theme.breakpoints.down('xs')]: {
            width: "80%",
            marginTop: "-27px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
    },
    "@keyframes myEffect": {
        "0%": {
            opacity: 0,
            transform: "translateX(200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        }
    },
    imgn: {
        [theme.breakpoints.down('sm')]: {

            justifyContent: "center",
            textAlign: "center"
        },
    },
}))

export const SubTitleSection = ({ title, desc, img }) => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>

            <Box className={classes.textContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.desc}>{desc}</Typography>
            </Box>
            <Box className={classes.imgn}>
                <img className={classes.img} src={img} alt="" />
            </Box>

        </Box>
    )
}

export default SubTitleSection