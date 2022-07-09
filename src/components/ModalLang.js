import React, { useState, useEffect } from 'react';
import { makeStyles, Box, Typography, Modal, Button } from "@material-ui/core"
import { useTranslation, useI18next, Trans, I18nextContext } from "gatsby-plugin-react-i18next"
import bgImage from "../images/LOGO.png"


const useStyles = makeStyles(theme => ({
    container: {

        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        marginBottom: "auto",
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
        top: "45%",
        left: "30%",
        margin: "auto",
        width: 650,
        height: 250,
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
    },
    buttonBox: {
        textAlign: "center",
        marginLeft: "50px",
    },
    imgBox: {
        width: "100px",
        height: "auto",
    },
    img: {
        marginBottom: "190px",
        marginLeft: "50px",
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
    },
}))

const ModalLang = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { t } = useTranslation();
    const { languages, changeLanguage } = useI18next();
    const context = React.useContext(I18nextContext);
    const lang = context.language;
    //if (lang === "en") handleClose(false);

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
                    <Box>
                        <Typography variant="h1" className={classes.title}>
                            Choose Language
                        </Typography>
                        <Box className={classes.buttonBox}>
                            <Button
                                className={classes.button2}
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("es");
                                    handleClose(false);
                                    sessionStorage.setItem("lang", "true")
                                }}>ES</Button>
                            <Button
                                className={classes.button2}
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("en");
                                    handleClose(false);
                                    sessionStorage.setItem("lang", "true")
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
