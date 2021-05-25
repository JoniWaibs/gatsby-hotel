import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`;
const MainContent = styled.div`
  padding: 4rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;
export const result = graphql`
  query($slug: String!) {
    allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        description
        image {
          gatsbyImageData
        }
      }
    }
  }
`;
const Room = ({data}) => {
  const {title, description,image} = data.allDatoCmsRoom.nodes[0]
  return (
    <Layout>
      <Title>{title}</Title>

      <MainContent>
        <p>{description}</p>
        <GatsbyImage image={image.gatsbyImageData} alt={title} />
      </MainContent>
    </Layout>
  )
};

export default Room;
