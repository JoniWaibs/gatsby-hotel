import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background-color: white;
  text-align: center;
  color: gray;
  padding: 1rem;
`

const Copy = ({year}) => (<Content>All right reserved {year} &copy;</Content>)

export default Copy
