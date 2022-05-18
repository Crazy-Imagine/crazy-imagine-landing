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
    desc: {
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
    img: {
        [theme.breakpoints.down('xs')]: {
            width: "80%",
            marginTop: "-27px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
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