import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { graphql, StaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "swiper/css"
import "swiper/css/pagination"
import "../css/carousel.css"

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2px",
    [theme.breakpoints.down("md")]: {
      gap: "1px",
    },
  },
  icon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#FFD337",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      lineHeight: "13px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
      lineHeight: "8px",
    },
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
    [theme.breakpoints.down("md")]: {
      padding: "22px 35px 18px 35px",
      gap: "14px",
      height: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "14px 22px 11px 22px",
      gap: "9px",
      height: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "inherit",
    },
  },
  swiperSlide: {
    height: "450px",
    transform: "scale(1)",
    [theme.breakpoints.between(960, 1280)]: {
      height: "325px",
    },
    [theme.breakpoints.between(701, 959)]: {
      height: "185px",
    },
    [theme.breakpoints.between(450, 700)]: {
      height: "175px",
    },
    [theme.breakpoints.between(400, 450)]: {
      height: "220px",
    },
    [theme.breakpoints.between(200, 399)]: {
      height: "160px",
    },
    [theme.breakpoints.between(0, 200)]: {
      height: "145px",
    },
  },
}))

const CustomerReview = () => {
  const classes = useStyles()
  SwiperCore.use([Keyboard, Mousewheel])

  return (
    <StaticQuery
      query={query}
      render={data => {
        const reviews = data.reviews.nodes
        return (
          <>
            <Swiper
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 2,
                },
                700: {
                  slidesPerView: 3,
                },
              }}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              style={{
                width: "80%",
                boxSizing: "content-box",
              }}
              mousewheel
              keyboard={{ enabled: true }}
              modules={[Pagination]}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className={classes.swiperSlide}>
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
