import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import LinkButton from './LinkButton';


const CardRoom = styled.div`
  margin: 2rem 0;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  -webkit-box-shadow: -12px 6px 71px -64px rgba(0,0,0,1);
  -moz-box-shadow: -12px 6px 71px -64px rgba(0,0,0,1);
  box-shadow: -12px 6px 71px -64px rgba(0,0,0,1);
  @media(min-width: 768px){
    width: 33%;
  }
`;
const CardHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  color:#2f4f4f;
`


const RoomPreview = ({room}) => {
  const {title, description, price, slug, image} = room

  return (
    <CardRoom>
      <div>
        <GatsbyImage image={image.gatsbyImageData} alt={slug} css={css`
          border-radius: 5px;
        `}/>
      </div>
      <CardHeader>
        <h3>{title}</h3>
        <p css={`
          font-size: 20px;
          font-weight: 700;
        `}
        >
          {price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
        </p>
      </CardHeader>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <LinkButton message={'Ver Habitacion'} link={slug}/>
      </div>
    </CardRoom>
  )
}

export default RoomPreview
