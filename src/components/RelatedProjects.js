import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import "swiper/css"
import "swiper/css/pagination"
import "../css/carousel.css"
import "../css/swiper-bullet.css"
import { PROJECTS } from "../navigation/sitemap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "inherit",
    width: "450px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "26px 25px 32px 37px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  img: {
    backgroundColor: "#27AAE1",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "147px",
    },
  },
  slider: {
    width: "80%",
    boxSizing: "content-box",
    [theme.breakpoints.between(0, 301)]: {
      width: "75%",
    },
  },
  slide: {
    [theme.breakpoints.between(0, 400)]: {
      width: "75%",
    },
  },
  carousel: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
}))

const RelatedProjects = () => {
  const classes = useStyes()
  return (
    <StaticQuery
      query={graphql`
      query {
        homePage: strapiHomepage {
          projectsImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 5)
              }
            }
          }
        }
        projects: allStrapiProjects(limit: 8) {
          nodes {
            title
            slug
            description
            id
            images {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 30, height: 210)
                }
              }
            }
          }
        }
      }
      `}
      render={data => {
        const projects = data.projects.nodes
        SwiperCore.use([Keyboard])


        return (
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              700: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            modules={[Pagination]}
            className={`${classes.slider} purpleBullet`}
          >
            {projects.map((el, index) => (
              <SwiperSlide key={index} className={classes.slide}>
                <Box className={classes.container}>
                  <GatsbyImage
                    alt="About the project"
                    image={getImage(el.images[0].localFile)}
                    style={{
                      objectFit: "contain",
                      backgroundColor: "#27AAE1",
                    }}
                    imgStyle={{
                      objectFit: "contain",
                      backgroundColor: "#27AAE1",
                    }}
                  />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.title}>
                      {el.title}
                    </Typography>
                    <Link
                      to={`${PROJECTS}/${el.slug}`}
                      className={classes.link}
                      style={{ textDecoration: "none" }}
                    >
                      READ MORE →
                    </Link>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      }}
    />
  )
}

export default RelatedProjects
