import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import axios from "axios"
import * as yup from "yup"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Input } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import { yupResolver } from "@hookform/resolvers/yup"
import { useIntersection } from "../hooks/useIntersection"
import WorkInfo from "../components/WorkInfo"

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    marginTop: "35px",
    gap: "20px 30px",
    backgroundColor: "#3399FF",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  formImage: {
    width: "100% !impotant",
    height: "100% !important",
  },
  containerImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "42%",
  },
  title: {
    marginTop: 25,
    marginBottom: 14,
    fontFamily: "Gotham-ultra",
    fontSize: 30,
    color: "#39f",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      marginTop: 15,
      marginBottom: 8,
    },
  },
  root: {
    width: "100%",
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: 520,
    },
    [theme.breakpoints.down("xs")]: {
      width: 380,
      marginLeft: "auto",
      marginRight: "auto",
      overflowX: "hidden",
    },
  },
  addressResponsive: {
    display: "flex",
    justifyContent: "center",
    gridGap: "5px",
    marginBottom: 0.1,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  boxLine: {
    backgroundColor: "#39f",
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
  shortInput: {
    height: 1,
    width: "260px",
  },

  addressForm: {
    height: 1,
    width: 170,
    marginTop: 35,
    marginBottom: 55,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  shortContainer: {
    display: "flex",
    flexDirection: "row",
  },
  formButton: {
    background: "#3399ff",
    color: "#fff",
    height: 35,
    fontFamily: "Lato",
    width: 150,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 4,
    border: "0px",
    cursor: "pointer",
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

  const domref = useRef()
  const isVisible = useIntersection(domref, "0px")

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
    <Box className={classes.formContainer}>
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={classes.shortInput}
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
                className={classes.shortInput}
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
              className={classes.formInput}
              error={errors.email}
              {...register("email")}
              helperText={errors.email?.message}
              type="text"
              id="outlined-basic"
              label="Email"
              name="email"
            />
            <TextField
              required
              className={classes.formInput}
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
              className={classes.formInput}
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
              className={classes.formInput}
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

            <Input
              type="file"
              name="curriculum"
              {...register("curriculum", {
                minLength: {
                  value: 1,
                  message: "Load a file",
                },
              })}
              onChange={disableChangeButton}
            ></Input>
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
