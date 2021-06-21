import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Grid, makeStyles } from "@material-ui/core"

import PostCard from "./PostCard"
import { BLOG } from "../navigation/sitemap"

const useStyes = makeStyles({
  container: {
    width: "100%",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
})

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
            justify="center"
            className={classes.container}
          >
            {data.articles.edges.map(el => (
              <Grid item>
                <Link to={`${BLOG}/${el.node.slug}`} className={classes.link}>
                  <PostCard
                    image={el.node.image.localFile.publicURL}
                    author={el.node.author.name}
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
