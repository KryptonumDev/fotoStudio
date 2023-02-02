require("dotenv").config({
  path: `.env`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Foto Studio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATOCMS,
        disableLiveReload: false,
      },
    },
  ]
};