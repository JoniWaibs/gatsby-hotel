import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const ImgBackground = styled(BackgroundImage)`
  height: 700px;
`
const Hero = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.9),
    rgba(34, 49, 63, 0.9)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0px;
  }
  p {
    font-size: 2rem;
  }
`

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  // console.log(image);
  return (
    <div>
      <ImgBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <Hero>
          <h1>Bienvenido a Hotel Gatsby</h1>
          <p>El mejor lugar para tius vacaciones</p>
        </Hero>
      </ImgBackground>
    </div>
  )
}

export default Image
