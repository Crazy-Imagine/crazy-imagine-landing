import React, { useState } from 'react';
import { makeStyles, Box, Typography, Modal, Button } from "@material-ui/core"
import { useI18next } from "gatsby-plugin-react-i18next"
import bgImage from "../images/flag.svg"


const useStyles = makeStyles(theme => ({
    container: {

        //marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        //marginBottom: "auto",
        alignItems: "center",
        flexDirection: "column",
        //backdropFilter: "blur(3px)",
        // opacity: "0.2"
    },
    containerInfo: {
        boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
        padding: "32px 0px 5px 0px",
        borderRadius: "14px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 650,
        height: 240,
        //border: '2px solid #000',
        display: "flex",
        flexDirection: "row",
        //boxShadow: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        "&:focus-visible": {
            outline: "none"
        },
        [theme.breakpoints.down("md")]: {
            width: 590,
        },
        [theme.breakpoints.down("xs")]: {
            width: "85%",
            //borderRadius: "0px",
            padding: "0px 0px 0px 0px",
            display: "flex",
            //alignItems: "end",

            //justifyContent: "flex-start",
        },
        [theme.breakpoints.between(0, 500)]: {
            width: "100%",
            borderRadius: "0px",
            height: 180,

        },

    },
    title: {
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "48px",
        lineHeight: "28px",
        textAlign: "center",
        marginLeft: "30px",
        color: "#193174",
        marginTop: "27px",
        whiteSpace: "pre-line",
        minHeight: "54px",
        [theme.breakpoints.between(0, 510)]: {
            fontWeight: 100,
            lineHeight: "40px",
            fontSize: "33px",
            marginTop: "0px",
            marginLeft: "0px",
        },
    },
    buttonBox: {
        textAlign: "center",
        marginLeft: "20px",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "row",
            marginLeft: "0px",
        },
    },
    imgBox: {

        width: "auto",
        height: "252.7%",
        [theme.breakpoints.between(500, 1280)]: {
            height: "220.7%",
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-end",
            width: "auto",
            height: "auto",
            display: "none",
        },
    },
    img: {
        // marginBottom: "190px",
        // marginLeft: "50px",
    },
    boxT: {
        [theme.breakpoints.down("xs")]: {
            //display: "flex",
            justifyContent: "flex-start",
        },
    },
    button2: {
        background: "#797EF6",
        borderRadius: "20px",
        marginBottom: "37px",
        marginTop: "28px",
        spacer: "25px",
        margin: "5px 15px 5px 15px",
        "&:hover": {
            backgroundColor: "#30AADE",
        },
        "& > span": {
            fontFamily: "Nexa Bold",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            padding: "14px 20px 12px 20px",
            lineHeight: "14px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "0.05em",
            color: "#FFFFFF",
        },
        [theme.breakpoints.down("xs")]: {
            borderRadius: "50px",
            marginBottom: "17px",
            marginTop: "18px",
            spacer: "5px",
            margin: "0px 5px 0px 5px",
            "& > span": {
                fontFamily: "Nexa Bold",
                fontStyle: "normal",
                fontWeight: "50",
                fontSize: "8px",
                padding: "4px 5px 4px 5px",
                lineHeight: "10px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                letterSpacing: "0.05em",
                color: "#FFFFFF",
            },
        },
    },
}))

const ModalLang = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //const { t } = useTranslation();
    const { languages, changeLanguage } = useI18next();
    //const context = React.useContext(I18nextContext);
    //const lang = context.language;
    //if (lang === "en") handleClose(false);
    //const { t } = useI18next();

    return (
        <>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                // disableEnforceFocus
                open={open}
                // onClose={handleClose}
                style={{ backdropFilter: "blur(3px)", zIndex: 9999999, }}
            >
                {/* <Box className={classes.container}> */}

                <Box className={classes.containerInfo}>
                    <Box className={classes.boxT}>
                        <Typography variant="h1" className={classes.title}>
                            {/* {t("modalLang")} */}
                            Choose Language
                        </Typography>
                        <Box className={classes.buttonBox}>
                            <Button
                                className={classes.button2}
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("es");
                                    handleClose();
                                    {
                                        typeof window !== 'undefined' && (
                                            sessionStorage.setItem("lang", "true")
                                        )
                                    }

                                }}>ES</Button>
                            <Button
                                className={classes.button2}
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("en");
                                    handleClose();

                                    {
                                        typeof window !== 'undefined' && (
                                            sessionStorage.setItem("lang", "true")
                                        )
                                    }
                                }}>EN</Button>
                        </Box>
                    </Box>
                    <Box className={classes.imgBox}>
                        <img
                            src={bgImage}
                            alt="logo"
                            className={classes.img}
                        />
                    </Box>
                </Box>
                {/* </Box> */}
            </Modal>
        </>
    );
}

export default ModalLang;
