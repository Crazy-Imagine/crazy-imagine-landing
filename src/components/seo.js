import React from "react";
import PropTypes from "prop-types";
//import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Loading from "./Loading";
const Helmet = React.lazy(() => import("react-helmet"))

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { defaultSeo, siteName, favicon } = strapiGlobal;

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };


  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        }
      );
    }

    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
        fullSeo.shareImage.localFile.publicURL;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "keywords", content: "crazy imagine, developer, software, work, Full-stack Development, programming, user Experience, quality support " });
    tags.push({ name: "author", content: "Crazy Imagine" });
    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <>
      {typeof window !== 'undefined' && (
        <React.Suspense fallback={<Loading />}>
          <Helmet
            title={fullSeo.metaTitle}
            titleTemplate={`%s | ${siteName}`}
            link={[
              {
                rel: "icon",
                href: favicon.publicURL,
              },
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Staatliches",
              },
              {
                rel: "stylesheet",
                href:
                  "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
              },
            ]}
            script={[
              {
                src:
                  "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
              },
              {
                src:
                  "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
              },
              {
                src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
              },
            ]}
            meta={metaTags}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        localFile {
          publicURL
        }
      }
      defaultSeo {
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
`;