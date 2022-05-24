import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "708px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "439px",
    },
    [theme.breakpoints.down("xs")]: {
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
      fontWeight: "17px",
      fontSize: "17px",
      lineHeight: "17px",
      marginTop: "34px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: "10px",
      fontSize: "10px",
      lineHeight: "10px",
      marginTop: "25px",
      marginBottom: "12px",
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
    [theme.breakpoints.down("sm")]: {
      padding: "6px 9px 5px 9px",
      marginTop: "15px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3px 3px 3px 3px",
      "& > span": {
        fontSize: "4px",
        lineHeight: "inherit",
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
    [theme.breakpoints.down("xs")]: {
      height: "180px",
      width: "250px",
      borderRadius: "8px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "12px",
      paddingLeft: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
      lineHeight: "7px",
      paddingLeft: "4px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    paddingLeft: "26px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      paddingLeft: "18px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      paddingLeft: "9px",
      lineHeight: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "4px",
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
      gap: "11px",
      padding: "12px 0 17px 12px",
    },
  },
}))

const FeaturedArticle = () => {
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
        const featureArticle = articles
          .sort((a, b) => {
            return new Date(b.node.created_at) - new Date(a.node.created_at)
          })
          .slice(0, 1)
        console.log("Article: ", featureArticle[0].node)
        return (
          <Box className={classes.container}>
            <Typography className={classes.title}>Featured Article</Typography>
            <Box className={classes.cardContainer}>
              <img
                className={classes.img}
                src={featureArticle[0].node.image[0].localFile.publicURL}
              />
              <Box className={classes.textContainer}>
                <Typography className={classes.titleCard}>
                  {featureArticle[0].node.title}
                </Typography>
                <Link className={classes.link}>READ MORE →</Link>
              </Box>
            </Box>
          </Box>
        )
      }}
    />
  )
}
export default FeaturedArticle
