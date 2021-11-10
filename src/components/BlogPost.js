import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Grid, makeStyles } from "@material-ui/core"

import PostCard from "./PostCard"
import { BLOG } from "../navigation/sitemap"

const useStyes = makeStyles(theme => ({
  container: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

const BlogPost = () => {
  const classes = useStyes()
  return (
    <StaticQuery
      query={graphql`
        query {
          articles: allStrapiArticle(limit: 3) {
            edges {
              node {
                id
                description
                title
                slug
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
        return (
          <Grid
            container
            spacing={4}
            justifyContent="center"
            className={classes.container}
          >
            {data.articles.edges.map(el => (
              <Grid item key={el.node.id}>
                <Link to={`${BLOG}/${el.node.slug}`} className={classes.link}>
                  <PostCard
                    image={el.node.image[0].localFile.publicURL}
                    author="Blas Hernandez"
                    tags={el.node.category.name}
                    title={el.node.title}
                    description={el.node.description}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        )
      }}
    />
  )
}

export default BlogPost
