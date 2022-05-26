import React from "react"
import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
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
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "708px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  title: {
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
  button: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "#B0B4FF",
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
  },
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

const ProjectSection = () => {
  const classes = useStyles()
  SwiperCore.use([Keyboard])

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Box className={classes.container}>
            <Typography className={classes.title}>Previous Projects</Typography>
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
              {data.projects.nodes.map((el, index) => (
                <SwiperSlide key={index} style={{ backgroundColor: "#FFFFFF" }}>
                  {console.log(data.projects.nodes[index].images[0].localFile)}
                  <Box className={classes.carouselContainer}>
                    <GatsbyImage
                      alt="About the project"
                      image={getImage(
                        data.projects.nodes[index].images[0].localFile
                      )}
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
                      >
                        VIEW PROJECT →
                      </Link>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
              <Button className={classes.button}>ALL PROJECTS</Button>
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
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`
export default ProjectSection
