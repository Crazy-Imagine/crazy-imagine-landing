import React from "react"
import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import "../css/carousel.css"

// import required modules
import { Pagination } from "swiper"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1012px",
    backgroundColor: "#E5E5E5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "40px",
    lineHeight: "40px",
    marginTop: "84px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "47px",
  },
  button: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    marginTop: "40px",
    alignSelf: "center",
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
  },
  carouselContainer: {
    background: "#FFFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    height: "650px",
    overflow: "hidden",
    width: "980px",
    height: "650px",
    display: "flex",
    flexDirection: "column",
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25.71px",
    padding: "40px 0 54px 54px",
  },
  img: {
    height: "500px",
  },
  swiperWidth: {
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
  swiperSlideColor: {
    backgroundColor: "#E5E5E5 !important",
  },
}))

const ProjectSection = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataImage = data.homePage.projectsImage.localFile
        console.log(dataImage)
        const image = getImage(dataImage)
        return (
          <Box className={classes.container}>
            <Typography className={classes.title}>Previous Projects</Typography>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.projects.nodes.map((el, index) => (
                <SwiperSlide key={index}>
                  <Box className={classes.carouselContainer}>
                    <img
                      src="/static/f601305e743f005a24b1a4892d9a831c/0c0be/bg_Projectshome_736214fe83.jpg"
                      className={classes.img}
                    ></img>
                    <Box className={classes.textContainer}>
                      <Typography className={classes.titleCarousel}>
                        {el.title}
                      </Typography>
                      <Link className={classes.link}>VIEW PROJECT →</Link>
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default ProjectSection
