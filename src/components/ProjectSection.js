import React, { useRef } from "react"
import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import { PROJECTS } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import "swiper/css"
import "swiper/css/pagination"
import "../css/swiper-bullet.css"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1012px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "708px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  title: {
    visibility: "hidden",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    marginTop: "84px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "47px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "28px",
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "55px",
      marginBottom: "33px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "22px",
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "20px",
    },
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    marginTop: "84px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "47px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "28px",
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "55px",
      marginBottom: "33px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "22px",
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "20px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  button: props => ({
    display: props.btn ? "initial" : "none",
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px 8px 14px",
      marginTop: "15px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 9px 5px 9px",
      marginTop: "15px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  }),
  carouselContainer: {
    backgroundColor: "#FFFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    width: "525px",
    height: "auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "325px",
    },
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
    [theme.breakpoints.between(0, 300)]: {
      fontWeight: "18px",
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  slide: {
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.between(0, 400)]: {
      width: "75%",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    padding: "28px 0 38px 28px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      padding: "20px 0 27px 20px",
    },
  },
}))

const ProjectSection = ({ title, btn }) => {
  const classes = useStyles({ btn })
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  SwiperCore.use([Keyboard])

  return (
    <StaticQuery
      query={query}
      render={data => {
        const projects = data.projects.nodes.slice(0, 4)

        return (
          <Box ref={ref} className={classes.container}>
            <Typography className={isVisible ? classes.title2 : classes.title}>
              {title}
            </Typography>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              style={{ backgroundColor: "#FFFFFF" }}
              loop={true}
              modules={[Pagination]}
              keyboard={{ enabled: true }}
              className={`${classes.container} purpleBullet`}
            >
              {projects.map((el, index) => (
                <SwiperSlide key={index} className={classes.slide}>
                  <Box className={classes.carouselContainer}>
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
                      <Typography className={classes.titleCarousel}>
                        {el.title}
                      </Typography>
                      <Link
                        className={classes.link}
                        style={{ textDecoration: "none" }}
                        to={`${PROJECTS}/${el.slug}`}
                      >
                        VIEW PROJECT →
                      </Link>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
              {btn && (
                <Link
                  to={`${PROJECTS}`}
                  style={{ textDecoration: "none", alignSelf: "center" }}
                >
                  <Button className={classes.button}>ALL PROJECTS</Button>
                </Link>
              )}
            </Swiper>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    homePage: strapiHomepage {
      projectsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 30)
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
              gatsbyImageData(quality: 30)
              fluid (maxWidth: 300, maxHeight: 480){
                src
                srcSet
                sizes
                srcWebp
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectSection
