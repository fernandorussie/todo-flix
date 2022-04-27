import React, { Component } from 'react'

import Data from '../db.json'
import styled from 'styled-components'
import * as S from '../components/styles/styleApp'

const Teste = styled.h1`
color:white;
`
const BoxWraper = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;

`
const Card = styled.div`
  height: 38vh;
  margin:18px;
  padding: 10px 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color:white;
`
const Poster = styled.img`
  width: 300px;
  height: 170px;
`
export default class Favoritos extends Component {

  state = {
    filmes: Data,
    listafilter:[]
  }
componentWillMount() {
    this.setState({
      listafilter:this.state.filmes
    })
}
filtro = (e) => {
  const {filmes} = this.state;
  if(e.target.value === '') {
    this.setState({
      listafilter:filmes
    })
    return
  } 
  const filmeconvert = filmes.filter((item) => {
    if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
      return true
    }
  })
  this.setState({
    listafilter:filmeconvert
  })
}

  render() {
    return (
      <div>
        <S.Search2 onChange={this.filtro} placeholder="Pesquisar" type='text'/>
        <Teste>OS FILMES FAVORITOS </Teste>
        <BoxWraper>
          {this.state.listafilter.map(item => (
          <>
            {item.isFavorito &&(
            <Card key={item.id}>
              <Poster src={item.poster}/>
              <p>{item.title}</p>
            </Card>
            )}
          </>
          ))}
        </BoxWraper>
      </div>
    )
  }
}
