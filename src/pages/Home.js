import React, { Component } from 'react'

import { nukaCarousel } from '../components/slide'

import ImgFilme from '../assets/ToDoFlix Início/capitão.png'
import imgCoracao from '../assets/ToDoFlix Início/Component 11 – 1.svg'
import styled from 'styled-components'

const Container = styled.div`
max-width: 1920px;
width: 100%;
margin: 0 auto;
padding: 25px;
` 
const BestFilm = styled.div`
display: flex;
padding: 25px;
width: 100%;
`
const BoxDiscription = styled.div`
color:white;
padding: 25px;
`
export default class Header extends Component {
  state = {
    DestaqueFilmes:[
      {title:"Shrek",
      overview:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      rank:"4/5",
      poster:""
      },
      {title:"Capitão Fantástico",
      overview:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
      rank:"4/5",
      poster:ImgFilme
      },
      {title:"Hoje Eu Quero Voltar Sozinho",
      overview:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      rank:"",
      poster:""
      },
      {title:"Spider-man",
      overview:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      rank:"3/5",
      poster:""
      },
      {title:"Um Sonho de Liberdade",
      overview:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      rank:"4,5/5",
      poster:""
      },
      {title:"Que Horas Ela Volta?",
      overview:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      rank:"",
      poster:""
      },
    ]
  }
  render() {
    const {DestaqueFilmes} = this.state
    return (
      <Container>
        <section>
          <BestFilm>
            <figure>
              <img src={DestaqueFilmes[1].poster} alt=""/>
            </figure>
            <BoxDiscription>
              <img src={imgCoracao} alt=""/>
              <h3>Visto recentemente</h3>
              <h2>{DestaqueFilmes[1].title}</h2>
              <p>{DestaqueFilmes[1].overview}</p>
              <div>
                <p></p>
                <img src="" alt=""/>
              </div>
            </BoxDiscription>
            

          </BestFilm>

        </section>
        <section>
        </section>
      </Container>
    )
  }
}
