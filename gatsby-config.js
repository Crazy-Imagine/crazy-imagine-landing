/*require("dotenv").config({
  path: `.env`,
});*/

module.exports = {
  siteMetadata: {
    title: "Crazy Imagine",
    titleTemplate: "%s | Software Agency",
    description:
      "We are a growing startup with more than 5 years in the market, with experience on mobile and web development, using the most popular Javascript technologies like React js, Angular js, Vue js, Node js and PHP frameworks like Laravel, Code Igniter, Prestashop, and Wordpress.",
    url: "https://crazyimagine.com/",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: [
          "article",
          "category",
          "writer",
          "members",
          "projects",
          "reviews",
        ],
        singleTypes: [
          `homepage`,
          `global`,
          `teampage`,
          `memberpage`,
          "projects-page",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        specialChars: "/:",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,

      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/LOGO.png`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          { family: "Roboto", weights: ["400"] },
          { family: "Lato", weights: ["400"] },
          { family: "Poppins", weights: ["400"] },
          { family: "Hind", weights: ["400"] },
          { family: "Open Sans", weights: ["400"] },
        ],
      },
    },
  ],
}
