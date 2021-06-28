const { BLOG, TEAMS } = require("./src/navigation/sitemap")

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
        members: allStrapiMembers {
          nodes {
            name
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
  const members = result.data.members.nodes

  const PostTemplate = require.resolve("./src/templates/Post.js")
  const MembersTemplate = require.resolve("./src/templates/Members.js")

  posts.map((post, index) => {
    createPage({
      path: `${BLOG}/${post.node.slug}`,
      component: PostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
  members.map((member, i) => {
    createPage({
      path: `${TEAMS}/${member.id}`,
      component: MembersTemplate,
      context: {
        id: member.id,
      },
    })
  })
}
