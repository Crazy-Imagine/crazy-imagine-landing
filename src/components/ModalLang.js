import React, { useState, useEffect } from 'react';
import { makeStyles, Box, Typography, Modal, Button } from "@material-ui/core"
import { useTranslation, useI18next, Trans, I18nextContext } from "gatsby-plugin-react-i18next"


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
        padding: "32px 50px 25px 50px",
        borderRadius: "14px",
        position: "absolute",
        top: "45%",
        left: "30%",
        margin: "auto",
        width: 600,
        height: 200,
        border: '2px solid #000',
        //boxShadow: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        "&:focus-visble": {

        },
    },
    title: {
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "48px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#193174",
        marginTop: "27px",
        whiteSpace: "pre-line",
        minHeight: "54px",
    },
    buttonBox: {
        textAlign: "center",
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
                    <Typography variant="h1" className={classes.title}>
                        Choose Language
                    </Typography>
                    <Box className={classes.buttonBox}>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("es");
                            handleClose(false);
                            sessionStorage.setItem("lang", "true")
                        }}>ES</Button>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("en");
                            handleClose(false);
                            sessionStorage.setItem("lang", "true")
                        }}>EN</Button>
                    </Box>
                </Box>
                {/* </Box> */}
            </Modal>
        </>
    );
}

export default ModalLang;
