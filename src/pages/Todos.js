import React, { Component } from 'react'

import Header from '../components/header'
import styled from 'styled-components'

import Img1 from '../assets/ToDoFlix Início/img1.png'
import Img2 from '../assets/ToDoFlix Início/img2.png'
import Img3 from '../assets/ToDoFlix Início/img3.png'
import Img4 from '../assets/ToDoFlix Início/img4.png'
import Img5 from '../assets/ToDoFlix Início/img5.png'
import Img0 from '../assets/ToDoFlix Início/capitão.png'
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
export const BoxSearch = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  position:relative;
`

export default class Todos extends Component {
  state = {
    filmes:[
      {title:"Pânico",poster:"https://netflix-news.atsit.in/br/wp-content/uploads/2022/03/panico-6-confirmado-para-lancamento-no-proximo-ano.jpg"},{title:"Morbius",poster:"https://burnbook.b-cdn.net/wp-content/uploads/2022/04/Morbius-2.webp"},
      {title:"Avatar 2 The Way of Water",poster:"http://disneyplusbrasil.com.br/wp-content/uploads/2022/03/Avatar-2-The-Way-of-Water.jpg"},
      {title:"Pantera Negra 2",poster:"https://blogger.googleusercontent.com/img/a/AVvXsEiJ8YTekPwNfXeT3D4L3DXa2AmP7v7DzQ0b5Muzrow_1k2FJKk7LopLuRYDnyLNbrUyTYvaWwjor1BfHYl8wnv4bTLESUQEOCzQWV2YVSFoM_KvSmR_xcR8aqxDKDM4AQnlT4xWwR4WWZbZP3k6gMsKYzGog7Igaso_pXgEo2gXM_LM2Za_ZA"},
      {title:"Thor Amor e Trovão",
      overview:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
      rank:"4/5",
      poster:'http://www.apocalipsters.com.br/wp-content/uploads/2020/11/maxresdefault-1.jpg'
      },
      {id:1,
      title:"Homem Aranha",
      overview:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      rank:"4/5",
      poster:'https://filmdaily.co/wp-content/uploads/2021/12/spiderman-01-1.jpg'
      },
      {id:2,
      title:"Arcane",
      overview:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      rank:"",
      poster:'https://meekz.com.br/wp-content/uploads/2021/10/FC4O0PQWQAUFo4U.jpg'
      },
      {id:3,
      title:"What If...?",
      overview:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      rank:"3/5",
      poster:'https://geekdoinfinito.com.br/wp-content/uploads/2021/08/What-If-Disney-Plus-1024x576-1-768x432-1.jpg'
      },
      {id:4,
      title:"Doutor Estranho no Multiverso na Loucura",
      overview:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      rank:"4,5/5",
      poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6JPJokkrRS7xBASYJuB2oX9cI8IjOCpzsZDMbqVCH2cEQIgkyD9-auqNoTxCPX9meuQ&usqp=CAU'
      },
      {id:5,
      title:"Stranger Things 4",
      overview:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      rank:"",
      poster:'https://www.metroworldnews.com.br/resizer/SfpSMOCNOLgi8PZcBjvg7eCkr9o=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/QAK7XA4PFBB23J4USLMUU4BJME.png'
      },
      {title:"White Chicks",poster:'https://image.tmdb.org/t/p/w1280/gghCiBhPt5AImIJkQz0fPR0C1cL.jpg'},
      {title:"Moonfall",poster:"https://br.atsit.in/wp-content/uploads/2022/01/lionsgate-lanca-trailer-oficial-de-moonfall-um-novo-filme-de-desastre-do-diretor-do-dia-da-independencia.jpg"},
      {title:"Shrek",poster:Img4},
      {title:"Hoje Eu Quero Voltar Sozinho",poster:Img5},
      {title:"Spider-man", poster:Img3},
      {title:"Um Sonho de Liberdade",poster:Img2 },
      {title:"Que Horas Ela Volta?",poster:Img1},
      {title:"Crocodilos – A Morte te Espera",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn80716MuXmxiqMObLJAsnCL3eX0ydrn0CuC1L7Ca6UyLdpI7dNLriXCZ6jb57rwaZSM&usqp=CAU"},
      {title:"Jurassic World: Domínio",poster:"https://epipoca.com.br/wp-content/uploads/2021/06/jurassic-world-dominion-sam-neill-compartilha-poster.jpg"},
    
    ],
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
        <Teste>TODOS OS FILMES</Teste>
        <BoxWraper>
          {this.state.listafilter.map((item) => (
            <Card key={item.id}>
              <Poster src={item.poster}/>
              <p>{item.title}</p>
            </Card>
          ))}
        </BoxWraper>
      </div>
    )
  }
}
