import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Box, makeStyles, Typography } from "@material-ui/core"

import CustomerReview from "./CustomerReview"

const useStyes = makeStyles({
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  boxLine: {
    backgroundColor: "#23aae1",
  },
  referenceImage: {
    height: 568,
    filter: "brightness(85%)",
  },
})

const ReferenceSection = () => {
  const classes = useStyes()

  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataImage = data.homePage.clientsImage.localFile
        const bgImage = getImage(dataImage)
        return (
          <Box id="clients">
            <BgImage
              image={bgImage}
              alt="imageSection"
              className={classes.referenceImage}
            >
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxWidth="840px"
                m="auto"
                paddingTop="47px"
                paddingBottom="45"
              >
                <Typography variant="h3" className={classes.title}>
                  What our clients say
                </Typography>
                <Box
                  width="45px"
                  height="6px"
                  marginBottom={{ xs: "30px", md: "95px" }}
                  marginTop="8px"
                  className={classes.boxLine}
                ></Box>
                <CustomerReview />
              </Box>
              <Box id="blog" />
            </BgImage>
            <Box marginBottom="80px" id="blog" />
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    homePage: strapiHomepage {
      clientsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ReferenceSection
