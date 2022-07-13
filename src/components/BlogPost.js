import React, { useState, useEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import "swiper/css"
import "swiper/css/pagination"
import "../css/carousel.css"
import "../css/swiper-bullet.css"
import { BLOG } from "../navigation/sitemap"
import { useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",

    width: "450px",
    height: "368px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      height: "inherit",
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
    [theme.breakpoints.down(300, 0)]: {
      fontSize: "14px",
      lineHeight: "14px",
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
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "12px",
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
    with: "450px",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      width: "387px",
      height: "147px",
    },
  },
  slider: {
    width: "75.5%",
    boxSizing: "content-box",
    [theme.breakpoints.between(0, 600)]: {
      width: "65%",
    },
  },
  carousel: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
}))

const BlogPost = ({ bulletClass }) => {
  const classes = useStyes()
  const context = React.useContext(I18nextContext);
  //useI18next(I18nextContext)
  const { t } = useI18next();
  //const context = React.useContext(I18nextContext);
  const lan = context.language;
  const [BlogPost, setBlogPost] = useState([]);

  const getStrapi = async () => {
    if (lan === "es") {
      const urlBP = `http://3.91.249.33:1337/articles?_locale=es-VE` || `http://localhost:1337/articles?_locale=es-VE`;
      const respp = await fetch(urlBP).then(resp => resp.json())
        .then(data => { setBlogPost(data) });

    }
  }

  useEffect(() => {
    getStrapi()
  }, [lan])

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
                  childImageSharp {
                    gatsbyImageData(quality: 5)
                  }
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
              900: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            modules={[Pagination]}
            className={`${classes.slider} ${bulletClass}`}
          >
            {articlesSort.map(({ node }, index) => (
              <SwiperSlide key={index} className={classes.carousel}>
                <Box className={classes.container}>
                  {(lan === "en") ?
                    <>
                      <img
                        src={node.image[0].localFile.publicURL}
                        className={classes.img}
                        alt="Blog"
                      />
                      <Box className={classes.textContainer}>
                        <Typography className={classes.title}>
                          {node.title}
                        </Typography>
                        <Link
                          to={`${BLOG}/${node.slug}`}
                          className={classes.link}
                          style={{ textDecoration: "none" }}
                        >
                          {t("common_lastestPosts_blogPost_button_readMore")}
                        </Link>
                      </Box>
                    </>
                    :
                    <>
                      <img
                        src={BlogPost[index]?.image[0].url}
                        className={classes.img}
                        alt="Blog"
                      />
                      <Box className={classes.textContainer}>
                        <Typography className={classes.title}>
                          {BlogPost[index]?.title}
                        </Typography>
                        <Link
                          to={`${BLOG}/${BlogPost[index]?.Key}`}
                          className={classes.link}
                          style={{ textDecoration: "none" }}
                        >
                          {t("common_lastestPosts_blogPost_button_readMore")}
                        </Link>
                      </Box>
                    </>
                  }
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
