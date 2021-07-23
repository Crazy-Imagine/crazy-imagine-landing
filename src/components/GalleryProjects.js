import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  galleryImage: {
    width: "100%",
    height: 322,
  },
})

const GalleryProjects = ({ gallery }) => {
  const classes = useStyles()
  return (
    <Box>
      <Grid container>
        {gallery.map((el, i) => (
          <Grid item xs={12} md key={i}>
            <GatsbyImage
              image={getImage(el.localFile)}
              alt={`image${i}`}
              className={classes.galleryImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GalleryProjects
