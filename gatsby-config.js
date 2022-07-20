if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `.env`,
  })
}

module.exports = {
  siteMetadata: {
    title: "Crazy Imagine",
    titleTemplate: "%s | Software Agency",
    description:
      "We are a growing startup with more than 5 years in the market, with experience on mobile and web development, using the most popular Javascript technologies like React js, Angular js, Vue js, Node js and PHP frameworks like Laravel, Code Igniter, Prestashop, and Wordpress.",
    url: "https://crazyimagine.com/",
    httpEquiv: "Content-Security-Policy",
    content: "upgrade-insecure-requests",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://crazyimagine.com/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/contact/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['es']
          }
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        collectionTypes: [
          {
            name: "article",
            api: { qs: { _locale: `all` } }
          },
          {
            name: "category",
            api: { qs: { _locale: `all` } }
          },
          "writer",
          "curriculums",
          "members",
          {
            name: "projects",
            api: { qs: { _locale: `all` } }
          },
          {
            name: "reviews",
            api: { qs: { _locale: `all` } }
          },

        ],
        singleTypes: [
          `homepage`,
          `global`,
          `teampage`,
          `memberpage`,
          `blog`,
          "projects-page",
          "work-with-us",
          "about-page",
          "contact-page",
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/*`, `/About/*`, `/Blog/*`, `/Contact/*`, `/WorkWithUsPage/*`, `/projects/*`],
      },
    },
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
