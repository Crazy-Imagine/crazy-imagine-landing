import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HomeMainSection from "../components/HomeMainSection"
import { getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const bgImage = getImage(data.strapiHomepage.seo.shareImage.localFile)

  return (
    <>
      <Layout seo={data.strapiHomepage.seo}>
        <HomeMainSection
          title="Crazy imagine sofware"
          mainTitle={data.strapiHomepage.hero.title}
          description={data.strapiHomepage.seo.metaDescription}
          image={bgImage}
        />
      </Layout>
    </>
  )
}

const query = graphql`
  query {
    allStrapiArticle {
      nodes {
        id
        description
        author {
          name
        }
        title
      }
    }
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
