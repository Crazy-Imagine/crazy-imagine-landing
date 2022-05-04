import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles({
  review: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "white",
  },

  customerName: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
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
  },
  customerAvatar: {
    width: 100,
    height: 100,
    marginRight: 24,
    borderRadius: "50%",
  },
  container: {
    color: "#FFFFFF",
  },
})

const CustomerReview = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeReview, setActiveReview] = useState(0)

  return (
    <StaticQuery
      query={query}
      render={data => {
        const reviews = data.reviews.nodes
        const handleReviewChange = review => {
          setActiveReview(review)
        }
        return (
          <Box className={classes.container}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeReview}
              onChangeIndex={handleReviewChange}
              enableMouseEvents
            >
              {reviews.map((review, index) => (
                <Box key={index}>
                  {Math.abs(activeReview - index) <= 2 ? (
                    <Box>
                      <Typography className={classes.review}>
                        {review.review}
                      </Typography>
                      <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <GatsbyImage
                            alt={review.name}
                            image={getImage(review.avatar.localFile)}
                            className={classes.customerAvatar}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h5"
                            className={classes.customerName}
                          >
                            {review.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            className={classes.customerOcupation}
                          >
                            {review.ocupation}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : null}
                </Box>
              ))}
            </AutoPlaySwipeableViews>
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
