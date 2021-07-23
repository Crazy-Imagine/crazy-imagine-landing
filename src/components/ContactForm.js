import React from "react"
import clsx from "clsx"
import {
  Box,
  Button,
  makeStyles,
  FormControl,
  Typography,
} from "@material-ui/core"

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
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
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
  return (
    <Box>
      <Typography variant="h3" className={classes.title}>
        contact
      </Typography>
      <FormControl>
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Name(Required)" />
        </Box>
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Email(Required)" />
        </Box>
        <Box marginBottom="20px">
          <input className={classes.formInput} placeholder="Subject" />
        </Box>
        <Box marginBottom="16px">
          <textarea
            placeholder="Message"
            className={clsx(classes.formInput, classes.resetFormInput)}
          />
        </Box>
        <Button variant="contained" className={classes.formButton}>
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  )
}

export default ContactForm
