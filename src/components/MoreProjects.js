import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PROJECTS } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#2b2b2b",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  itemContainer: {
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  title: {
    color: "white",
    fontFamily: "gotham-Black",
    fontSize: 36,
    textTransform: "uppercase",
  },
  projectTitle: {
    color: "white",
    fontFamily: "Gotham-Black",
    fontSize: 36,
    marginTop: -90,
    position: "relative",
    height: 75,
    overflow: "hidden",
    zIndex: 999,
    lineHeight: 1,
    marginLeft: 50,
    width: 215,
  },
  images: {
    width: 385,
    height: 346,
    filter: "brightness(75%)",
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
  },
  boxLine: {
    backgroundColor: "#23aae1",
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  seeAll: {
    color: "white",
    fontSize: 28,
    marginTop: 26,
  },
  seeAllContainer: {
    [theme.breakpoints.down("md")]: {
      width: "auto",
      marginTop: 30,
    },
  },
  items: {
    margin: -7,
  },
  resetLink: {
    textDecoration: "none",
  },
}))

const MoreProjects = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const projects = data.projects.nodes
        return (
          <Box
            width="100%"
            height="537px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.container}
            paddingTop="32px"
          >
            <Typography variant="h3" className={classes.title}>
              See other mockups
            </Typography>
            <Box
              width="35px"
              height="5px"
              marginTop="15px"
              marginBottom="26px"
              className={classes.boxLine}
            />
            <Grid container>
              <Box
                display="flex"
                justifyContent="center"
                margin="auto"
                className={classes.itemContainer}
              >
                {projects.map((el, i) => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    key={el.id}
                    className={classes.items}
                  >
                    <Link
                      to={`${PROJECTS}/${el.slug}`}
                      className={classes.resetLink}
                    >
                      <Box>
                        <GatsbyImage
                          image={getImage(el.images[0].localFile)}
                          alt={el.title}
                          className={classes.images}
                        />
                        <Typography
                          className={classes.projectTitle}
                          variant="h5"
                        >
                          {el.title}
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Box>
            </Grid>
            <Box
              width="866px"
              className={classes.seeAllContainer}
              marginBottom="42px"
            >
              <Link to={`${PROJECTS}`} className={classes.resetLink}>
                <Typography className={classes.seeAll}>
                  See all projects
                </Typography>
              </Link>
            </Box>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    projects: allStrapiProjects(limit: 3) {
      nodes {
        title
        id
        slug
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default MoreProjects
