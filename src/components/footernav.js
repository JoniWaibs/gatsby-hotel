import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ContainerNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  @media (min-width768px) {
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0px;
  }
  &.currentPage {
    border-bottom: 3px solid gray;
  }
`

const FooterNav = () => {
  return (
    <ContainerNav>
      <NavLink to={"/terminos"} activeClassName="currentPage">
        Terminos y condiciones
      </NavLink>
      <NavLink to={"/politica"} activeClassName="currentPage">
        Politica de privacidad
      </NavLink>
    </ContainerNav>
  )
}

export default FooterNav
