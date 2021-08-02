import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: "#304fd5",
  },
  imageContainer: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: 10
    },
  },
  heroImage: {
    width: 800,
    height: 641,
    filter: "brightness(75%)",
    [theme.breakpoints.down("md")]: {
      width: "0px"
    }
  },
  title: {
    fontFamily: "Gotham-Black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 90,
    marginBottom: -70,
    color: "white",
    lineHeight: 0.9,
    [theme.breakpoints.down("md")]: {
      fontSize: 75,
      textAlign: "center",
    }
  },
}))

const HeroProjectsSection = ({ image, title }) => {
  const classes = useStyles()

  const dataImage = getImage(
    image.length > 1 ? image[1].localFile : image[0].localFile
  )
  return (
    <Box width="100%" height="673px" className={classes.heroContainer}>
      <Box marginLeft="150px" display="flex" height="100%" className={classes.imageContainer}>
        <Box display="flex" alignItems="flex-end" marginBottom={{ xs: "0px", md: "-90px" }}>
          <GatsbyImage
            image={dataImage}
            alt={title}
            className={classes.heroImage}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ md: "center" }}
          marginLeft={{ md: "0px", lg: "-270px" }}
          zIndex="999"
          width={{ md: "100%", lg: "700px" }}
        >
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroProjectsSection
