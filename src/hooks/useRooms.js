import { graphql, useStaticQuery } from 'gatsby'

const useRooms = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes{
          title
          description
          image{
            gatsbyImageData
          }
          slug
          price
        }
      }
    }
  `)
  return data.allDatoCmsRoom.nodes
}

export default useRooms
