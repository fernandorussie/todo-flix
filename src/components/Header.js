import React, { Component } from 'react'
import styled from 'styled-components'

import Lupa from '../assets/assetsHeader/lupa.svg'
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
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #E71B27;
  box-shadow: 0 5px #d90429;
    &:hover{
      box-shadow: 0 3px #d90429;
      top: 1px;
    }
    &:active {
      box-shadow: 0 0 #d90429;
      top: 5px;
    }
`
const BoxSearch = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  position:relative;
`
const Search = styled.input`
    width: 0vw;
    background-color: #2C2C2C;
    border-radius: 4px;
    border:none;
    color: white;
    padding:15px 20px 15px 20px;

    background-image: url(${Lupa});
    background-position: 10px;
    background-size: 20px;
    background-repeat:no-repeat;

    position: absolute;
    transition: 0.3s ease all;
    &:focus{
      width: 25vw;
      padding-left:35px;
    } 
`
const BoxPerfils = styled.div`
  width: 4vw;
  color: white;
`
const ImgAvatar = styled.svg`
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
  right: 2vw;
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
const AvatarUser = styled.svg`
  margin-right: 5px;
`
const BoxModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  background-color: white;
  border: 2px black solid;

  position: fixed;
  top:50%;
  left:5%;
  z-index: 3;

margin: auto;
`
export default class Header extends Component {
  state={
    showMenu:false,
    showPerfil:false,
    showSearch:false,
    showAdd:true,
    swapUser:1
  }

  isToggleMenu = () => {
    this.setState({showMenu:!this.state.showMenu})
  }
  isTogglePerfil = () => {
    this.setState({showPerfil:!this.state.showPerfil})
  }
  isToggleSearch = () => {
    this.setState({
      showSearch:!this.state.showSearch})
  }
  isToggleAdd = () => {
    this.setState({
      showAdd:!this.state.showAdd
    })
  }
  isToggleSwap1 = () => {
    this.setState({
      swapUser:1
    })
  }
  isToggleSwap2 = () => {
    this.setState({
      swapUser:2
    })
  }
  isToggleSwap3 = () => {
    this.setState({
      swapUser:3
    })
  }
  render() {
    const {showMenu, showPerfil, showAdd, swapUser} = this.state
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
          <BtnAdd onClick={this.isToggleAdd}>Adicionar filme</BtnAdd>
              {showAdd ? (
              <BoxModal>
                <h1>T3 é braba!🤩 🥳 🎉 </h1>
              </BoxModal>): null}
          <BoxSearch>
            <Search placeholder="Pesquisar" type="text"/>
          </BoxSearch>
          <BoxPerfils>
            <BoxConfig onClick={this.isTogglePerfil}>
              {swapUser === 1 ? 
              <ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                      <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
                        <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                        <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                      </g>
                    </g>
              </ImgAvatar>: 
              swapUser === 2 ?
              <ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                      <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                        <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                          <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
                          <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                          <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                        </g>
                      </g>
              </ImgAvatar>:
              <AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                      <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
                        <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                        <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                      </g>
                    </g>
              </AvatarUser>}
               
              {showPerfil ?  <p>&#9662;</p>:<p>&#9656;</p>}
            </BoxConfig>
            <DivTeste>
              {showPerfil ? (
                <BoxAvatar>
                  <BoxAccount onClick={this.isToggleSwap1}>
                  <AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                      <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
                        <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                        <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                      </g>
                    </g>
                  </AvatarUser>
                    <p>Fernando</p>
                  </BoxAccount>
                  <BoxAccount onClick={this.isToggleSwap2}>
                  <AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                      <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
                        <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                        <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                      </g>
                    </g>
                  </AvatarUser>
                    <p>Dan</p>
                  </BoxAccount>
                  <BoxAccount onClick={this.isToggleSwap3}>
                  <AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                      <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
                        <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                        <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                      </g>
                    </g>
                  </AvatarUser>
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
