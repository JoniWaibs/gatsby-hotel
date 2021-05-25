
exports.createPages = async function ({ actions, graphql, reporter }) {
  const { data } = await graphql(`
    query {
      allDatoCmsRoom {
        nodes{
          slug
        }
      }
    }
  `)

  if(data.error){
    reporter.panic('No hubo resultados')
  }

  const result = data.allDatoCmsRoom.nodes
  result.forEach( room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve(`./src/components/templates/Room.js`),
      context: { slug: room.slug },
    })
  })
}
