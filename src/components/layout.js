import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Seo from "./seo";

import { CssBaseline } from '@material-ui/core';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import HumanTalent from "./HumanTalent";
import LastestPosts from "./LastestPosts";

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
    render={(data) => (
      <>
        <Seo seo={seo} />
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
        <HumanTalent />
        <LastestPosts />
        <Footer />
        <Copyright />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;