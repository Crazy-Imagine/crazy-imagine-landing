import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PROJECTS } from "../navigation/sitemap"

const useStyles = makeStyles(theme => ({
  projectImage: {
    width: "469px !important",
    height: "420px !important",
  },
  items: {
    [theme.breakpoints.up("md")]: {
      "&:nth-child(2)": {
        marginTop: 72,
      },
      "&:nth-child(2n + 1)": {
        marginTop: -72,
      },
      "&:nth-child(1)": {
        marginTop: "0px !important",
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}))

const Projects = ({ projects }) => {
  
  const classes = useStyles()
  return (
    <Box marginTop="55px">
      <Box maxWidth="844px" className={classes.container}>
        <Grid container  spacing={2} justifyContent="center">
          {projects.nodes.map(el => (
            <Grid item xs={12} md={6}  className={classes.items} key={el.id}>
              <Link to={`${PROJECTS}/${el.slug}`} >
              <Box>
                <GatsbyImage
                  image={getImage(el.images[0].localFile)}
                  alt="alo"
                  className={classes.projectImage}
                />
                </Box>
              </Link>
            </Grid>
          ))}
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
