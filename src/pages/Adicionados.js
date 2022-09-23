import React, { Component } from 'react'

//services
import { api } from '../services/api'
// import Data from '../db.json'

//style
import styled from 'styled-components'
import * as S from '../components/styles/styleApp'


const Title = styled.h1`
color:white;
`
const BoxWraper = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;

`
const Card = styled.div`
  width:285px;
  height: 220px;
  margin:8px 12px 8px 0;
  
  display:flex;
  flex-direction: column;
  align-items: ;
  color:white;
`
const Poster = styled.img`
  width: 280px;
  height: 165px;
`
const TitleFilm = styled.p`
word-wrap:break-word;
width: 80%;
padding-top: 5px;
`
export const BoxSearch = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  position:relative;
`
export default class Todos extends Component {
  state = {
    filmes: [],
    listafilter: []
  }
  
async componentDidMount() {  
  this.getFilms()
}
getFilms = async () => {
  const response = await api.get('/filmes')
  console.log(response.data)
  
  const filmes = response.data.map((item) => {
    return {...item,}}
  )

  this.setState({
    filmes:filmes,
    listafilter:filmes
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
        <Title>Adicionados Recentemente</Title>
        <BoxWraper>
          {this.state.listafilter.map((item) => (
            <>
            {item.isAdicionado &&(
            <Card key={item.id}>
              <Poster src={item.poster}/>
              <TitleFilm>{item.title}</TitleFilm>
            </Card>
            )}
          </>
          ))}
        </BoxWraper>
      </div>
    )
  }
}
