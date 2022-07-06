

// //const path = require(`path`)
// //console.log(path, "Asdarqwerew")
// //import { I18nextContext } from "gatsby-plugin-react-i18next"
// //const { I18nextContext } = require("gatsby-plugin-react-i18next")


// exports.createPages = async ({ graphql, actions }) => {
//   const result = await graphql(
//     `
//       {
//         articles: allStrapiArticle {
//           edges {
//             node {
//               slug
//               id
//             }
//           }
//         }

//         projects: allStrapiProjects {
//           nodes {
//             slug
//             id
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   //const context = React.useContext(I18nextContext);
//   //const context = CONTEXT;
//   //const lang = sessionStorage.getItem('lang');


//   const { createPage } = actions

//   const posts = result.data.articles.edges
//   const projects = result.data.projects.nodes

//   const PostTemplate = require.resolve("./src/templates/Post.js")
//   const ProjectsTemplate = require.resolve("./src/templates/Project.js")

//   posts.map((post, index) => {
//     createPage({
//       path: `${BLOG}/${post.node.slug}`,
//       component: PostTemplate,
//       context: {
//         id: post.node.id,
//       },
//     })
//   })
//   projects.map((project, i) => {
//     createPage({
//       path: `${PROJECTS}/${project.slug}`,
//       component: ProjectsTemplate,
//       context: {
//         id: project.id,
//         //language: context.language,
//       },
//     })
//   })
// }