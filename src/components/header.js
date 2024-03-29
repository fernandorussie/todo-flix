import React, { Component } from 'react'

//lib
import ReactStars from "react-rating-stars-component";

//components 
import { api } from '../services/api'

//image
import Background from '../assets/assetsHeader/inputIMG.svg'

//style
import * as S from './styles/styleApp'

export default class Header extends Component {
  state={
    //OpenModal
    showMenu:false,
    showPerfil:false,
    showSearch:false,
    showAdd:false,
    swapUser:1,

    //FunctionAdd
    title:[],
    description:[],
    poster:[Background],
    isAdicionado:[],
    isAssistido:false,
    stars:0,
  }
  //OpenModal
  isToggleMenu = () => {
    this.setState({
      showMenu:!this.state.showMenu,
      // showPerfil:false,
      // showAdd:false
    })
  }
  isTogglePerfil = () => {
    this.setState({
      showPerfil:!this.state.showPerfil,
      showMenu:false,
      showAdd:false
    })
  }
  isToggleSearch = () => {
    this.setState({
      showSearch:!this.state.showSearch})
  }
  isToggleAdd = () => {
    this.setState({
      showAdd:!this.state.showAdd,
      showMenu:false,
      showPerfil:false
    })
  }
  isToggleSwap1 = () => {
    this.setState({
      swapUser:1,
      showPerfil:false
    })
  }
  isToggleSwap2 = () => {
    this.setState({
      swapUser:2,
      showPerfil:false
    })
  }
  isToggleSwap3 = () => {
    this.setState({
      swapUser:3,
      showPerfil:false
    })
  }
  isClosetAll = () => {
    this.setState({
      showPerfil:false,
      showAdd:false,
      showMenu:false,
      title:[],
      description:[],
      poster:[],
      isAdicionado:[],
    })
  }
  //FunctionAdd
  isAddFilms = () => {
      api.post('/filmes',{
      title:this.state.title,
      poster:this.state.poster,
      description:this.state.description,
      isAdicionado:true,
      isFavorito: true,
      isAssistido: this.state.isAssistido,
      stars: this.state.stars
     })
     this.setState({
       showAdd:false,
     },window.location.reload())
  }

  handleChangeTitle = (e) => {
    this.setState({
      title:e.target.value
    })
  }
  handleChangePoster = (e) => {
    this.setState({
      poster:e.target.value
    })
  }
  handleChangeDescription = (e) => {
    this.setState({
      description:e.target.value
    })
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
    this.setState({
      stars:newRating
    })
  };
  radioChangedTrue = (value) => {
    this.setState({
      isAssistido:value.target.checked
    })
    console.log(value.target.checked)
  }
  radioChangedFalse = (value) => {
    console.log(value.target.value)
  }
  render() {
    const {showMenu, showPerfil, showAdd, swapUser} = this.state
    return (
      <S.Container>
            <S.BoxSection>
                <S.SectionLogo>
                    <S.Logo to='/' onClick={this.isClosetAll}>TODOFLIX</S.Logo>
                    <S.Links to='/' onClick={this.isClosetAll}>Início</S.Links>
                    
                      <div >
                        <S.BtnCat onClick={this.isToggleMenu}><p>Categorias</p>{showMenu ?  <p>&#9662;</p> : <p>&#9656;</p>}</S.BtnCat>
                        {showMenu ? (
                        <S.BoxCategorias>
                            <S.Links to='/todos' onClick={this.isToggleMenu}>Todos</S.Links>
                            <S.Links to='/favoritos' onClick={this.isToggleMenu}>Favoritos</S.Links>
                            <S.Links to='/vistorecente' onClick={this.isToggleMenu}>Já vistos</S.Links>
                            <S.Links to='/adicionados' onClick={this.isToggleMenu}>Adicionados</S.Links>
                        </S.BoxCategorias>): null}
                      </div>
                    
                </S.SectionLogo>
                <S.SectionAdd>
                    <S.BtnAdd onClick={this.isToggleAdd}>Adicionar filme</S.BtnAdd>
                        {showAdd ? ( 
                        <S.BoxModal>
                          <S.TitleBox>
                            <S.TitleModal>Adicionar Filme</S.TitleModal>
                          </S.TitleBox>
                          <S.FormBox>
                            <S.Form>
                              <div>
                                <S.TitleInput>Nome</S.TitleInput>
                                <S.InputName type="text" placeholder="Digite o nome do filme" onChange={this.handleChangeTitle}/>
                              </div>
                              <div>
                              <S.TitleInput>Descrição</S.TitleInput>
                                <S.InputDescription type="text" placeholder="Digite a sinopse" onChange={this.handleChangeDescription}/>
                              </div>
                            </S.Form>
                            <S.FormImg>
                              <S.TitleInput>Imagem de Capa</S.TitleInput>
                              <S.InputImg src={this.state.poster} alt=""/>
                              <input type="text" placeholder="Digite seu link" onChange={this.handleChangePoster}/>
                            </S.FormImg>
                          </S.FormBox>
                          <S.SectionStatus>
                            <S.BoxStatus>
                              <S.TitleInput>Status</S.TitleInput>
                              <S.OptionRadio>
                                <S.SpanRadio>
                                  <input onChange={this.radioChangedTrue} type="radio" name="status" value="true"/>
                                  <p>Já assisti</p>
                                </S.SpanRadio>
                                <S.SpanRadio>
                                  <input  onChange={this.radioChangedFalse} type="radio" name="status" value="false"/>
                                  <p>Ainda não assisti</p>
                                </S.SpanRadio>
                              </S.OptionRadio>
                            </S.BoxStatus>
                            <S.BoxRating>
                              <S.TitleInput>Nota</S.TitleInput>
                              <ReactStars
                                count={5}
                                onChange={this.ratingChanged}
                                size={40}
                                activeColor="#ffd700"
                              />
                            </S.BoxRating>
                          </S.SectionStatus>
                          <S.BoxButton>
                            <S.BtnCancel onClick={this.isClosetAll}>Cancelar</S.BtnCancel>
                            <S.BtnConfirm onClick={this.isAddFilms}>Confirmar</S.BtnConfirm>
                          </S.BoxButton>
                        </S.BoxModal>
                        
                        ): null}
                    
                      <S.BoxSearch>
                        <S.Search placeholder="Pesquisar" type="text"/>
                      </S.BoxSearch>
                      
                    <S.BoxPerfils>
                      <S.BoxConfig onClick={this.isTogglePerfil}>
                        {swapUser === 1 ? 
                        <S.ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
                                  <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                  <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                </g>
                              </g>
                        </S.ImgAvatar>: 
                        swapUser === 2 ?
                        <S.ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                  <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
                                    <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                    <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                  </g>
                                </g>
                        </S.ImgAvatar>:
                        <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
                                  <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                  <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                </g>
                              </g>
                        </S.AvatarUser>}
                        
                        {showPerfil ?  <p>&#9662;</p>:<p>&#9656;</p>}
                      </S.BoxConfig>
                      <S.DivTeste>
                        {showPerfil ? (
                          <S.BoxAvatar>
                            <S.BoxAccount onClick={this.isToggleSwap1}>
                            <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
                                  <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                  <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                </g>
                              </g>
                            </S.AvatarUser>
                              <p>Fernando</p>
                            </S.BoxAccount>
                            <S.BoxAccount onClick={this.isToggleSwap2}>
                            <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
                                  <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                  <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                </g>
                              </g>
                            </S.AvatarUser>
                              <p>Dan</p>
                            </S.BoxAccount>
                            <S.BoxAccount onClick={this.isToggleSwap3}>
                            <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
                                <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
                                  <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
                                  <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
                                </g>
                              </g>
                            </S.AvatarUser>
                              <p>Marlon</p>
                            </S.BoxAccount>
                          </S.BoxAvatar>)
                          : null}
                      </S.DivTeste>
                    </S.BoxPerfils>
                </S.SectionAdd>
            </S.BoxSection>
        </S.Container>
    )
  }
}
