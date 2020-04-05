module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'musings',
        path: __dirname + '/src/pages/musings/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reading',
        path: __dirname + '/src/pages/reading/',
      },
    },
  ]
}
