import React, { useRef } from "react"
import Swal from "sweetalert2"
import { Box, makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
//import { useForm, ValidationError } from "@formspree/react"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

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
  const { t } = useTranslation()
  const schema = yup.object().shape({
    name: yup.string().required(t("home_contacSection_contactForm_schemaYup_name")),
    email: yup.string().email(t("home_contacSection_contactForm_schemaYup_email1")).required(t("home_contacSection_contactForm_schemaYup_email2")),
    comments: yup.string().required(t("home_contacSection_contactForm_schemaYup_comments")),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const sendEmail = (e) => {
    //e.preventDefault();
    emailjs.sendForm('service_idrfktg', 'template_d6gox3w', form.current, 'Yj5TqwauXSazzj4UJ')
      .then((result) => {
        Swal.fire(
          t("home_contacSection_contactForm_swalSuccess_title"),
          t("home_contacSection_contactForm_swalSuccess_text"),
          "success"
        )
        for (const formu of document.getElementsByTagName("form")) {
          formu.reset()
        }
        //reset()
        //console.log(result.text);
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: t("home_contacSection_contactForm_swalError_title"),
          text: t("home_contacSection_contactForm_swalError_text"),
        })
        //console.log(error.text);
      });
  };

  return (
    <Box className={classes.formContainer}>
      <form ref={form} noValidate autoComplete="off" onSubmit={handleSubmit(sendEmail)}>
        <Box className={classes.inputContainer}>
          <Box className={classes.divider}>
            <TextField
              id="name"
              name="name"
              required
              label={t("home_contacSection_contactForm_textField_label1")}
              className={`${classes.shortInput} ${classes.root} `}
              {...register("name")}
              error={errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              id="company"
              name="company"
              label={t("home_contacSection_contactForm_textField_label2")}
              className={`${classes.shortInput} ${classes.root} `}
            />
          </Box>
          <TextField
            id="email"
            type="email"
            name="email"
            className={`${classes.input} ${classes.root}`}
            required
            label={t("home_contacSection_contactForm_textField_label3")}
            error={errors.email}
            {...register("email")}
            helperText={errors.email?.message}
          />
          <TextField
            id="comments"
            name="comments"
            label={t("home_contacSection_contactForm_textField_label4")}
            required
            className={`${classes.input} ${classes.root}`}
            {...register("comments")}
            error={errors.comments}
            helperText={errors.comments?.message}
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label={t("home_contacSection_contactForm_formControlLabel_checkbox_label")}
            className={classes.root}
            labelPlacement="end"
          />
          <Button
            className={classes.formButton}
            //disabled={state.submitting}
            type="submit"
          //onClick={() => handleClick()}
          >
            {t("common_button_contact_us")}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ContactForm
