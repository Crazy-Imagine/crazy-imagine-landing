import React from "react"
import clsx from "clsx"
import {
  Box,
  Button,
  makeStyles,
  FormControl,
  TextField,
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
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "Lato",
    padding: "6px 7px 10px 7px !important",
    "&:placeholder": {
      color: "#red",
    },
  },
  resetFormInput: {
    height: 200,
    width: 438,
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
          <TextField
            inputProps={{ className: classes.formInput }}
            label="Name(required)"
            variant="outlined"
          />
        </Box>
        <Box marginBottom="20px">
          <TextField
            inputProps={{ className: classes.formInput }}
            label="Email(required)"
            variant="outlined"
          />
        </Box>
        <Box marginBottom="20px">
          <TextField
            inputProps={{ className: classes.formInput }}
            label="Subject"
            variant="outlined"
          />
        </Box>
        <Box marginBottom="20px">
          <textarea
            placeholder="Message"
            className={clsx(classes.formInput, classes.resetFormInput)}
          ></textarea>
        </Box>
        <Button variant="contained" className={classes.formButton}>
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  )
}

export default ContactForm
