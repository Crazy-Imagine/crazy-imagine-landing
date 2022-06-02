import React from "react"
import { Box, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { graphql, Link, StaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core"
import { BLOG } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    flex: "1 0 40%",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "inherit",
    maxWidth: "480px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      maxWidth: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 0 48%",
      borderRadius: "7px",
      maxWidth: "250px",
      gap: "7px",
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
  wrapperTitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "38px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  wrapperContainer: {
    width: "75%",
    margin: "auto",
    marginTop: "83px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  img: {
    backgroundColor: "#27AAE1",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "147px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "#F9F9F9",
    gap: "21px",
  },
  loadButton: {
    background: "#797EF6",
    borderRadius: "100px",
    alignSelf: "center",
    marginTop: "71px",
    marginBottom: "105px",
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      marginBottom: "75px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      marginBottom: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      "& > span": {
        fontSize: "9px",
        lineHeight: "9px",
      },
      marginTop: "30px",
      marginBottom: "45px",
    },
  },
}))

const BlogArticle = () => {
  const classes = useStyles()

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
          .slice(0, 6)
        return (
          <Box className={classes.wrapperContainer}>
            <Typography className={classes.wrapperTitle}>
              Browse All Articles
            </Typography>
            <Box className={classes.wrapper}>
              {articlesSort.map(({ node }, index) => (
                <Box key={index} className={classes.container}>
                  <img
                    src={node.image[0].localFile.publicURL}
                    alt="Blog Image"
                    className={classes.img}
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
                      READ MORE →
                    </Link>
                  </Box>
                </Box>
              ))}
            </Box>
            <Button className={classes.loadButton}>LOAD MORE</Button>
          </Box>
        )
      }}
    />
  )
}

export default BlogArticle
