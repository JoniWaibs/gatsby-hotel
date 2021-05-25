import React from 'react';
import useRooms from "../../hooks/useRooms";
import RoomPreview from '../utils/RoomPreview';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`
const RoomsContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  padding:2rem;

  @media(min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:2rem;
  }
`;

const RoomsContent = () => {
  const data = useRooms()

  return (
    <>
      <Title>Nuestras Habitaciones</Title>
      <RoomsContainer>
        {
          data.map( room =>(
            <RoomPreview room={room} key={room.slug}/>
          ))
        }
      </RoomsContainer>
    </>
  )
};

export default RoomsContent;
