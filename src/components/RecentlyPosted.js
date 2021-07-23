import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"

import { BLOG } from "../navigation/sitemap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  recentlyPostedTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#303030",
    marginBottom: 12,
  },
  recentlyPostedImage: {
    borderRadius: 4,
    marginRight: 12,
  },
  listTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#303030",
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#303030",
  },
  linkContainer: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const RecentlyPosted = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query {
          article: allStrapiArticle(limit: 4) {
            edges {
              node {
                id
                description
                title
                slug
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
        return (
          <Box>
            <Typography variant="h4" className={classes.recentlyPostedTitle}>
              Recently Posted
            </Typography>
            {data.article.edges.map(el => (
              <Box key={el.node.id} marginBottom="24px">
                <Link
                  to={`${BLOG}/${el.node.slug}`}
                  className={classes.linkContainer}
                >
                  <Grid container alignItems="center">
                    <Grid item>
                      <GatsbyImage
                        className={classes.recentlyPostedImage}
                        image={getImage(el.node.image[0].localFile)}
                        alt={el.node.title}
                      />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5" className={classes.listTitle}>
                        {el.node.title}
                      </Typography>
                      <Typography className={classes.description}>
                        {el.node.description.slice(0, 80)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Box>
            ))}
          </Box>
        )
      }}
    />
  )
}

export default RecentlyPosted
