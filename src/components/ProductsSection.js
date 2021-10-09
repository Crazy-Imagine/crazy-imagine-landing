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
  Typography,
} from "@material-ui/core"
import ProductsServicesDialog from "./ProductsServicesDialog"

const useStyles = makeStyles(theme => ({
  cardContainer: {
    transition: "linear 300ms",
    minHeight: 835,
    maxHeight: 835,
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
    minHeight: 156,
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
    variant: open,
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
                            <ProductsServicesDialog
                              title={item.title}
                              open={open}
                              state={state}
                              handleClose={handleClose}
                              handleSubmit={handleSubmit}
                              classes={classes}
                            />
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
