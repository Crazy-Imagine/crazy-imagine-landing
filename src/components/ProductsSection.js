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
  TextField,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  gridContainer: (props) => ({
    zIndex: props.variant ? "0" : 9999
  }),
  cardContainer: {
    transition: "linear 300ms",
    minHeight: 835,
    maxHeight: 835,
    // zIndex: 9999,
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
    marginBottom: 15,
    fontFamily: "Gotham",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 32,
    fontFamily: "poppins",
    marginBottom: 30,
    textAlign: "center",
    minHeight: 126,
    display: "flex",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "gotham-book",
    color: "#23aae1",
    marginBottom: 17,
    textAlign: "center",
    boxShadow: "5px 7px 21px -3px grey",
  },
  buyButton: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Gotham",
    padding: "17px 25px 22px 27px",
    margin: "30px 0px",
    backgroundColor: "#23aae1",
    color: "white",
    zIndex: 9999,
    "&:hover": {
      backgroundColor: "#1893c5",
    },
  },
  paragraphs: {
    fontSize: 20,
    fontFamily: "gotham-book",
    lineHeight: "22px",
  },
  boxLine: {
    backgroundColor: "black",
  },
}))

const ProductsSection = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles({
    variant: open
  })
  const [state, handleSubmit] = useForm("xzbyobpo")

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
        const products = data.products.nodes
        return (
          <Box
            marginTop={{ md: "40px", lg: "300px" }}
            px={{ md: "20px", lg: "40px" }}
          >
            <Typography variant="h2" className={classes.pricipalTitle}>
              Products
            </Typography>
            <Box width="100%" display="flex" justifyContent="center">
              <Box
                height="34px"
                width="1px"
                className={classes.boxLine}
                marginBottom="30px"
              />
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {products &&
                products.map(item => (
                  <Grid
                    item
                    xs={12}
                    ms={6}
                    md={4}
                    lg={3}
                    justifyContent="center"
                    alignItems="center"
                    className={classes.gridContainer}
                  >
                    <Card className={classes.cardContainer}>
                      <Box p="15px">
                        <CardContent>
                          <Typography variant="h3" className={classes.title}>
                            {item.title}
                          </Typography>

                          <Typography variant="h5" className={classes.subTitle}>
                            {item.subTitle ? item.subTitle : ""}
                          </Typography>

                          <Typography
                            variant="h2"
                            className={classes.productPrice}
                          >
                            {item.price}
                          </Typography>

                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
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
                              <DialogTitle id="form-dialog-title">
                                Subscribe
                              </DialogTitle>
                              <form
                                onSubmit={handleSubmit}
                                action="https://formspree.io/f/xzbyobpo"
                              >
                                <DialogContent>
                                  <DialogContentText>
                                    To subscribe to this website, please enter
                                    your email address here. We will send
                                    updates occasionally.
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
                                      value={item.title}
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
                            {item.description ? item.description : ""}
                          </ReactMarkdown>
                        </CardContent>
                      </Box>
                    </Card>
                  </Grid>
                ))}
               <Grid item xs={12} ms={6} md={4} lg={3} />
              {/* // <Grid item xs={12} ms={6} md={4} lg={3} />
              // <Grid item xs={12} ms={6} md={4} lg={3} /> */} 
            </Grid>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    products: allStrapiProducts {
      nodes {
        description
        id
        price
        title
        subTitle
      }
    }
  }
`

export default ProductsSection
