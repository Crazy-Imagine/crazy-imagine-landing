exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
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

  const PostTemplate = require.resolve("./src/templates/post.js")

  posts.map((post, index) => {
    createPage({
      path: `/post/${post.node.id}`,
      component: PostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
