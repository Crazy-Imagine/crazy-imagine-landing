import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"
//import { I18nextProvider } from "react-i18next"
// import i18next from "i18next"
// import index_en from "./translations/en/index.json"
// import index_es from "./translations/es/index.json"

// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: "en",
//   resources: {
//     en: {
//       index: index_en
//     },
//     esVE: {
//       index: index_es
//     }
//   }
// })
const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
    query {
      strapiHomepage {
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
    `}
    render={data => (
      <>
        {/* //<I18nextProvider i18next={i18next}> */}
        <Seo seo={seo} />

        <main>{children}</main>
        {/* //</I18nextProvider> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
