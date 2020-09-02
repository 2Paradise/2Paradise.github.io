module.exports = {
  siteMetadata: {
    title: `2P Enginnering Blog`,
    description: `2P Front End Enginnering Blog`,
    author: `@2Paradise`,
    siteUrl : "https://2Paradise.github.io",
  },
  plugins: [
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
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options : {maxWidth: 840}
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2ParadiseDevlog`,
        short_name: `2paradise`,
        start_url: `/`,
        background_color: `#3399ff`,
        theme_color: `#3399ff`,
        display: `minimal-ui`,
        icon: `src/images/blog-logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
