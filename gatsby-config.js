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
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsty Starter Solid State',
        short_name: 'Solid State',
        start_url: '/',
        background_color: '#2e3141',
        theme_color: '#4c5c96',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
