import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

import { useForm } from "@formspree/react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import ProductsServicesDialog from "./ProductsServicesDialog"

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
  open,
  state,
}) => {
  const classes = useStyles({
    variant: open,
  })
  return (
    <Grid
      item
      xs={12}
      ms={6}
      md={4}
      lg={3}
      justifyContent="center"
      alignItems="center"
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
              <ProductsServicesDialog
                title={title}
                open={open}
                state={state}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                classes={classes}
              />
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
          <Box marginTop="40px" px={{ md: "20px", lg: "40px" }}>
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
const query = []
// const query = graphql`
//   query {
//     services: allStrapiServices {
//       nodes {
//         id
//         price
//         title
//         subTitle
//       }
//     }
//   }
// `

export default ServicesSection
