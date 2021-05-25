import React from "react"
import styled from "styled-components"
import FooterNav from "./footernav"
import { Link } from "gatsby"

const Header = styled.header`
  padding: 1rem;
  background-color: #333;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Title = styled(Link)`
  text-align: center;
  color: #fff;
  font-family: "roboto", serif;
  text-decoration: none;
  font-size: 4rem;
`

const footer = () => {
  return (
    <Header>
      <Container>
        <FooterNav />
        <Title to={'/'}>Gatsby Hotel</Title>
      </Container>
    </Header>
  )
}

export default footer;
