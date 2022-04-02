import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Box } from "@material-ui/core"
import { AnimatedTitle } from "./AnimatedTitle"

const WorkInfo = () => {
  const WorkWithUsPage = useStaticQuery(query)
  console.log({WorkWithUsPage})
  const images = WorkWithUsPage.allStrapiWorkWithUs.nodes[0].images
  const imageOne = images[0].localFile
  const imageTwo = images[1].localFile
  return (
    <Box paddingTop="35px">
      <AnimatedTitle
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
      ></AnimatedTitle>
      <AnimatedTitle
        title="KNOW OUR VALUES"
        content="We mainly focuse on responsability, efficiency, respect, kindness, we care about your physical and mental health.
          We take care of our employees, promoting a relaxed and fun work environment, choosing social activities to integrate all of them.
          We evaluate you, and we choose you a challenge that you can reach results and improve your skills.
          Our principal challenge is that you grow with us"
        boxClass="containerReverse"
        titleClass="titleRight"
        animation="animationRight"
        paragraphClass="paragraphRight"
        lineClass="boxLineRight"
        image={getImage(imageTwo)}
        alt="Boss with the team"
        md={6}
      ></AnimatedTitle>
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
