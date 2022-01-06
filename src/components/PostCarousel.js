import React, { useState } from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core"

import { graphql, Link, StaticQuery } from "gatsby"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons"
import { BLOG } from "../navigation/sitemap"
import { getRandomNumbers } from "../helpers/getRandomNumbers"

const useStyles = makeStyles({
  bgImage: {
    width: "100%",
    height: 250,
  },
  title: {
    fontFamily: "Gotham-Bold",
    fontSize: 50,
    color: "white",
    width: 465,
    height: 58,
    overflow: "hidden",
    filter: "drop-shadow(1px 4px 6px black)",
  },
  steps: {
    fontFamily: "Roboto",
    fontSize: 26,
    color: "white",
    filter: "drop-shadow(1px 4px 6px black)",
  },
  icon: {
    fontSize: 50,
    color: "#9fd6f6",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "flex-end",
  },
  resetLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const PostCarousel = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        const articles = data.articles.nodes
        const articlesSort = articles.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
        const sortRandom = getRandomNumbers(0, articlesSort.length - 1)
        const maxSteps = articles.length
        return (
          <Box>
            <Grid container>
              <Grid item md={6}>
                <Link
                  to={`${BLOG}/${articlesSort[sortRandom]?.slug}`}
                  className={classes.resetLink}
                >
                  <BgImage
                    image={getImage(
                      articlesSort[sortRandom].image[0].localFile
                    )}
                    alt={articlesSort[sortRandom].title}
                    className={classes.bgImage}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      justifyContent="center"
                      marginRight="122px"
                      height="100%"
                    >
                      <Typography className={classes.steps}>
                        Previus Post
                      </Typography>
                      <Box display="flex">
                        <Button
                          size="small"
                          onClick={handleBack}
                          disabled={activeStep === 0}
                          className={classes.icon}
                        >
                          {theme.direction === "rtl" ? (
                            <ArrowForwardOutlined />
                          ) : (
                            <ArrowBackOutlined />
                          )}
                        </Button>

                        <Typography className={classes.title}>
                          {articlesSort[sortRandom].title}
                        </Typography>
                      </Box>
                    </Box>
                  </BgImage>
                </Link>
              </Grid>
              <Grid item md={6}>
                <Link
                  to={`${BLOG}/${articlesSort[sortRandom + 1].slug}`}
                  className={classes.resetLink}
                >
                  <BgImage
                    image={getImage(
                      articlesSort[sortRandom + 1].image[0].localFile
                    )}
                    alt={articlesSort[sortRandom + 1].title}
                    className={classes.bgImage}
                  >
                    <Box
                      marginLeft="122px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%"
                    >
                      <Typography className={classes.steps}>
                        Next Post
                      </Typography>
                      <Box display="flex">
                        <Typography className={classes.title}>
                          {articlesSort[sortRandom + 1].title}{" "}
                        </Typography>
                        <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 2}
                          className={classes.icon}
                        >
                          {theme.direction === "rtl" ? (
                            <ArrowBackOutlined />
                          ) : (
                            <ArrowForwardOutlined />
                          )}
                        </Button>
                      </Box>
                    </Box>
                  </BgImage>
                </Link>
              </Grid>
            </Grid>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    articles: allStrapiArticle {
      nodes {
        id
        title
        slug
        created_at
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default PostCarousel
