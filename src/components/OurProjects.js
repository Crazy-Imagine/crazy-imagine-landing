import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { graphql, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ProjectCatalog from "./ProjectCatalog"

const useStyles = makeStyles(theme => ({
  bgImage: {
    height: 2200,
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  title: {
    color: "white",
    fontSize: 63,
    fontFamily: "Gotham",
    marginBottom: 38,
    textTransform: "uppercase",
    paddingTop: 160,
  },
  description: {
    color: "white",
    fontSize: 22,
    fontFamily: "Poppins",
  },
  bgImageTitle: {
    width: "100% !important",
    height: "656px !important",
  },
}))

const OurProjects = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const project = data.projects.nodes[0]
        const dataImage = project.bgImage.localFile
        const dataImageTitle = project.bgImageTitle.localFile
        const bgImage = getImage(dataImage)
        const bgImageTitle = getImage(dataImageTitle)

        return (
          <Box>
            <BgImage
              image={bgImage}
              tag={project?.title}
              className={classes.bgImage}
            >
              <BgImage
                image={bgImageTitle}
                tag="title"
                className={classes.bgImageTitle}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="flex-end"
                  height="75%"
                >
                  <Box textAlign="center" maxWidth="922px">
                    <Typography className={classes.title}>
                      {project?.title}
                    </Typography>
                    <Typography className={classes.description}>
                      {project?.description}
                    </Typography>
                  </Box>
                </Box>
              </BgImage>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="-175px"
              >
                <ProjectCatalog />
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
  projects: allStrapiProjectsPage {
    nodes {
      title: ourProjectsTitle
      description: outProjectsDescription
      bgImage: ourProjectsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 5)
          }
        }
      }
      bgImageTitle: imageTitle {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 5)
          }
        }
      }
    }
  }
}
`

export default OurProjects
