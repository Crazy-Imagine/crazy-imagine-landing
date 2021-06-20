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
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  formInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 35,
    width: 424,
    color: "#000000",
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
  },
  resetFormInput: {
    height: 200,
  },
  formButton: {
    backgroundColor: "#D32022",
    height: 35,
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    color: "white",
  },
}))

const ContactForm = () => {
  const classes = useStyles()
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
        <Box marginBottom="20px">
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
