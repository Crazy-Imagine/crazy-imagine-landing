import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles({
  review: {
    color: "white",
    fontFamily: "Myriad-pro",
    marginBottom: 24,
    fontSize: 16,
  },
  customerName: {
    color: "white",
    fontFamily: "Gotham-ultra",
    fontSize: 30,
  },
  customerOcupation: {
    color: "#23aae1",
    textAlign: "initial",
    fontFamily: "Gotham-Medium",
    fontSize: 20,
  },
  customerAvatar: {
    width: 100,
    height: 100,
    marginRight: 24,
    borderRadius: "50%",
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
          <Box>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeReview}
              onChangeIndex={handleReviewChange}
              enableMouseEvents
            >
              {reviews.map((review, index) => (
                <Box key={review.id}>
                  {Math.abs(activeReview - index) <= 2 ? (
                    <Box>
                      <Typography className={classes.review}>
                        {review.review}
                      </Typography>
                      <Grid
                        container
                        spacing={0}
                        justify="center"
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
