import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { PROJECTS } from "../navigation/sitemap"
import { ArrowRightAlt } from "@material-ui/icons"

const useStyles = makeStyles({
  bgImage: {
    width: "100%",
    height: 537,
  },
  imageItem: {
    width: "100%",
    height: 208,
    filter: "saturate(0.5)",
  },
  title: {
    fontSize: 46,
    fontFamily: "Gotham",
    color: "white",
    width: 280,
    lineHeight: 1,
  },
  boxLine: {
    backgroundColor: "white",
  },
  itemTitle: {
    fontSize: 40,
    fontFamily: "Open Sans",
    color: "white",
    fontWeight: "bold",
    lineHeight: 1,
    height: 80,
    overflow: "hidden",
  },
  itemDescription: {
    fontSize: 13,
    fontFamily: "Open Sans",
    color: "white",
    height: 60,
    overflow: "hidden",
  },
  item: {
    marginLeft: -40,
    width: 300,

    "&:nth-child(6)": {
      width: 598,
      marginRight: -22,
      marginLeft: -58,
    },
    "&:nth-child(8)": {
      width: 595,
      marginLeft: -52,
    },
  },
  itemFindOut: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    color: "white",
  },
  resetLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const ProjectSection = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataImage = data.homePage.projectsImage.localFile
        const image = getImage(dataImage)
        return (
          <Box marginBottom="169px">
            <BgImage
              image={image}
              alt="project section"
              className={classes.bgImage}
            >
              <Box
                display="flex"
                marginLeft="252px"
                paddingTop="90px"
                alignItems="flex-end"
                marginBottom="40px"
              >
                <Typography className={classes.title}>
                  Our Lastest Projects
                </Typography>
                <Box
                  width="318px"
                  height="5px"
                  className={classes.boxLine}
                  marginLeft="-70px"
                  marginBottom="5px"
                />
              </Box>
              <Box paddingLeft="113px">
                <Box maxWidth="1550px">
                  <Grid container>
                    {data.projects.nodes.map(el => (
                      <Grid
                        item
                        xs={12}
                        md="auto"
                        className={classes.item}
                        key={el.id}
                      >
                        <Link
                          to={`${PROJECTS}/${el.slug}`}
                          className={classes.resetLink}
                        >
                          <BgImage
                            image={getImage(el.images[0].localFile)}
                            alt={el.title}
                            className={classes.imageItem}
                          >
                            <Box maxWidth="100%" p="40px" paddingTop="20px">
                              <Typography className={classes.itemTitle}>
                                {el.title}
                              </Typography>
                              <Typography className={classes.itemDescription}>
                                {el.description}
                              </Typography>
                              <Typography className={classes.itemFindOut}>
                                Find Out More <ArrowRightAlt />{" "}
                              </Typography>
                            </Box>
                          </BgImage>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </BgImage>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    homePage: strapiHomepage {
      projectsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
    projects: allStrapiProjects(limit: 8) {
      nodes {
        title
        slug
        description
        id
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default ProjectSection
