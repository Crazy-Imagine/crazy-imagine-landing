import React, { useEffect } from 'react';
import { Box, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({

    img: {
        animation: `$myEffect 3000ms`,
        marginTop: "auto",
        width: "100%",
        height: "100%",

    },
    container: {
        display: "flex",
        gap: "150px",
        height: "830px",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            height: "280px",

        },
        [theme.breakpoints.down('sm')]: {
            height: "530px",

        },
    },
    container2: {
        display: "flex",
        gap: "150px",
        height: "830px",
        width: "50%",
        [theme.breakpoints.down('xs')]: {
            height: "280px",

        },
        [theme.breakpoints.down('sm')]: {
            height: "530px",

        },
    },
    "@keyframes myEffect": {
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
}))

const Imagen = ({ setY }) => {

    useEffect(() => {
        console.log(setY)
    }, [setY]);

    const classes = useStyles()
    return (
        <Box className={(setY < -1300) ? classes.container2 : classes.container}>
            <StaticImage className={classes.img} src="../images/crazy1.png" />
        </Box>
    );
}

export default Imagen;
