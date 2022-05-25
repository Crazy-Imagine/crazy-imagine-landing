import React from "react"
import { Box, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    /* flex: "1 0 40%", */
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "inherit",
    width: "480px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      gap: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "inherit",
      borderRadius: "7px",
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
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#193173",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "6px",
      lineHeight: "6px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      lineHeight: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4px",
      lineHeight: "4px",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    background: "#F9F9F9",
    gap: "21px",
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
          <Box>
            <Typography className={classes.wrapperTitle}>
              Browse All Articles
            </Typography>
            <Box className={classes.wrapper}>
              {articlesSort.map(({ node }, index) => (
                <Box key={index} className={classes.container}>
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
              ))}
            </Box>
          </Box>
        )
      }}
    />
  )
}

export default BlogArticle
