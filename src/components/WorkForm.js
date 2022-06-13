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
  const isVisible = useIntersection(ref, "0px")

  const [showMessage, setShowMessage] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formStatus === "well") {
        setShowMessage(false)
        setAlertMessage("")
        setFormStatus("")
      }
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [formStatus])

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .matches(/^[a-zA-Z0-9\-().\s]{10,15}$/, "Invalid number")
      .required("Phone is required"),
    linkedin: yup.string(),
    website: yup.string(),
    curriculum: yup.mixed().when("website", {
      is: "",
      then: yup
        .mixed()
        .test("required", "Please post a website or resume", value => {
          return value && value.length
        })
        .test("fileSize", "The file must be max 2 mb", (value, context) => {
          return value && value[0] && value[0].size <= 200000
        })
        .test(
          "type",
          "Only the following formats are accepted: .pdf",
          function (value) {
            return value && value[0] && value[0].type === "application/pdf"
          }
        ),
      otherwise: yup.mixed(),
    }),
    reference: yup.string(),
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

          const res = await axios.post(`${domain}/curriculums`, sendData)

          if (res.statusText === "OK") {
            setAlertMessage("Form has been send succesfully")
            setFormStatus("well")
            setShowMessage(true)
            reset()
          }
        })
        .catch(error => {
          setShowMessage(true)
          setAlertMessage("There was an error trying to send your form")
          setFormStatus("bad")
          //console.log(error)
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
        const res = await axios.post(`${domain}/curriculums`, sendData)
        if (res.statusText === "OK") {
          setAlertMessage("Form has been send succesfully")
          setFormStatus("well")
          setShowMessage(true)
          reset()
        } else {
          setAlertMessage("There was an error trying to send your form")
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
                label="First Name"
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
                label="Last Name"
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
                label="Email Address"
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
                label="Phone"
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
              label="LinkedIn Profile"
              name="linkedin"
            />
            <TextField
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.website?.message}
              error={errors.website}
              {...register("website")}
              type="text"
              id="outlined-basic"
              label="Website"
              name="website"
            />
            <Box className={classes.attachContainer}>
              <Box className={classes.attach}>
                <span className={classes.attachLabel}>Resume/CV </span>
                <span className={classes.attachButton} for="resume-btn">
                  ATTACH
                </span>
              </Box>
              <Input
                type="file"
                id="resume-btn"
                name="curriculum"
                style={{ display: "none" }}
                {...register("curriculum", {
                  minLength: {
                    value: 1,
                    message: "Load a file",
                  },
                })}
              ></Input>

              {/* <Box className={classes.attach} style={{ display: "none" }}>
                <label className={classes.attachLabel}>Cover Letter</label>
                <label className={classes.attachButton} for="file-upload">
                  ATTACH
                </label>
              </Box>
              <Input
                type="file"
                id="file-upload"
                name="coverLetter"
                style={{ display: "none" }}
                {...register("coverLetter", {
                  minLength: {
                    value: 1,
                    message: "Load a file",
                  },
                })}
              ></Input>
            */}
            </Box>
            <Alert
              severity="error"
              className={classes.curriculumAlert}
              style={{
                display: errors.curriculum !== undefined ? "inherit" : "none",
              }}
            >
              {errors.curriculum?.message}
            </Alert>
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.reference?.message}
              error={errors.reference}
              {...register("reference")}
              form
              type="text"
              id="outlined-basic"
              label="How did you hear about Crazy Imagine?"
              name="reference"
            />
            {/* <Alert
              severity="error"
              style={{
                display: errors.cover !== undefined ? "inherit" : "none",
                backgroundColor: "transparent",
                color: "red",
                fontSize: "0.845rem",
                marginTop: 5,
              }}
            >
              {errors.coverLetter?.message}
            </Alert> */}
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
            <Button className={classes.formButton} type="submit">
              SUBMIT
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default WorkForm
