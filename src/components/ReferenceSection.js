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
    marginTop: "78px",
    whiteSpace: "pre-line",
  },
  referenceContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
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
