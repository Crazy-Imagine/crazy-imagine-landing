import React from "react"

import { Grid, makeStyles } from "@material-ui/core"

import PostCard from "./PostCard"
import blockImage from "../images/gatsby-icon.png"

const useStyes = makeStyles({
  container: {
    width: "100%",
  },
})

const BlogPost = () => {
  const classes = useStyes()
  return (
    <Grid container spacing={4} justify="center" className={classes.container}>
      <Grid item>
        <PostCard
          image={blockImage}
          author="Carlos Becerra XD"
          tags="Wordpress"
          title="Prueba"
          description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
        />
      </Grid>
      <Grid item>
        <PostCard
          image={blockImage}
          author="Carlos Becerra XD"
          tags="Wordpress"
          title="Prueba"
          description="lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm"
          share="Share"
          footerNumber="264"
          variant="principal"
        />
      </Grid>
      <Grid item>
        <PostCard
          image={blockImage}
          author="Carlos Becerra XD"
          tags="Wordpress"
          title="Prueba Prueba Prueba Prueba Prueba"
          description="lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm lorep ipsummmm"
        />
      </Grid>
    </Grid>
  )
}

export default BlogPost
