import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Button, Grid, makeStyles, Box, Hidden } from "@material-ui/core"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons"

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
  carouselButton: {
    backgroundColor: "transparent",
    boxShadow: "none",
    height: 500,
    "&:hover": {
      color: "#23aee1",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "transparent",
    },
  },
}))

const BlogPost = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
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
          <Box display="flex" alignItems="center">
            <Hidden smDown>
              <Button
                variant="contained"
                startIcon={<ArrowBackOutlined />}
                onClick={handleBack}
                disabled={activeStep === 0}
                className={classes.carouselButton}
              />
            </Hidden>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              className={classes.container}
            >
              {articlesSort[activeStep] ? (
                <>
                  <Grid item key={articlesSort[activeStep].node.id}>
                    <Link
                      to={`${BLOG}/${articlesSort[activeStep].node.slug}`}
                      className={classes.link}
                    >
                      <PostCard
                        image={
                          articlesSort[activeStep].node.image[0]?.localFile
                            ?.publicURL
                        }
                        author={articlesSort[activeStep].node.author.name}
                        tags={articlesSort[activeStep].node.category.name}
                        title={articlesSort[activeStep].node.title}
                        description={articlesSort[activeStep].node.description}
                      />
                    </Link>
                  </Grid>
                  <Grid item key={articlesSort[activeStep + 1].node.id}>
                    <Link
                      to={`${BLOG}/${articlesSort[activeStep + 1].node.slug}`}
                      className={classes.link}
                    >
                      <PostCard
                        image={
                          articlesSort[activeStep + 1]?.node.image[0]?.localFile
                            ?.publicURL
                        }
                        author={articlesSort[activeStep + 1].node.author.name}
                        tags={articlesSort[activeStep + 1]?.node.category.name}
                        title={articlesSort[activeStep + 1]?.node.title}
                        description={
                          articlesSort[activeStep + 1]?.node.description
                        }
                      />
                    </Link>
                  </Grid>
                  <Grid item key={articlesSort[activeStep + 2].node.id}>
                    <Link
                      to={`${BLOG}/${articlesSort[activeStep + 2].node.slug}`}
                      className={classes.link}
                    >
                      <PostCard
                        image={
                          articlesSort[activeStep + 2]?.node.image[0]?.localFile
                            ?.publicURL
                        }
                        author={articlesSort[activeStep + 2].node.author.name}
                        tags={articlesSort[activeStep + 2]?.node.category.name}
                        title={articlesSort[activeStep + 2]?.node.title}
                        description={
                          articlesSort[activeStep + 2]?.node.description
                        }
                      />
                    </Link>
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </Grid>
            <Hidden smDown>
              <Button
                variant="contained"
                startIcon={<ArrowForwardOutlined />}
                onClick={handleNext}
                disabled={activeStep === articles.length - 3}
                className={classes.carouselButton}
              />
            </Hidden>
          </Box>
        )
      }}
    />
  )
}

export default BlogPost
