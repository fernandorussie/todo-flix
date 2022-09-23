import React, { Component } from 'react'

//services
import { api } from '../services/api'
// import Data from '../db.json'

//components 
import Slide from '../components/slide'
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
    filmes:filmes
  })
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
      return
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
                <TitleFilm>{item.title}</TitleFilm>
              </Card>
            ))}
            </BoxWraper>)}
      </div>
    )
  }
}


//import React, { Component } from 'react'
// import Data from '../db.json'

// import Slide from '../components/slide'
// import styled from 'styled-components'
// import * as S from '../components/styles/styleApp'

// const BoxWraper = styled.div`
//   display:flex;
//   flex-wrap: wrap;
//   justify-content: center;

// `
// const Card = styled.div`
//   height: 38vh;
//   margin:18px;
//   padding: 10px 0;
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   color:white;
// `
// const Poster = styled.img`
//   width: 300px;
//   height: 170px;
// `

// export default class Home extends Component {
  
//   state = {
//     filmes: Data,
//     listafilter:[]
//   }
// filtro = (e) => {
//   const {filmes} = this.state;
//   if(e.target.value.length < 1) {
//     this.setState({
//       listafilter:[]
//     })
//     return
//   }
//   const filmeconvert = filmes.filter((item) => {
//     if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
//       return true
//     }
//   })
//   this.setState({
//     listafilter:filmeconvert
//   })
// }

//   render() {
//     return (
//       <div>
//         <S.Search2 onChange={this.filtro} placeholder="Pesquisar" type='text'/>
//           {this.state.listafilter.length < 1? <Slide/>:(<BoxWraper>
//             {this.state.listafilter.map((item) => (
//               <Card key={item.id}>
//                 <Poster src={item.poster}/>
//                 <p>{item.title}</p>
//               </Card>
//             ))}
//             </BoxWraper>)}
        
//       </div>
//     )
//   }
// }