import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { BLOG } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "21px",
      textAlign: "center",
    },
  },
  container: {
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "14px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "18px",
    },
  },
  layout: {
    paddingTop: "115px",
    paddingRight: "100px",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "30px",
      paddingTop: "65px",
      paddingRight: "30px",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingTop: "55px",
      paddingRight: "20px",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      paddingTop: "35px",
      paddingRight: "10px",
      width: "80%",
    },
  },
  listTitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    paddingTop: "12px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "12px",
      paddingTop: "10px",
    },
  },
}))

const RecentlyPosted = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query {
          article: allStrapiArticle {
            edges {
              node {
                id
                description
                title
                slug
                created_at
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 72
                        height: 76
                        placeholder: BLURRED
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.article.edges
        const articlesSort = articles.sort((a, b) => {
          return new Date(b.node.created_at) - new Date(a.node.created_at)
        })
        return (
          <Box className={classes.layout}>
            <Typography className={classes.title}>Recently Posted</Typography>
            {articlesSort.slice(0, 4).map(el => (
              <Box key={el.node.id} marginBottom="24px">
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Box className={classes.container}>
                      <Typography className={classes.listTitle}>
                        {el.node.title}
                      </Typography>
                      <Link
                        className={classes.link}
                        style={{ textDecoration: "none" }}
                        to={`${BLOG}/${el.node.slug}`}
                      >
                        READ MORE →
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        )
      }}
    />
  )
}

export default RecentlyPosted
