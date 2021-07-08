import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  projectContainer: {
    backgroundColor: "#1a1d24",
    color: "white",
  },
  projectImage: {
    height: 523,
  },
  title: {
    fontFamily: "Gotham-Black",
    fontSize: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1,
  },
  description: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
  },
  boxLine: {
    backgroundColor: "#23aae1",
  },
})

const AboutProjects = ({ aboutProject, images, moreAbout }) => {
  const classes = useStyles()
  const image = getImage(images[0].localFile)
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12} className={classes.projectContainer}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            height="100%"
            paddingRight="60px"
          >
            <Box
              width="420px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography variant="h5" className={classes.title}>
                About the project
              </Typography>
              <Box
                width="83px"
                height="7px"
                className={classes.boxLine}
                my="24px"
              />
              <Typography className={classes.description}>
                {aboutProject}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box>
            <GatsbyImage
              image={image}
              alt="About the project"
              className={classes.projectImage}
            />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box>
            <GatsbyImage
              image={image}
              alt="More"
              className={classes.projectImage}
            />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            width="420px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            paddingLeft="60px"
          >
            <Typography variant="h5" className={classes.title}>
              More than game
            </Typography>
            <Box
              width="83px"
              height="7px"
              className={classes.boxLine}
              my="24px"
            />
            <Typography className={classes.description}>{moreAbout}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutProjects
