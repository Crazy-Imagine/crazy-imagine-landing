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

const Projects = ({ images }) => {
  const classes = useStyles()
  return (
    <Box marginTop="55px">
      <Box maxWidth="844px" className={classes.container}>
        <Grid container justify="center" spacing={2}>
          {images.nodes.map(el => (
            <Grid item xs={12} md={6} key={el.id} className={classes.items}>
              <Link to={`${PROJECTS}/${el.slug}`}>
                <GatsbyImage
                  image={getImage(el.images[0].localFile)}
                  alt="alo"
                  className={classes.projectImage}
                />
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
