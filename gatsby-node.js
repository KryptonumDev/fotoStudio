exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: `/*`,
    toPath: `/przerwa-techniczna`,
    statusCode: 302,
  })  
}