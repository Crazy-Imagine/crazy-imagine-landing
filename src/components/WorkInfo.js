import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
/* import { getImage } from "gatsby-plugin-image" */
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "40px",
    lineHeight: "50px",

    color: "#193174",
  },
  desc: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    /* or 26px */
    letterSpacing: "0.02em",
    color: "#193174",
  },
}))

const WorkInfo = () => {
  const classes = useStyles()
  /*   const WorkWithUsPage = useStaticQuery(query)
  console.log({WorkWithUsPage})
  const images = WorkWithUsPage.allStrapiWorkWithUs.nodes[0].images
  const imageOne = images[0].localFile
  const imageTwo = images[1].localFile */
  return (
    <Box paddingTop="35px">
      <Typography className={classes.title}>{`Interested
      In Working
      With Us`}</Typography>
      <Typography>
        {`Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor 
        incididunt ut labore et dolore 
        magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation ullamco.`}
      </Typography>
      {/* <AnimatedTitle
        title="YOUR DREAM JOB, HERE!"
        content="We are a fresh and comfortable startup with more than 5 years on
                the market. We work with the most recent development
                technologies, offering the best of our efforts to bring to the
                client the best quality products. Covering most of the
                development areas. Our products and services have highlights on
                turnaround time, design, mobile responsive, web, and app
                development."
        boxClass="containerResponsive"
        titleClass="titleLeft"
        animation="animationLeft"
        paragraphClass="paragraphLeft"
        lineClass="boxLineLeft"
        image={getImage(imageOne)}
        alt="Team mates"
        md={6}
      ></AnimatedTitle> */}
    </Box>
  )
}

const query = graphql`
  query {
    allStrapiWorkWithUs {
      nodes {
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  }
`

export default WorkInfo
