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
            <Projects projects={data.projects} />
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
      Key
      images {
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
export default ProjectCatalog
