import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Box, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  recentlyPostedTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#303030",
    marginBottom: 12,
  },
  recentlyPostedImage: {
    width: 72,
    height: 76,
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
                image {
                  localFile {
                    publicURL
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
                <Grid container alignItems="center">
                  <Grid item>
                    <CardMedia
                      title={el.node.title}
                      image={el.node.image.localFile.publicURL}
                      className={classes.recentlyPostedImage}
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
              </Box>
            ))}
          </Box>
        )
      }}
    />
  )
}

export default RecentlyPosted
