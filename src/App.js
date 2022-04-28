// import React, { Component } from 'react'
// import { api } from './services/api'


// export default class App extends Component {
//  state = {
//    filmes:[],
//    listaFilmes:[],
//    title:[],
//    poster:[]
//  }
//  async componentDidMount() {
//    this.getFilmes();
// }
// getFilmes = async () => {
//   const response = await api.get('/filmes')
//   console.log(response)

//   const filmes = response.data.map((item) =>  { return {
//       ...item,
//   }
//   })

//   this.setState({
//     filmes:filmes
//   })
// }
// add = async () => {
//   const add = await api.post("/filmes",{
//     title: this.state.title,
//     poster: this.state.poster
//   })
//   //não sei pra q serve
//   // .then(function (response) {
//   //   console.log(response);
//   // })
//   // .catch(function (error) {
//   //   console.error(error);
//   // });
//   // console.log(add)
// }
// handleChange = (e) => {
//   this.setState({
//     title: e.target.value
//   })
// }
// handleChangeImg = (e) => {
//   this.setState({
//     poster: e.target.value
//   })
// }
// // api.get('/filmes').then((response) => {
// //   console.log(response);
// //   this.state.listaFilmes(response.data)
// // }


//   render() {
//     return (
//       <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap", width:"100%",background:"blue"}}>
//         <form onSubmit={this.add}>

//           <input onChange={this.handleChange} type="text" placeholder="Digite seu nome"/>

//           <input onChange={this.handleChangeImg} type="text" placeholder="Digite seu link"/>

//           <button style={{height:"50px"}}>Adicionar Objeto</button>
          
//         </form>
        
//         {this.state.filmes?.map((item, id) => (
//          <div key={id} style={{margin:"12px"}}>
//            <p>{item.title}</p>
//            <img style={{width:"300px",height:"170px"}} src={item.poster}/>
//          </div> 
//         ))}
//       </div>
//     )
//   }
// }















import React, { Component } from 'react'

import Header from './components/header'

import Home from './pages/Home.js'
import Todos from './pages/Todos.js'
import Javisto from './pages/Javisto.js'
import Favoritos from './pages/Favoritos.js'
import Adicionados from './pages/Adicionados.js'

import { BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    input::placeholder {
    color: white;
    font-weight: 700;
  }
  }
  body{
    max-width: 1920px;
    width: 95%;
    min-height: 100vh;
    margin: 0 auto;
    padding:10px;
    background-color: black;
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todos' element={<Todos/>}/>
          <Route path='/favoritos' element={<Favoritos/>}/>
          <Route path='/vistorecente' element={<Javisto/>}/>
          <Route path='/adicionados' element={<Adicionados/>}/>
        </Routes>
      </Router>
    )
  }
}

























// import React, { Component } from 'react'

// import Home from './pages/Home'
// import * as S from './components/styles/styleApp'
// import { BrowserRouter as Router,
//   Routes,
//   Route,
//   Link } from 'react-router-dom'

// import IMGinput from './assets/assetsHeader/inputIMG.svg'

// export default class Header extends Component {
//   state={
//     showMenu:false,
//     showPerfil:false,
//     showSearch:false,
//     showAdd:true,
//     swapUser:1
//   }
  
//   isToggleMenu = () => {
//     this.setState({
//       showMenu:!this.state.showMenu,
//       showPerfil:false,
//       showAdd:false
//     })
//   }
//   isTogglePerfil = () => {
//     this.setState({
//       showPerfil:!this.state.showPerfil,
//       showMenu:false,
//       showAdd:false
//     })
//   }
//   isToggleSearch = () => {
//     this.setState({
//       showSearch:!this.state.showSearch})
//   }
//   isToggleAdd = () => {
//     this.setState({
//       showAdd:!this.state.showAdd,
//       showMenu:false,
//       showPerfil:false
//     })
//   }
//   isToggleSwap1 = () => {
//     this.setState({
//       swapUser:1,
//       showPerfil:false
//     })
//   }
//   isToggleSwap2 = () => {
//     this.setState({
//       swapUser:2,
//       showPerfil:false
//     })
//   }
//   isToggleSwap3 = () => {
//     this.setState({
//       swapUser:3,
//       showPerfil:false
//     })
//   }
//   render() {
//     const {showMenu, showPerfil, showAdd, swapUser} = this.state
//     return (
//       <S.Container>
//           <S.GlobalStyle/>
//           <Router>
//             <S.BoxSection>
//                 <S.SectionLogo>
//                     <S.Logo>TODOFLIX</S.Logo>
//                     <S.Links to='/'>Início</S.Links>
                    
//                       <div >
//                         <S.BtnCat onClick={this.isToggleMenu}><p>Categorias</p>{showMenu ?  <p>&#9662;</p> : <p>&#9656;</p>}</S.BtnCat>
//                         {showMenu ? (
//                         <S.BoxCategorias>
//                             <S.Links to='/todos'>Todos</S.Links>
//                             <S.Links to='/favoritos'>Favoritos</S.Links>
//                             <S.Links to='/javistos'>Já vistos</S.Links>
//                             <S.Links to='/adicionados'>Adicionados</S.Links>
//                         </S.BoxCategorias>): null}
//                       </div>
                    
//                 </S.SectionLogo>
//                 <S.SectionAdd>
//                     <S.BtnAdd onClick={this.isToggleAdd}>Adicionar filme</S.BtnAdd>
//                         {showAdd ? (
//                         <S.BoxModal>
//                           <S.TitleBox>
//                             <S.TitleModal>Adicionar Filme</S.TitleModal>
//                           </S.TitleBox>
//                           <S.FormBox>
//                             <S.Form>
//                               <div>
//                                 <S.TitleInput>Nome</S.TitleInput>
//                                 <S.InputName type="text"/>
//                               </div>
//                               <div>
//                               <S.TitleInput>Descrição</S.TitleInput>
//                                 <S.InputDescription type="text"/>
//                               </div>
//                             </S.Form>
//                             <S.FormImg>
//                               <S.TitleInput>Imagem de Capa</S.TitleInput>
//                               <S.InputImg src={IMGinput} alt=""/>
//                               <input type="file" name="image"/>
//                             </S.FormImg>
//                           </S.FormBox>
//                           <S.SectionStatus>
//                             <S.BoxStatus>
//                               <S.TitleInput>Status</S.TitleInput>
//                               <S.OptionRadio>
//                                 <S.SpanRadio>
//                                   <input type="radio" name="status" value="Já assisti"/>
//                                   <p>Já assisti</p>
//                                 </S.SpanRadio>
//                                 <S.SpanRadio>
//                                   <input type="radio" name="status" value="Já assisti"/>
//                                   <p>Ainda não assisti</p>
//                                 </S.SpanRadio>
//                               </S.OptionRadio>
//                             </S.BoxStatus>
//                             <S.BoxRating>
//                               <S.TitleInput>Nota</S.TitleInput>
//                               <p>Estrelas</p>
//                             </S.BoxRating>
//                           </S.SectionStatus>
//                           <div>
//                             <button onClick={this.isToggleAdd}>Cancelar</button>
//                             <button>Confirmar</button>
//                           </div>
//                         </S.BoxModal>): null}
//                     <S.BoxSearch>
//                       <S.Search placeholder="Pesquisar" type="text"/>
//                     </S.BoxSearch>
//                     <S.BoxPerfils>
//                       <S.BoxConfig onClick={this.isTogglePerfil}>
//                         {swapUser === 1 ? 
//                         <S.ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                               <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                 <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                   <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
//                                   <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                   <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                 </g>
//                               </g>
//                         </S.ImgAvatar>: 
//                         swapUser === 2 ?
//                         <S.ImgAvatar xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                                 <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                   <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                     <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
//                                     <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                     <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                   </g>
//                                 </g>
//                         </S.ImgAvatar>:
//                         <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                               <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                 <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                   <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
//                                   <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                   <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                 </g>
//                               </g>
//                         </S.AvatarUser>}
                        
//                         {showPerfil ?  <p>&#9662;</p>:<p>&#9656;</p>}
//                       </S.BoxConfig>
//                       <S.DivTeste>
//                         {showPerfil ? (
//                           <S.BoxAvatar>
//                             <S.BoxAccount onClick={this.isToggleSwap1}>
//                             <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                               <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                 <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                   <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#16F000"/>
//                                   <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                   <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                 </g>
//                               </g>
//                             </S.AvatarUser>
//                               <p>Fernando</p>
//                             </S.BoxAccount>
//                             <S.BoxAccount onClick={this.isToggleSwap2}>
//                             <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                               <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                 <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                   <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#168BF7"/>
//                                   <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                   <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                 </g>
//                               </g>
//                             </S.AvatarUser>
//                               <p>Dan</p>
//                             </S.BoxAccount>
//                             <S.BoxAccount onClick={this.isToggleSwap3}>
//                             <S.AvatarUser xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                               <g id="Group_32" data-name="Group 32" transform="translate(-1254 -17)">
//                                 <g id="Group_1" data-name="Group 1" transform="translate(18 -31)">
//                                   <rect id="Rectangle_4" data-name="Rectangle 4" width="32" height="32" transform="translate(1236 48)" fill="#F7E316"/>
//                                   <rect id="Box" width="24" height="24" transform="translate(1240 52)" fill="none"/>
//                                   <path id="Path_1990" data-name="Path 1990" d="M972-66.1a2.1,2.1,0,0,1,2.1,2.1,2.1,2.1,0,0,1-2.1,2.1,2.1,2.1,0,0,1-2.1-2.1A2.1,2.1,0,0,1,972-66.1Zm0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H965.9V-55C965.9-55.64,969.03-57.1,972-57.1ZM972-68a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4,4,0,0,0,972-68Zm0,9c-2.67,0-8,1.34-8,4v3h16v-3C980-57.66,974.67-59,972-59Z" transform="translate(280 124)" fill="#fff"/>
//                                 </g>
//                               </g>
//                             </S.AvatarUser>
//                               <p>Marlon</p>
//                             </S.BoxAccount>
//                           </S.BoxAvatar>)
//                           : null}
//                       </S.DivTeste>
//                     </S.BoxPerfils>
//                 </S.SectionAdd>
//             </S.BoxSection>
//             <Routes>
//               <Route path="/" element={<Home/>}/>
//             </Routes> 
//           </Router>
//         </S.Container>
//     )
//   }
// }
