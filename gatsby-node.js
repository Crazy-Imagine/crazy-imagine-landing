const { BLOG } = require("./src/navigation/sitemap")

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
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const { createPage } = actions

  const posts = result.data.articles.edges

  const PostTemplate = require.resolve("./src/templates/Post.js")

  posts.map((post, index) => {
    createPage({
      path: `${BLOG}/${post.node.slug}`,
      component: PostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
