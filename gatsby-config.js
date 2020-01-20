module.exports = {
  siteMetadata: {
    title: `Signup.cash`,
    description: `Non-custodial web-based key signer and social interactions with BCH`,
    author: `@p0oker`,
    telegramLink: "",
    docsLink:
      "https://www.notion.so/p0oker/SIGNup-Documentation-88024f39e70041e2a5aa33d2da565ddf"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `\:500,600,700` // you can also specify font weights and styles
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `signup.cash`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
