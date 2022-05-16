import React from "react"
import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"
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
    backgroundColor: "#FFFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    height: "650px",
    overflow: "hidden",
    width: "980px",
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
}))

const ProjectSection = () => {
  const classes = useStyles()
  SwiperCore.use([Keyboard, Mousewheel])
  const mySwiperConfig = {
    mousewheel: {
      forceToAxis: true,
    },
  }
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
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              style={{ backgroundColor: "#FFFFFF" }}
              loop={true}
              modules={[Pagination]}
              keyboard={{ enabled: true }}
              mousewheel
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
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`
export default ProjectSection
