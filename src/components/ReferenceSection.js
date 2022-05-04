import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Box, makeStyles, Typography } from "@material-ui/core"

import CustomerReview from "./CustomerReview"

const useStyes = makeStyles({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
  },
  boxLine: {
    backgroundColor: "#23aae1",
  },
  referenceImage: {
    height: 630,
    filter: "brightness(90%)",
  },
  referenceContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "660px",
    margin: "auto",
    paddingTop: "47px",
    paddingBottom: "45",
    background: "#193174",
  },
})

const ReferenceSection = () => {
  const classes = useStyes()

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Box className={classes.referenceContainer}>
            <Typography className={classes.title}>
              {`People Who Work
                  With Us Say`}
            </Typography>
            <CustomerReview />
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
