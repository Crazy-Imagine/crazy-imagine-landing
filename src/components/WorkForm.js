import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import * as yup from "yup"
import { Box, makeStyles, Input } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import { yupResolver } from "@hookform/resolvers/yup"
import WorkInfo from "../components/WorkInfo"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px #D6D6D6 solid !important",
    },
    "& .MuiSvgIcon-root": {
      background: "#E8E8E8",
      color: "#797EF6",
      borderRadius: "2px",
    },
    "& .MuiInputBase-input": {
      [theme.breakpoints.between(0, 600)]: {
        margin: "3px",
      },
    },
    "& .MuiTypography-body1": {
      fontFamily: "Hero New",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "140%",
      color: "#193173",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
    },
  },
  curriculumAlert: {
    paddingLeft: "30px",
    backgroundColor: "transparent",
    color: "#F44336",
    marginTop: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "140%",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    "& .MuiAlert-icon": {
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    gap: "93px",
    [theme.breakpoints.down("md")]: {
      gap: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "20px",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  formContainer: {
    visibility: "hidden",
  },
  formContainer2: {
    animation: `$myEffect 2000ms`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "rgba(235, 235, 235, 0.4)",
    marginTop: "94px",
    borderRadius: "14px 14px 0px 0px",
    [theme.breakpoints.down("md")]: {
      marginTop: "66px",
      padding: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      padding: "8px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
      padding: "4px",
    },
  },
  containerInfo: {
    width: "fit-content",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  containerImage: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  container1: {
    overflow: "hidden",
  },
  attachContainer: {
    width: "87%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "78%",
    },
  },
  attach: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
    },
  },
  attachLabel: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    marginTop: "43px",
    marginBottom: "15px",
    color: "#193173",
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
      fontSize: "10px",
      marginBottom: "10px",
    },
  },
  attachButton: {
    border: "2px solid #797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    marginBottom: "15px",
    color: "#797EF6",
    cursor: "pointer",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "14px",
    textAlign: "center",
    letterSpacing: "0.05em",
    "&:hover": {
      backgroundColor: "#797EF6",
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "9px",
      padding: "10px 14px 8px 14px",
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  formInput: {
    height: 1,
    width: "520px",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 35,
    marginBottom: 40,
    [theme.breakpoints.down("md")]: {
      width: "364px",
      margin: "30px 30px 30px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "226px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "189px",
    },
  },
  shortInput: {
    height: 1,
    width: "250px",
    [theme.breakpoints.down("md")]: {
      width: "170px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "104px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "86px",
    },
  },
  shortContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
  },
  formButton: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    marginTop: "18px",
    marginBottom: "37px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "16px",
      marginBottom: "25px",
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  },
  actionPadding: {
    padding: 4,
  },
  formAnimation: {
    animation: `$fadeIn ease 5000ms`,
  },
  successfullAlert: {
    backgroundColor: "transparent",
    width: "80%",
    marginTop: "5px",
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "8px",
    },
  },
}))

const WorkForm = () => {
  const classes = useStyles()
  const ref = useRef()
  const fileRef = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()
  const [showMessage, setShowMessage] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formStatus === "well") {
        setShowMessage(false)
        setAlertMessage("")
        setFormStatus("")
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [formStatus])

  const schema = yup.object().shape({
    firstName: yup.string().required(t("workWithUs_workForm_schemaYup_firstName")),
    lastName: yup.string().required(t("workWithUs_workForm_schemaYup_lastName")),
    email: yup.string().email(t("home_contacSection_contactForm_schemaYup_email1")).required(t("home_contacSection_contactForm_schemaYup_email2")),
    phone: yup
      .string()
      .matches(/^[a-zA-Z0-9\-().\s]{10,15}$/, t("workWithUs_workForm_schemaYup_phone1"))
      .required(t("workWithUs_workForm_schemaYup_phone2")),
    linkedin: yup.string(),
    website: yup.string(),
    curriculum: yup.mixed().when("website", {
      is: "",
      then: yup
        .mixed()
        .test("required", t("workWithUs_workForm_schemaYup_curriculum1"), value => {
          return value && value.length
        })
        .test("fileSize", t("workWithUs_workForm_schemaYup_curriculum2"), (value, context) => {
          return value && value[0] && value[0].size <= 200000
        })
        .test(
          "type",
          t("workWithUs_workForm_schemaYup_curriculum3"),
          function (value) {
            return value && value[0] && value[0].type === "application/pdf"
          }
        ).test("well", t("workWithUs_workForm_schemaYup_curriculum4"), value => {
          return
        }),
      otherwise: yup.mixed(),
    }),
    reference: yup.string().required(t("workWithUs_workForm_schemaYup_reference")),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { website: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  })
  const domain = process.env.API_URL || "http://localhost:1337"



  const onSubmitHandler = async data => {
    if (data.curriculum?.length === 1) {
      const formData = new FormData()
      formData.append("files", data.curriculum[0])
      axios
        .post(`${domain}/upload`, formData)
        .then(async response => {
          const file = response.data[0].id
          const sendData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            linkedin: data.linkedin,
            website: data.website,
            reference: data.reference,
            curriculum: file,
          }

          setShowButton(true)
          const res = await axios.post(`${domain}/curriculums`, sendData)
          setShowButton(false)

          if (res.statusText === "OK") {
            setAlertMessage(t("workWithUs_workForm_submit_success"))
            setFormStatus("well")
            setShowMessage(true)
            reset()
          }
        })
        .catch(error => {
          setAlertMessage(t("workWithUs_workForm_submit_error"))
          setFormStatus("bad")
          setShowMessage(true)
        })
    } else {
      if (data.website !== "") {
        const sendData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          linkedin: data.linkedin,
          website: data.website,
          reference: data.reference,
        }

        setShowButton(true)
        const res = await axios.post(`${domain}/curriculums`, sendData)
        setShowButton(false)

        if (res.statusText === "OK") {
          setAlertMessage(t("workWithUs_workForm_submit_success"))
          setFormStatus("well")
          setShowMessage(true)
          reset()
        } else {
          setAlertMessage(t("workWithUs_workForm_submit_error"))
          setFormStatus("bad")
          setShowMessage(true)
        }
      }
    }
  }

  return (
    <Box className={classes.container}>
      <Box ref={ref} className={classes.containerInfo}>
        <WorkInfo />
      </Box>
      <Box className={classes.container1}>
        <Box
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alignSelf="center"
        ></Box>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Box
            className={
              isVisible ? classes.formContainer2 : classes.formContainer
            }
          >
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("firstName")}
                error={errors.firstName}
                helperText={errors.firstName?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label1")}
                name="firstName"
              />
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("lastName")}
                error={errors.lastName}
                helperText={errors.lastName?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label2")}
                name="lastName"
              />
            </Box>
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                error={errors.email}
                {...register("email")}
                helperText={errors.email?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label3")}
                name="email"
              />
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                error={errors.phone}
                {...register("phone")}
                helperText={errors.phone?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label4")}
                name="phone"
              />
            </Box>
            <TextField
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.linkedin?.message}
              error={errors.linkedin}
              {...register("linkedin")}
              type="text"
              id="outlined-basic"
              label={t("workWithUs_workForm_textField_label5")}
              name="linkedin"
            />
            <TextField
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.website?.message}
              error={errors.website}
              {...register("website")}
              type="text"
              id="outlined-basic"
              label={t("workWithUs_workForm_textField_label6")}
              name="website"
            />
            <Box className={classes.attachContainer}>
              <Box className={classes.attach}>
                <span className={classes.attachLabel}>{t("workWithUs_workForm_textField_label7")}</span>
                <label className={classes.attachButton} htmlFor="resume-btn">
                  {t("workWithUs_workForm_textField_button1")}
                </label>
                {/*<button className={classes.attachButton} onClick={() => fileRef.current.click()}>ATTACH</button>*/}
              </Box>
              <Input
                type="file"
                id="resume-btn"
                ref={fileRef}
                name="curriculum"
                style={{ display: "none" }}
                {...register("curriculum", {
                  minLength: {
                    value: 1,
                    message: "Load a file",
                  },
                })}
              ></Input>
            </Box>
            <Alert
              severity={(errors.curriculum?.message === "File uploaded successfully" || errors.curriculum?.message === "Archivo cargado con éxito") ? "success" : "error"}
              className={classes.curriculumAlert}
              style={{
                display: errors.curriculum !== undefined ? "inherit" : "none",
                color: (errors.curriculum?.message === "File uploaded successfully" || errors.curriculum?.message === "Archivo cargado con éxito") ? "green" : "red"
              }}
            >
              {errors.curriculum?.message}
            </Alert>
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
              error={errors.reference}
              {...register("reference")}
              helperText={errors.reference?.message}
              form
              type="text"
              id="outlined-basic"
              label={t("workWithUs_workForm_textField_label8")}
              name="reference"
            />
            <Alert
              severity={formStatus === "well" ? "success" : "error"}
              className={classes.successfullAlert}
              style={{
                visibility: showMessage === true ? "visible" : "hidden",
                color: formStatus === "well" ? "#4caf50" : "#F44336",
              }}
            >
              {alertMessage}
            </Alert>
            <Button className={classes.formButton} type="submit" disabled={showButton === true}>
              {t("workWithUs_workForm_textField_button2")}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default WorkForm