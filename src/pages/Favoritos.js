import React, { Component } from 'react'

import Header from '../components/header'
import styled from 'styled-components'

const Teste = styled.h1`
color:white;
`
export default class Favoritos extends Component {
    
  render() {
    return (
      <div>
        
        <Teste>OS FILMES FAVORITOS </Teste>
      </div>
    )
  }
}
