module.exports = {
  siteMetadata: {
    title: `TikChocoOnline`,
    description: `「TikChoco Online」は、異世界で自由に生活できるサンドボックスオンラインゲームです。`,
    author: `@tikchoco`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // Footnotes mode (default: true)
          footnotes: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Add your gatsby-remark-* plugins here
          plugins: [],
          // Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines (default: false)
          // It's not advised to set this to "true" and this option will likely be removed in the future
          jsFrontmatterEngine: false,
        },
      },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
