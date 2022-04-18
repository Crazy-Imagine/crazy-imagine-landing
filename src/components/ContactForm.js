import React from "react"
import clsx from "clsx"
import Swal from "sweetalert2"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { useForm, ValidationError } from "@formspree/react"

const useStyles = makeStyles(theme => ({
  title: props => ({
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: props.variant === "dark" ? "black" : "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      color: "black",
    },
  }),

  formInput: props => ({
    backgroundColor: "white",
    borderRadius: 4,
    height: 35,
    width: 424,
    color: "#000000",
    boxShadow:
      props.variant === "dark" ? "0px 9px 38px 0px rgba(15, 15, 15, 0.18)" : "",
    fontSize: 16,
    border: 0,
    fontFamily: "Lato",
    outline: "none",
    padding: "6px 7px 10px 7px !important",
    "&::placeholder": {
      color: "#919191 !important",
      fontSize: 15,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
    "&:focus": {
      border: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),
  formButton: {
    //backgroundColor: "#D32022",
    background: "#E36417",
    color: "#fff",
    height: 35,
    fontFamily: "Lato",
    width: 424,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    border: "0px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  resetFormInput: {
    height: "246px !important",
  },
  snackColor: {
    fontSize: "bold",
    backgroundColor: "white !important",
    display: "flex",
    justifyContent: "space-around",
  },
}))

const ContactForm = ({ variant = "default" }) => {
  const classes = useStyles({
    variant,
  })
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
    <Box width="100%">
      <Typography variant="h3" className={classes.title}>
        contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box marginBottom="20px">
          <input
            className={classes.formInput}
            placeholder="Name (Required)"
            id="message"
            name="message"
            required
          />
        </Box>
        <Box marginBottom="20px">
          <input
            className={classes.formInput}
            placeholder="Email (Required)"
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Box>
        <Box marginBottom="20px">
          <input
            className={classes.formInput}
            placeholder="Subject"
            id="subject"
            name="subject"
            required
          />
        </Box>
        <Box marginBottom="16px">
          <textarea
            placeholder="Message"
            className={clsx(classes.formInput, classes.resetFormInput)}
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Box>
        <button
          className={classes.formButton}
          disabled={state.submitting}
          onClick={() => handleClick()}
        >
          SUBMIT
        </button>
      </form>
    </Box>
  )
}

export default ContactForm
