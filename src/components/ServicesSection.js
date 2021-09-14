import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

import { useForm, ValidationError } from "@formspree/react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Grid,
  makeStyles,
  useTheme,
  TextField,
  Typography,
} from "@material-ui/core"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    transition: "linear 300ms",
    minHeight: 600,
    maxHeight: 600,
    background: "rgb(182 168 168 / 15%)",
    "&:hover": {
      boxShadow: "1px 4px 30px 0px rgba(0,0,0,0.15)",
    },
  },
  gridItem: {
    zIndex: 9999,
  },
  pricipalTitle: {
    fontSize: 45,
    fontFamily: "Gotham",
    marginBottom: 30,
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 50,
    fontFamily: "Gotham",
    textAlign: "center",
    minHeight: 92,
  },
  subTitle: {
    fontSize: 32,
    fontFamily: "poppins",
    marginBottom: 30,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "gotham-book",
    color: "#E36417",
    marginBottom: 17,
    textAlign: "center",
    boxShadow: "5px 7px 21px -3px grey",
    backgroundColor: "rgb(236 236 236 / 15%)",
  },
  buyButton: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Gotham",
    padding: "17px 25px 22px 27px",
    margin: "30px 0px",
    backgroundColor: "#E36417",
    color: "white",
    "&:hover": {
      backgroundColor: "#e6712b",
    },
  },
  paragraphs: {
    fontSize: 20,
    fontFamily: "gotham-book",
    lineHeight: "22px",
  },
  carouselButton: {
    zIndex: 9999,
    "&:hover": {
      background: "transparent",
    },
  },
  boxLine: {
    backgroundColor: "black",
  },
}))

const ServiceContent = ({
  title,
  description,
  price,
  handleClose,
  handleClickOpen,
  handleSubmit,
  classes,
  open,
  state,
}) => {
  return (
    <Grid
      item
      xs={12}
      ms={6}
      md={4}
      lg={3}
      justifyContent="center"
      alignItems="center"
      className={classes.gridItem}
    >
      <Card className={classes.cardContainer}>
        <Box p="15px">
          <CardContent>
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="h2" className={classes.productPrice}>
              {price}
            </Typography>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                className={classes.buyButton}
                onClick={handleClickOpen}
              >
                Contratar Ahora
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className={classes.dialog}
              >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xzbyobpo"
                >
                  <DialogContent>
                    <DialogContentText>
                      To subscribe to this website, please enter your email
                      address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                      margin="dense"
                      id="email"
                      type="email"
                      name="email"
                      label="Email Address"
                      required
                      fullWidth
                    />
                    <ValidationError
                      prefix="Email Address"
                      field="email"
                      errors={state.errors}
                    />
                    <TextField
                      margin="dense"
                      id="message"
                      type="text"
                      name="message"
                      label="Message(optional)"
                      fullWidth
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <Box className={classes.inputHidden}>
                      <TextField
                        margin="dense"
                        id="plan"
                        type="text"
                        name="plan"
                        label="Plan"
                        value={title}
                        fullWidth
                        disabled
                      />
                      <ValidationError
                        prefix="Plan"
                        field="plan"
                        errors={state.errors}
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      onClick={handleClose}
                    >
                      Sumbit
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </Box>
            <ReactMarkdown className={classes.paragraphs}>
              {description}
            </ReactMarkdown>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

const ServicesSection = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const [state, handleSubmit] = useForm("xzbyobpo")
  const [activeStep, setActiveStep] = useState(0)

  if (state.succeeded) {
    console.log("yupi")
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        const services = data.services.nodes

        const handleNext = () => {
          setActiveStep(prevActiveStep => prevActiveStep + 1)
        }

        const handleBack = () => {
          setActiveStep(prevActiveStep => prevActiveStep - 1)
        }

        return (
          <Box
            marginTop={{ md: "40px", lg: "230px" }}
            px={{ md: "20px", lg: "40px" }}
          >
            <Typography variant="h4" className={classes.pricipalTitle}>
              Services
            </Typography>
            <Box width="100%" display="flex" justifyContent="center">
            <Box
              height="34px"
              width="1px"
              className={classes.boxLine}
              marginBottom="30px"
            />
            </Box>
            <Grid container spacing={4} className={classes.container}>
              <Grid item md={1}>
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              </Grid>

              {services && (
                <>
                  <ServiceContent
                    title={services[activeStep].title}
                    description={services[activeStep].subTitle}
                    price={services[activeStep].price}
                    open={open}
                    state={state}
                    classes={classes}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                  />
                  <ServiceContent
                    title={services[activeStep + 1].title}
                    description={services[activeStep + 1].subTitle}
                    price={services[activeStep + 1].price}
                    open={open}
                    state={state}
                    classes={classes}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                  />
                  <ServiceContent
                    title={
                      services[activeStep + 2]
                        ? services[activeStep + 2].title
                        : ""
                    }
                    description={
                      services[activeStep + 2]
                        ? services[activeStep + 2].subTitle
                        : ""
                    }
                    price={
                      services[activeStep + 2]
                        ? services[activeStep + 2].price
                        : ""
                    }
                    open={open}
                    state={state}
                    classes={classes}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                  />
                </>
              )}
              <Grid item md={1}>
                <Button
                  size="large"
                  onClick={handleNext}
                  disabled={activeStep === 2}
                  className={classes.carouselButton}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              </Grid>
              <Grid item xs={12} ms={6} md={4} lg={3} />
              <Grid item xs={12} ms={6} md={4} lg={3} />
              <Grid item xs={12} ms={6} md={4} lg={3} />
            </Grid>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    services: allStrapiServices {
      nodes {
        id
        price
        title
        subTitle
      }
    }
  }
`

export default ServicesSection
