import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`
const MainContent = styled.div`
  padding: 4rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const AboutContent = () => {
  const result = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "About" } }) {
        nodes {
          title
          content
          image {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const { title, content, image } = result.allDatoCmsPage.nodes[0]

  return (
    <div>
      <Title>{title}</Title>

      <MainContent>
        <p>{content}</p>
        <GatsbyImage image={image.gatsbyImageData} alt="inicio" />
      </MainContent>
    </div>
  )
}

export default AboutContent
