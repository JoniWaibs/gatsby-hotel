import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const Button = styled(Link)`
  text-decoration: none;
  background-color: #2f4f4f;
  color: white;
  display: block;
  text-align: center;
  padding: 1rem;
  border-radius:5px;
`
const LinkButton = ({message, link}) => (<Button to={`/${link}`}>{message}</Button>);

export default LinkButton
