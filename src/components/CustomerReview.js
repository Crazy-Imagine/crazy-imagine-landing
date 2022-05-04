import React, { useState } from "react"
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import { graphql, StaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles({
  review: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#193174",
    marginBottom: "auto",
  },
  customerName: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
    alignSelf: "flex-end",
    color: "#27AAE1",
  },
  customerOcupation: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
    alignSelf: "flex-end",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2px",
  },
  icon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#FFD337",
  },
  container: {
    display: "flex",
    gap: "20px",
  },
  root: {
    flexGrow: "1",
    background: "#193174",
    marginBottom: "54px",
  },
  containerInfo: {
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "32px 50px 25px 50px",
    borderRadius: "14px",
    width: "490px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#FFFFFF",
    /* alignItems: "stretch",
    alignContent: "stretch", */
    justifyContent: "space-between",
  },
  cont: {
    display: "flex",
    flexDirection: "column",
    width: "78%",
    gap: "60px",
    background: "#193174",
  },
})

const CustomerReview = () => {
  const theme = useTheme()
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        const reviews = data.reviews.nodes
        return (
          <Box className={classes.cont}>
            <Box className={classes.container}>
              {reviews.map((review, index) => (
                <Box key={index} display="flex">
                  <Box className={classes.containerInfo}>
                    <Box className={classes.iconsContainer}>
                      <FontAwesomeIcon
                        size="1x"
                        icon={faStar}
                        className={classes.icon}
                      />
                      <FontAwesomeIcon
                        size="1x"
                        icon={faStar}
                        className={classes.icon}
                      />
                      <FontAwesomeIcon
                        size="1x"
                        icon={faStar}
                        className={classes.icon}
                      />
                      <FontAwesomeIcon
                        size="1x"
                        icon={faStar}
                        className={classes.icon}
                      />
                    </Box>
                    <Typography className={classes.review}>
                      {review.review}
                    </Typography>
                    <Box>
                      <Typography className={classes.customerName}>
                        {review.name}
                      </Typography>
                      <Typography className={classes.customerOcupation}>
                        {review.ocupation}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={activeStep}
              className={classes.root}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 5}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
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
              }
            />
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    reviews: allStrapiReviews {
      nodes {
        name
        ocupation
        review
        id
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default CustomerReview
