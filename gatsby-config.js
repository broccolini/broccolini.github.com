module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stream',
        path: __dirname + '/src/pages/musings/',
      },
    },
  ]
}
