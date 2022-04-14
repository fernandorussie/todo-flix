import React, { Component } from 'react'
import styled from 'styled-components'


import avatar from '../assets/assetsHeader/Group 32.svg'
 
const Container = styled.div`
    width: 100%;
    height: 15vh;
    display:flex;
    justify-content: space-between;
`
const SectionLogo = styled.div`
    width: 40%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
`
const Logo = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #E71B27;
  cursor:pointer;
`
const Btn = styled.p`
  cursor:pointer;

`
const BtnCat = styled.div`
  width: 100px;
  display:flex;
  justify-content: space-between;
  cursor:pointer;
`
const BtnMenu = styled.p`
  margin-top: 5px;
  cursor:pointer;
  &:hover{
    text-decoration: underline;
  }

`
const BoxCategorias = styled.div`
  width: 10%;
  padding: 15px;
  background-color: black;
  position:absolute;
`
const SectionAdd = styled.div`
    width: 55%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    position:relative;
`
const BtnAdd = styled.button`
    padding:15px;
    color: white;
    font-weight: 500;
    background-color: #E71B27;
    border:none;
    border-radius: 4px;
    cursor:pointer;

    &:hover{
    }
`
const SearchBar = styled.input`
    width: 0%;
    background-color: #2C2C2C;
    border-radius: 4px;
    border:none;
    padding:15px;

    transition: 0.3s ease all;
    &:focus{
      width: 40%;
    }
`
const IconSearch = styled.img`
  width: 22px;
`
const BoxSearch = styled.div`
  right: 15px;
  top: 30px;
  position: absolute;
  display: inline-block;
`
const BoxPerfils = styled.div`
  width: 4vw;
  color: white;
`
const ImgAvatar = styled.img`
  width: 35px;
`
const BoxConfig = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
`
const DivTeste = styled.div`
  display:flex;
`
const BoxAvatar = styled.div`
  width: 10vw;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: black;
  position:absolute;
  right: 4vw;
`
const BoxAccount = styled.div`
  display:flex;
  align-items: center;
  margin-top:5px;
  color: white;
  cursor:pointer;
  &:hover{
    border:white solid 1px;
  }
`
const AvatarUser1 = styled.img`
  margin-right: 5px;
`
const AvatarUser2 = styled.img`
  margin-right: 5px;
`
const AvatarUser3 = styled.img`
  margin-right: 5px;
`
export default class Header extends Component {
  state={
    showMenu:false,
    showPerfil:false
  }

  isToggleMenu = () => {
    this.setState({showMenu:!this.state.showMenu})
  }
  isTogglePerfil = () => {
    this.setState({showPerfil:!this.state.showPerfil})
  }
  render() {
    const {showMenu, showPerfil} = this.state
    return (
      <Container>
        <SectionLogo>
          <Logo>TODOFLIX</Logo>
          <Btn>Início</Btn>
          <div onClick={this.isToggleMenu}>
            
            <BtnCat><p>Categorias</p>{showMenu ?  <p>&#9662;</p> : <p>&#9656;</p>}</BtnCat>
           
            {showMenu ? (
            <BoxCategorias>
                <BtnMenu>Todos</BtnMenu>
                <BtnMenu>Favoritos</BtnMenu>
                <BtnMenu>Já vistos</BtnMenu>
                <BtnMenu>Adicionados</BtnMenu>
            </BoxCategorias>): null}
          </div>
        </SectionLogo>
        <SectionAdd>
          <BtnAdd>Adicionar filme</BtnAdd>
          <BoxSearch>
            <SearchBar placeholder="Pesquisar" type="text"/>
            <IconSearch class="img" src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt=""/>
          </BoxSearch>
          {/* <div>
            <input class="input"  type="text" placeholder="Titles, people, genres"/>
            <img class="img" src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt=""/>

          </div> */}

          <BoxPerfils>
            <BoxConfig onClick={this.isTogglePerfil}>
              <ImgAvatar src={avatar} alt=""/> {showPerfil ?  <p>&#9662;</p> : <p>&#9656;</p>}
            </BoxConfig>
            <DivTeste>
              {showPerfil ? (
                <BoxAvatar>
                  <BoxAccount>
                    <AvatarUser1 src={avatar} alt=""/>
                    <p>Fernando</p>
                  </BoxAccount>
                  <BoxAccount>
                    <AvatarUser2 src={avatar} alt=""/>
                    <p>Dan</p>
                  </BoxAccount>
                  <BoxAccount>
                    <AvatarUser3 src={avatar} alt=""/>
                    <p>Marlon</p>
                  </BoxAccount>
                </BoxAvatar>)
                : null}
            </DivTeste>
          </BoxPerfils>
        </SectionAdd>
        
        
      </Container>
    )
  }
}
