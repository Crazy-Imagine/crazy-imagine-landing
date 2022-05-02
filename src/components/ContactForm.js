import React from "react"
import clsx from "clsx"
import Swal from "sweetalert2"
import { Box, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { useForm, ValidationError } from "@formspree/react"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
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
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "21px",
  },
  formCheck: {
    background: "#E8E8E8",
    border: "1px solid #797EF6",
    boxSizing: "border-box",
    borderRadius: "2px",
  },
  formButton: {
    backgroundColor: "#797EF6",
    padding: "14px 20px 12px 20px",
    marginTop: "66px",
    borderRadius: "100px",
    alignSelf: "flex-start",
    "& > span": {
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
  },
  divider: {
    display: "flex",
    gap: "20px",
  },
  resetFormInput: {
    height: "246px !important",
  },
  input: {
    width: "520px",
  },
  shortInput: {
    width: "250px",
  },
  snackColor: {
    fontSize: "bold",
    backgroundColor: "white !important",
    display: "flex",
    justifyContent: "space-around",
  },
}))

const ContactForm = () => {
  const classes = useStyles({})
  const [state, handleSubmit] = useForm("myyogzrz")

  const handleClick = newState => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        setTimeout(() => {
          if (!state.succeeded) {
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            })
          }
          form.reset()
        }, 300)
      }
    }
    window.onbeforeunload()
    if (state.succeeded) {
      return Swal.fire(
        "Thank You!",
        "Your submission has been received",
        "success"
      )
    }
  }

  return (
    <Box className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <Box className={classes.inputContainer}>
          <Box className={classes.divider}>
            <TextField
              id="message"
              name="message"
              required
              label="Name"
              className={`${classes.shortInput} ${classes.root} `}
            />

            <TextField
              id="subject"
              name="subject"
              required
              label="Company"
              className={`${classes.shortInput} ${classes.root} `}
            />
          </Box>

          <TextField
            id="email"
            type="email"
            name="email"
            className={`${classes.input} ${classes.root}`}
            required
            label="Email Address"
          />
          <TextField
            id="about"
            label="Comments/Questions/Schemes"
            className={`${classes.input} ${classes.root}`}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Keep me up-to-date on news and exciting projects."
            className={classes.root}
            labelPlacement="end"
          />
          <Button
            className={classes.formButton}
            disabled={state.submitting}
            onClick={() => handleClick()}
          >
            CONTACT US
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ContactForm
