import React, { Component } from 'react'

import Header from '../components/header'
import styled from 'styled-components'

const Teste = styled.h1`
color:white;
`
export default class Adicionados extends Component {
    
  render() {
    return (
      <div>
        
        <Teste>OS FILMES RECENTEMENTE ADICIONADOS</Teste>
      </div>
    )
  }
}
