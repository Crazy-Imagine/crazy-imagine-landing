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
        {/*data.allStrapiArticle 
        ? <div>{data.allStrapiArticle.nodes.map((el) => 
          <div>
            <strong>{el.title}</strong>
            <ul>{el.description}</ul> 
            <p>{el.author.name}</p> 
          </div> )}
        </div>
        : 'loading'
        */}
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
