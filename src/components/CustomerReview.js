import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { graphql, StaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "swiper/css"
import "swiper/css/pagination"
import "../css/carousel.css"

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
  containerInfo: {
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "32px 50px 25px 50px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    width: "max-content",
    height: "inherit",
    boxSizing: "border-box",
  },
})

const CustomerReview = () => {
  const classes = useStyles()

  return (
    <StaticQuery
      query={query}
      render={data => {
        const reviews = data.reviews.nodes
        return (
          <>
            {/* <Swiper
              slidesPerView={4}
              spaceBetween={60}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
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
                </SwiperSlide>
              ))}
            </Swiper> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              style={{
                width: "80%",

                boxSizing: "content-box",
              }}
              modules={[Pagination]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
            >
              {reviews.map((review, index) => (
                <SwiperSlide
                  key={index}
                  style={{ height: "400px", transform: "scale(1)" }}
                >
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
                </SwiperSlide>
              ))}
              ...
            </Swiper>
          </>
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
