const { createFilePath } = require(`gatsby-source-filesystem`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `SanityApp`) {
//     const fileNode = getNode(node)
//     console.log(`\n`, fileNode)
  
//   }
// }

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `SanityApp`) {
    console.log(createFilePath({ node, basePath: `pages` }))
  }
}




