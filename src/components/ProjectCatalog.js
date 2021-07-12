import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Projects from "./Projects"
import ProjectTabs from "./ProjectCatalogTabs"

const ProjectCatalog = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <>
            <ProjectTabs />
            <Projects images={data.projects} />
          </>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    projects: allStrapiProjects {
      nodes {
        id
        slug
        images {
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

export default ProjectCatalog
