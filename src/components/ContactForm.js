import React, { useRef } from "react"
import Swal from "sweetalert2"
import { Box, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { useForm, ValidationError } from "@formspree/react"
import emailjs from '@emailjs/browser';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      fontFamily: "Hero New",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.down("xs")]: {
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
    "& .MuiTypography-body1": {
      fontFamily: "Hero New",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "108px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      marginTop: "30px",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  formCheck: {
    background: "#E8E8E8",
    border: "1px solid #797EF6",
    boxSizing: "border-box",
    borderRadius: "2px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  formButton: {
    backgroundColor: "#797EF6",
    marginTop: "23px",
    borderRadius: "100px",
    alignSelf: "flex-start",
    padding: "14px 20px 12px 20px",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
  divider: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      flexDirection: "column",
    },
  },
  input: {
    width: "520px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  shortInput: {
    width: "250px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  snackColor: {
    fontSize: "bold",
    backgroundColor: "white !important",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}))

const ContactForm = () => {
  const classes = useStyles({})
  const form = useRef();

  //const [state, handleSubmit] = useForm("myyogzrz")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_idrfktg', 'template_d6gox3w', form.current, 'Yj5TqwauXSazzj4UJ')
      .then((result) => {
        Swal.fire(
          "Thank You!",
          "Your submission has been received",
          "Success"
        )
        for (const formu of document.getElementsByTagName("form")) {
          formu.reset()
        }
        //console.log(result.text);
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
        //console.log(error.text);
      });
  };

  /*
  const handleClick = newState => {
    console.log("state", state)

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
        "Success"
      )
    }
  } */

  return (
    <Box className={classes.formContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <Box className={classes.inputContainer}>
          <Box className={classes.divider}>
            <TextField
              id="name"
              name="name"
              required
              label="Name"
              className={`${classes.shortInput} ${classes.root} `}
            />
            <TextField
              id="company"
              name="company"
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
            id="comments"
            name="comments"
            label="Comments/Questions/Schemes"
            required
            className={`${classes.input} ${classes.root}`}
          />
          <ValidationError
            prefix="Message"
            field="message"
          //errors={state.errors}
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
            //disabled={state.submitting}
            type="submit"
          //onClick={() => handleClick()}
          >
            CONTACT US
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ContactForm
