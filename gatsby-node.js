const { BLOG, TEAMS, PROJECTS } = require("./src/navigation/sitemap")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              slug
              id
            }
          }
        }

        projects: allStrapiProjects {
          nodes {
            slug
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const { createPage } = actions

  const posts = result.data.articles.edges
  const projects = result.data.projects.nodes

  const PostTemplate = require.resolve("./src/templates/Post.js")
  const ProjectsTemplate = require.resolve("./src/templates/Project.js")

  posts.map((post, index) => {
    createPage({
      path: `${BLOG}/${post.node.slug}`,
      component: PostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
  projects.map((project, i) => {
    createPage({
      path: `${PROJECTS}/${project.slug}`,
      component: ProjectsTemplate,
      context: {
        id: project.id,
      },
    })
  })
}
