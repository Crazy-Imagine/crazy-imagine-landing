import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import Image from "../images/LOGO.png"

const useStyles = makeStyles(theme => ({
    container: {
        width: "100wh",
        height: "100vh",
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        marginBottom: "auto",
        alignItems: "center",
        flexDirection: "column",
    },
    img2: {
        //animation: `$myEffect 3000ms infinite linear`,
        width: "140px",
        height: "73px",
        zIndex: "99999",
        //top: "50%",
        //margin: "auto",
    },
    preloader: {
        width: "20px",
        height: "20px",
        border: "3px solid #eee",
        borderTop: "3px solid #666",
        borderRadius: "50%",
        //margin: "auto",
        animation: `$myEffect 2000ms infinite`,
    },
    "@keyframes myEffect": {
        "0%": {
            transform: "rotate(0)",
        },
        "100%": {
            transform: "rotate(360deg)",
        },
    },
}))

const Loading = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <img src={Image} alt="logo" className={classes.img2} />
            <div className={classes.preloader}></div>
        </Box>
    );
}

export default Loading;
