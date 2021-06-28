import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HomeMainSection from "../components/HomeMainSection"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <Layout seo={data.strapiHomepage.seo}>
        <HomeMainSection
          title="Crazy imagine sofware"
          mainTitle={data.strapiHomepage.hero.title}
          description={data.strapiHomepage.seo.metaDescription}
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
            publicURL
          }
        }
      }
    }
  }
`

export default IndexPage
