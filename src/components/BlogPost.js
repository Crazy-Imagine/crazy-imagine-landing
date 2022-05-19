import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"
import "swiper/css"
import "swiper/css/pagination"
import "../css/carousel.css"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "inherit",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
  link: {
    fontFamily: "Nexa",
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
  },
  img: {
    backgroundColor: "#27AAE1",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "147px",
    },
  },
  carousel: {
    height: "450px",
    [theme.breakpoints.down("md")]: {
      height: "315px",
    },
  },
}))

const BlogPost = () => {
  const classes = useStyes()
  return (
    <StaticQuery
      query={graphql`
        query {
          articles: allStrapiArticle {
            edges {
              node {
                id
                description
                title
                slug
                created_at
                author {
                  name
                }
                image {
                  localFile {
                    publicURL
                  }
                }
                category {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.articles.edges
        const articlesSort = articles
          .sort((a, b) => {
            return new Date(b.node.created_at) - new Date(a.node.created_at)
          })
          .slice(0, 4)

        SwiperCore.use([Keyboard, Mousewheel])

        return (
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            mousewheel
            modules={[Pagination]}
            className="mySwiper"
            style={{ width: "80%", boxSizing: "content-box" }}
          >
            {articlesSort.map(({ node }, index) => (
              <SwiperSlide key={index} className={classes.carousel}>
                <Box className={classes.container}>
                  <img
                    src={node.image[0].localFile.publicURL}
                    className={classes.img}
                  />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.title}>
                      {node.title}
                    </Typography>
                    <Link className={classes.link}>VIEW PROJECT →</Link>
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

export default BlogPost
