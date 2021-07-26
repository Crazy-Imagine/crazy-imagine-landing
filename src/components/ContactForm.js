import React from "react"
import clsx from "clsx"
import {
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { useForm, ValidationError } from '@formspree/react';

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
      fontSize: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
    "&:focus": {
      border: 0,
    },
  }),
  formButton: {
    backgroundColor: "#D32022",
    height: 35,
    fontFamily: "Lato",
    width: 424,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    border: "0px",
    color: "white",
  },
  resetFormInput: {
    height: "246px !important",
  },
}))

const ContactForm = ({ variant = "default" }) => {
  const classes = useStyles({
    variant,
  })
  const [state, handleSubmit] = useForm("mknkvdow");
  if (state.succeeded) {
   console.log("xd")
  }
  return (
    <Box>
      <Typography variant="h3" className={classes.title}>
        contact
      </Typography>
      <form  onSubmit={handleSubmit} action="https://formspree.io/f/mknkvdow">
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Name(Required)"   id="message" 
          name="message" />
        </Box>
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Email(Required)" id="email"
        type="email" 
        name="email" />
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </Box>
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Subject" 
          id="subject" 
          name="subject"/>
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
        <button  className={classes.formButton}  disabled={state.submitting}>
          SUBMIT
        </button>
      </form>
    </Box>
  )
}

export default ContactForm
