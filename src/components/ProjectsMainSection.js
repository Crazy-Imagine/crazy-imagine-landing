import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  title: {
    fontSize: 63,
    fontWeight: "bold",
    fontFamily: "Gotham",
    maxWidth: 550,
  },
  boxImageBg: {
    backgroundColor: "#353fa3",
  },
  image: {
    marginRight: -400,
    marginTop: -170,
    height: 4507,
    width: 1000
  },
  seeMoreContainer: {
    backgroundColor: "#23aae1",
    color: "white",
    borderRadius: 30,
    boxShadow: "3.178px 6.237px 16px 0px rgba(15, 15, 15, 0.39)",
  },
  seeMore: {
    textTransform: "uppercase",
    fontSize: 15,
    fontFamily: "Gotham",
    fontWeight: "bold",
    letterSpacing: 1,
  },
})

const ProjectsMainSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allStrapiProjectsPage {
        nodes {
          mainTitle
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const project = data.projects.nodes[0]
  const image = getImage(project.image.localFile)
  const classes = useStyles()
  return (
    <Box marginLeft="233px" marginBottom="-140px">
      <Box display="flex">
        <Box>
          <Typography className={classes.title}>{project.mainTitle}</Typography>
          <Box
            width="142px"
            height="33px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.seeMoreContainer}
            marginTop="28px"
          >
            <Typography className={classes.seeMore}>See more</Typography>
          </Box>
        </Box>
        <Box display="flex" height="590px" width="100%" justifyContent="flex-end" zIndex="999">
          <GatsbyImage
            image={image}
            alt={project.mainTitle}
            className={classes.image}
          />
          <Box
            width="602px"
            height="590px"
            className={classes.boxImageBg}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectsMainSection
