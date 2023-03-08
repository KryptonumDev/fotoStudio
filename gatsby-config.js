require("dotenv").config({
  path: `.env`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Foto Studio`,
    siteUrl: `https://adamchrapek.pl/`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://adamchrapek.pl',
        sitemap: 'https://adamchrapek.pl/sitemap_index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATOCMS,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://adamchrapek.pl`,
      },
    },
  ]
};