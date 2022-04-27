import React, { Component } from 'react'
import Data from '../db.json'

import Slide from '../components/slide'
import styled from 'styled-components'
import * as S from '../components/styles/styleApp'

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

export default class Home extends Component {
  
  state = {
    filmes: Data,
    listafilter:[]
  }
filtro = (e) => {
  const {filmes} = this.state;
  if(e.target.value.length < 1) {
    this.setState({
      listafilter:[]
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
          {this.state.listafilter.length < 1? <Slide/>:(<BoxWraper>
            {this.state.listafilter.map((item) => (
              <Card key={item.id}>
                <Poster src={item.poster}/>
                <p>{item.title}</p>
              </Card>
            ))}
            </BoxWraper>)}
        
      </div>
    )
  }
}