module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Solid State',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
