import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
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
    width: "max-content",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    textTransform: "uppercase",
  },
  link: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginTop: "auto",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "26px 0px 32px 37px",
  },
  img: {
    width: "fit-contain",
    height: "210px",
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
        const articlesSort = articles.sort((a, b) => {
          return new Date(b.node.created_at) - new Date(a.node.created_at)
        })

        return (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {articlesSort.map(({ node }, index) => (
              <SwiperSlide key={index}>
                <Box className={classes.container}>
                  <img
                    src={node.image[0].localFile.publicURL}
                    className={classes.img}
                  />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.title}>
                      {node.title}
                    </Typography>
                    <Link className={classes.link}>READ MORE →</Link>
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
