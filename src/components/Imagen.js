import React from 'react';
import { Box, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({

    img: {
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
            height: "230px",

        },
        [theme.breakpoints.down('sm')]: {
            height: "430px",

        },
    },
}))

const Imagen = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <StaticImage className={classes.img} src="../images/crazy1.png" />
        </Box>
    );
}

export default Imagen;
