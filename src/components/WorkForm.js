import * as React from "react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { graphql, useStaticQuery } from "gatsby"
import axios from "axios"
import * as yup from "yup"
import { Box, makeStyles } from "@material-ui/core"
import { Input } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import { yupResolver } from "@hookform/resolvers/yup"
import WorkInfo from "../components/WorkInfo"

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
      [theme.breakpoints.down("sm")]: {
        fontSize: "6px",
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
    "& .MuiTypography-body1": {
      fontFamily: "Hero New",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.down("md")]: {
        fontSize: "9px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "6px",
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
  containerImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "42%",
  },
  attachContainer: {
    width: "520px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "364px",
      marginTop: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "226px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "189px",
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
      marginBottom: "10px",
      fontSize: "9px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
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
    [theme.breakpoints.down("md")]: {
      marginTop: "9px",
      padding: "10px 14px 8px 14px",
      fontSize: "10px",
      lineHeight: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      border: "1px solid #797EF6",
      marginTop: "6px",
      padding: "6px 9px 5px 9px",
      fontSize: "6px",
      lineHeight: "6px",
    },
  },
  formInputAppears: {
    height: 1,
    width: 519,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      width: 460,
      marginLeft: 20,
      marginRight: 20,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      marginLeft: 5,
      marginRight: 5,
    },
  },
  formInput: {
    height: 1,
    width: "520px",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 35,
    marginBottom: 55,
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
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
  },
  formButton: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    marginTop: "37px",
    marginBottom: "125px",
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
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginTop: "16px",
      marginBottom: "25px",
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      padding: "6px 9px 5px 9px",
      "& > span": {
        fontSize: "6px",
        lineHeight: "6px",
      },
    },
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      backgroundColor: "#d5d5d5",
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
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
}))

const WorkForm = () => {
  const classes = useStyles()

  const [disableButton, setDisableButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  const data = useStaticQuery(query)
  const image = data.strapiTeampage?.WorkFormImage?.localFile

  const disableChangeButton = () => {
    if (getValues("website") || getValues("curriculum")) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formStatus === "well") {
        setShowMessage(false)
        setAlertMessage("")
        setFormStatus("")
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [formStatus])

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
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
        .test("required", "You need to provide a file", value => {
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
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    defaultValues: { website: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  })
  const domain = process.env.API_URL || "http://localhost:1337"

  const onSubmitHandler = async data => {
    setDisableButton(true)

    if (data.curriculum?.length === 1) {
      const formData = new FormData()
      formData.append("files", data.curriculum[0])
      axios
        .post(`${domain}/upload`, formData)
        .then(async response => {
          //after success
          const file = response.data[0].id
          const sendData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            state: data.state,
            zip: data.zip,
            website: data.website,
            curriculum: file,
          }

          const res = await axios.post(`${domain}/curriculums`, sendData)

          if (res.statusText === "OK") {
            setAlertMessage("Form has been send succesfully")
            setFormStatus("well")
            setShowMessage(true)
            reset()
          } else {
            setShowMessage(true)
            setAlertMessage("There was an error trying to send your form")
            setFormStatus("bad")
          }
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      if (data.website !== "") {
        const sendData = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
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
      <Box className={classes.containerImage}>
        <WorkInfo />
      </Box>
      <Box>
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
          <Box className={classes.formContainer}>
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("firstName")}
                error={errors.name}
                helperText={errors.name?.message}
                type="text"
                id="outlined-basic"
                label="First Name"
                name="firstName"
              />
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("lastName")}
                error={errors.name}
                helperText={errors.name?.message}
                type="text"
                id="outlined-basic"
                label="Last Name"
                name="lastname"
              />
            </Box>
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
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
              className={`${classes.formInput} ${classes.root}`}
              error={errors.phone}
              {...register("phone")}
              helperText={errors.phone?.message}
              type="text"
              id="outlined-basic"
              label="Phone"
              name="phone"
            />
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.linkedin?.message}
              error={errors.linkedin}
              {...register("linkedin")}
              onSelect={disableChangeButton}
              type="text"
              id="outlined-basic"
              label="LinkedIn Profile"
              name="linkedin"
              value=""
            />
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.website?.message}
              error={errors.website}
              {...register("website")}
              onSelect={disableChangeButton}
              type="text"
              id="outlined-basic"
              label="Website"
              name="website"
              value=""
            />
            <Box className={classes.attachContainer}>
              <label className={classes.attachLabel}>Resume/CV </label>
              <label className={classes.attachButton} for="resume-btn">
                ATTACH
              </label>
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
              onChange={disableChangeButton}
            ></Input>
            <Box className={classes.attachContainer}>
              <label className={classes.attachLabel}>Cover Letter</label>
              <label className={classes.attachButton} for="file-upload">
                ATTACH
              </label>
            </Box>
            <Input
              type="file"
              name="curriculum"
              style={{ display: "none" }}
              {...register("curriculum", {
                minLength: {
                  value: 1,
                  message: "Load a file",
                },
              })}
              onChange={disableChangeButton}
            ></Input>
            <TextField
              required
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.website?.message}
              error={errors.website}
              {...register("website")}
              form
              onSelect={disableChangeButton}
              type="text"
              id="outlined-basic"
              label="How did you hear about Crazy Imagine?"
              name="website"
              value=""
            />
            <Alert
              severity="error"
              style={{
                display: errors.curriculum !== undefined ? "inherit" : "none",
                backgroundColor: "transparent",
                color: "red",
                fontSize: "0.845rem",
                marginTop: 5,
              }}
            >
              {errors.curriculum?.message}
            </Alert>
            <Alert
              severity={formStatus === "well" ? "success" : "error"}
              className={classes.successfullAlert}
              style={{
                visibility: showMessage === true ? "visible" : "hidden",
                color: formStatus === "well" ? "#4caf50" : "red",
              }}
            >
              {alertMessage}
            </Alert>
            <Button
              className={classes.formButton}
              type="submit"
              disabled={disableButton}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

const query = graphql`
  query {
    strapiTeampage {
      WorkFormImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`

export default WorkForm
