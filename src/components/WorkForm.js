import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Input } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Alert from "@material-ui/lab/Alert"
import * as yup from "yup"
import { StaticImage } from "gatsby-plugin-image"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useIntersection } from "../hooks/useIntersection"

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
    width: 519,
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
  formButton: {
    background: "#E36417",
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
  const [showAttach, setShowAttach] = useState(false)
  const [showLink, setShowLink] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  const domref = useRef()
  const isVisible = useIntersection(domref, "0px")

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
    address: yup.string().required().typeError("Introduce your address"),
    city: yup.string().required().typeError("Introduce your city"),
    state: yup.string().required().typeError("Introduce your state"),
    zip: yup
      .string()
      .required()
      .matches(/^[\d]+$/, "Must be only digits")
      .min(4, "Must be at least 4 digits")
      .typeError("Must be at least 4 digits"),
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
          "Only the following formats are accepted: .jpeg, .jpg, .png, .bmp, .pdf and .doc",
          function (value) {
            return (
              value &&
              value[0] &&
              (value[0].type === "image/jpeg" ||
                value[0].type === "image/bmp" ||
                value[0].type === "image/png" ||
                value[0].type === "application/pdf" ||
                value[0].type === "application/msword")
            )
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
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { website: "" },
  })

  const onSubmitHandler = async data => {
    setDisableButton(true)

    if (data.curriculum?.length === 1) {
      const formData = new FormData()
      formData.append("files", data.curriculum[0])

      axios
        .post("http://localhost:1337/upload", formData)
        .then(async response => {
          //after success
          const file = response.data[0].id
          const sendData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            website: data.website,
            curriculum: file,
          }

          const res = await axios.post(
            "http://localhost:1337/curriculums",
            sendData
          )

          if (res.statusText === "OK") {
            setShowAttach(false)
            setShowLink(false)
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
          address: data.address,
          city: data.city,
          state: data.state,
          zip: data.zip,
          website: data.website,
        }

        const res = await axios.post(
          "http://localhost:1337/curriculums",
          sendData
        )

        if (res.statusText === "OK") {
          setShowAttach(false)
          setShowLink(false)
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
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticImage
          style={{ borderRadius: "2%" }}
          src="../images/IMG_7599.jpg"
          alt="Team mates around the office"
        />
      </Box>
      <Box>
        <Card
          className={`${classes.root}  ${
            isVisible ? classes.formAnimation : ""
          }`}
          ref={domref}
        >
          <CardContent>
            <Box
              style={{
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              alignSelf="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.title}
                >
                  Send us your info
                </Typography>
                <Box
                  width="45px"
                  height="6px"
                  marginTop="15px"
                  className={classes.boxLine}
                ></Box>
              </Box>
            </Box>
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
                <TextField
                  required
                  className={classes.formInput}
                  {...register("name")}
                  error={errors.name}
                  helperText={errors.name?.message}
                  type="text"
                  id="outlined-basic"
                  label="Name"
                  name="name"
                  variant="outlined"
                />
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
                  variant="outlined"
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
                  variant="outlined"
                />
                <TextField
                  required
                  className={classes.formInput}
                  error={errors.address}
                  helperText={errors.address?.message}
                  {...register("address")}
                  type="text"
                  id="outlined-basic"
                  label="Address"
                  name="address"
                  variant="outlined"
                />
                <Box className={classes.addressResponsive}>
                  <TextField
                    required
                    className={classes.addressForm}
                    helperText={errors.city?.message}
                    {...register("city")}
                    error={errors.city}
                    type="text"
                    id="outlined-basic"
                    label="City"
                    name="city"
                    variant="outlined"
                  />
                  <TextField
                    required
                    className={classes.addressForm}
                    helperText={errors.state?.message}
                    {...register("state")}
                    error={errors.state}
                    type="text"
                    id="outlined-basic"
                    label="State/Province"
                    name="state"
                    variant="outlined"
                  />
                  <TextField
                    required
                    className={classes.addressForm}
                    helperText={errors.zip?.message}
                    {...register("zip")}
                    error={errors.zip}
                    type="number"
                    id="outlined-basic"
                    label="ZIP Code"
                    name="zip"
                    variant="outlined"
                  />
                </Box>
                <Box mt={2.5} mb={2}>
                  <label>
                    Resume*<br></br>
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowAttach(true)
                        setShowLink(false)
                      }}
                    >
                      Attach your resume
                    </Link>{" "}
                    or{" "}
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowLink(true)
                        setShowAttach(false)
                      }}
                    >
                      Paste your resume
                    </Link>
                  </label>
                </Box>
                {showLink && (
                  <>
                    <TextField
                      required
                      className={classes.formInputAppears}
                      helperText={errors.website?.message}
                      error={errors.website}
                      {...register("website")}
                      onSelect={disableChangeButton}
                      type="text"
                      id="outlined-basic"
                      label="Paste your resume"
                      name="website"
                      variant="outlined"
                    />
                  </>
                )}
                {showAttach && (
                  <>
                    <Input
                      type="file"
                      name="curriculum"
                      accept="application/pdf"
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
                        display:
                          errors.curriculum !== undefined ? "inherit" : "none",
                        backgroundColor: "transparent",
                        color: "red",
                        padding: "0px 10px",
                        fontSize: "0.845rem",
                        marginTop: 5,
                      }}
                    >
                      {errors.curriculum?.message}
                    </Alert>
                  </>
                )}
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
                <CardActions className={classes.actionPadding}>
                  <Button
                    className={classes.formButton}
                    type="submit"
                    disabled={disableButton}
                  >
                    SUBMIT
                  </Button>
                </CardActions>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default WorkForm
