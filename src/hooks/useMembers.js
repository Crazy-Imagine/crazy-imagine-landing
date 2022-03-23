import { graphql, useStaticQuery } from "gatsby"

export default function useMembers() {
  return useStaticQuery(graphql`
    query {
      allStrapiMembers {
        nodes {
          avatar {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          avatarHover {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          name
          role
          id
        }
      }
    }
  `)
}
