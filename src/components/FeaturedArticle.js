import React, { useRef, useState, useEffect } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "98px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "708px",
      paddingBottom: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      paddingBottom: "38px",
    },
  },
  title: {
    visibility: "hidden",
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
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "55px",
      marginBottom: "33px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "20px",
    },
    [theme.breakpoints.between(450, 0)]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-300%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
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
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px 8px 14px",
      marginTop: "15px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    overflow: "hidden",
    width: "980px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "686px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "425px",
    },
    [theme.breakpoints.between(450, 600)]: {
      width: "325px",
    },
    [theme.breakpoints.between(350, 450)]: {
      width: "280px",
    },
    [theme.breakpoints.between(0, 350)]: {
      width: "80%",
    },
  },
  titleCard: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    paddingLeft: "26px",
    lineHeight: "28px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
      paddingLeft: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      paddingLeft: "9px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    cursor: "pointer",
    lineHeight: "15px",
    paddingLeft: "26px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      paddingLeft: "9px",
      lineHeight: "11px",
    },
  },
  img: {
    height: "auto",
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
    [theme.breakpoints.down("sm")]: {
      gap: "18px",
      padding: "12px 0 18px 12px",
    },
  },
}))

const FeaturedArticle = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const context = React.useContext(I18nextContext);
  const { t } = useI18next();
  const lang = context.language;
  const [contentReviews, setContentReviews] = useState([]);


  const getStrapi = async () => {
    if (lang === "es") {
      const url = `http://localhost:1337/articles?_locale=es-VE`;
      const resp = await fetch(url).then(response => response.json())
        .then(data => { setContentReviews(data) });

    }
  }

  //console.log(contentReviews)

  useEffect(() => {
    getStrapi()
  }, [lang])


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
                    gatsbyImageData(quality: 25)
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
        const featureArticle = articles
          .sort((a, b) => {
            return new Date(b.node.created_at) - new Date(a.node.created_at)
          })
          .slice(0, 1)
        return (
          <>
            {(lang === "en") ?

              <Box ref={ref} className={classes.container}>
                <Typography className={isVisible ? classes.title2 : classes.title}>
                  {t("blog_featuredArticle_title")}
                </Typography>
                <Box className={classes.cardContainer}>
                  <GatsbyImage
                    className={classes.img}
                    alt="Feature Article"
                    image={getImage(featureArticle[0].node.image[0].localFile)}
                  />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.titleCard}>
                      {featureArticle[0].node.title}
                    </Typography>
                    <Link
                      to={`${BLOG}/${featureArticle[0].node.slug}`}
                      style={{ textDecoration: "none" }}
                      className={classes.link}
                    >
                      {t("common_lastestPosts_blogPost_button_readMore")}
                    </Link>
                  </Box>
                </Box>
              </Box>
              :
              <Box ref={ref} className={classes.container}>
                <Typography className={isVisible ? classes.title2 : classes.title}>
                  {t("blog_featuredArticle_title")}
                </Typography>
                <Box className={classes.cardContainer}>
                  {/* <GatsbyImage
              className={classes.img}
              alt="Feature Article"
              image={getImage(featureArticle[0].node.image[0].localFile)}
            /> */}
                  <img
                    src={contentReviews[0]?.image[0].url}
                    //src={node.image[0].localFile.publicURL}
                    className={classes.img}
                    alt="Feature Article"
                  />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.titleCard}>
                      {/* {featureArticle[0].node.title} */}
                      {contentReviews[0]?.title}
                    </Typography>
                    <Link
                      //to={`${BLOG}/${featureArticle[0].node.slug}`}
                      to={`${BLOG}/${contentReviews[0]?.Key}`}
                      style={{ textDecoration: "none" }}
                      className={classes.link}
                    >
                      {t("common_lastestPosts_blogPost_button_readMore")}
                    </Link>
                  </Box>
                </Box>
              </Box>
            }
          </>
        )
      }}
    />
  )
}
export default FeaturedArticle
