import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Box, makeStyles, Typography } from "@material-ui/core"

import CustomerReview from "./CustomerReview"
import customerImage from "../images/gatsby-astronaut.png"

const review =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

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
          <Box>
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
                  marginBottom={{ xs: "30px", md: "108px" }}
                  marginTop="8px"
                  className={classes.boxLine}
                ></Box>
                <CustomerReview
                  review={review}
                  customerName="Mario Tancreado xd"
                  customerImage={customerImage}
                  customerOcupation="CEO LionMane"
                />
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
