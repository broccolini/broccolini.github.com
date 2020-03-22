const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({
  actions,
  node,
  getNode,
}) => {
  if (node.internal.type !== 'Mdx') return

  const parent = getNode(node.parent)
  const slug = createFilePath({ node, getNode })
  const category = parent.sourceInstanceName

  actions.createNodeField({
    name: 'slug',
    node,
    value: slug,
  })

  actions.createNodeField({
    name: 'category',
    node,
    value: category,
  })
}
