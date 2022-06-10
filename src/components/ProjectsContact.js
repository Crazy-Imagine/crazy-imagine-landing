import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import { Box, makeStyles, Typography } from "@material-ui/core"

import { HOME } from "../navigation/sitemap"

const useStyles = makeStyles({
  bgImage: {
    width: 1124,
    height: 342,
    zIndex: 888,
  },
  title: {
    color: "white",
    fontSize: 38,
    lineHeight: 1.2,
  },
  titleBig: {
    fontFamily: "Gotham",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  buyNowBox: {
    backgroundColor: "rgb(227, 100, 23)",
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
  },
  imageSecondary: {
    width: 255,
    height: 245,
    marginBottom: -125,
    zIndex: 999,
  },
  resetStyleLinks: {
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const ProjectsContact = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataBgImg = data.projects.nodes[0].images[0].localFile
        const dataImg = data.projects.nodes[0].imageContact.localFile
        const bgImg = getImage(dataBgImg)
        const imgCbz = getImage(dataImg)
        return (
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop="33px"
            marginBottom="-185px"
          >
            <Box display="flex" justifyContent="flex-end" width="690px">
              <GatsbyImage
                image={imgCbz}
                alt="img"
                className={classes.imageSecondary}
              />
            </Box>
            <BgImage image={bgImg} alt="bgContact" className={classes.bgImage}>
              <Box
                diplay="flex"
                justifyContent="flex-start"
                paddingLeft="80px"
                py="30px"
                maxWidth="376px"
              >
                <Typography className={classes.title}>
                  If you have <br /> any question{" "}
                  <span className={classes.titleBig}>
                    FEEL FREE TO CONTACT US
                  </span>
                </Typography>
                <Link
                  to={`${HOME}#contact`}
                  className={classes.resetStyleLinks}
                >
                  <Box
                    width="208px"
                    height="50px"
                    boxShadow="3.178px 6.237px 16px 0px rgba(15, 15, 15, 0.39)"
                    borderRadius="17px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="24px"
                    className={classes.buyNowBox}
                  >
                    Contact Us
                  </Box>
                </Link>
              </Box>
            </BgImage>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
query MyQuery {
  projects: allStrapiProjectsPage {
    nodes {
      images: projectContactImg {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 5)
          }
        }
      }
      imageContact: imgContact {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 5)
          }
        }
      }
    }
  }
}
`

export default ProjectsContact
