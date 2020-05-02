const createAppPages = async (graphql, actions, reporter) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityApp {
        edges {
          node {
            title
            screenshot {
              asset {
                url
              }
            }
            _rawDescription(resolveReferences: {maxDepth: 5})
            technology {
              title
              slug {
                current
              }
            }
            slug {
              current
            }
            deploy
            quickstart
            docs
            url
            _id
          }
          }
        }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const apps = result.data.allSanityApp.edges

  apps.forEach((edge, index) => {
    const path = `/app/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/pages/app.js"),
      context: { id: edge.node._id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createAppPages(graphql, actions, reporter);
}




