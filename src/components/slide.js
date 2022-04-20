import React, { Component } from 'react'

import Carousel from 'nuka-carousel';
import Img1 from '../assets/ToDoFlix Início/img1.png'
import Img2 from '../assets/ToDoFlix Início/img2.png'
import Img3 from '../assets/ToDoFlix Início/img3.png'
import Img4 from '../assets/ToDoFlix Início/img4.png'
import Img5 from '../assets/ToDoFlix Início/img5.png'
import Img0 from '../assets/ToDoFlix Início/capitão.png'
import styled from 'styled-components'

const Container = styled.div`
max-width: 1920px;
width: 100%;
min-height: 100vh;
margin: 0 auto;
padding: 25px;
` 
const BestFilm = styled.div`
display: flex;
padding: 25px;
width: 100%;
`
const BoxDiscription = styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: space-around;
color:white;
padding: 25px;
`
const SectionCarousel = styled.section`
  width: 100%;
`
const Carousels = styled(Carousel)` 
  width: 100%;
`
const Arrow = styled.svg`
  fill:#fff;
  opacity: 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`
const BtnFav = styled.figure`
  width: 22px;
  cursor: pointer;
`
const Favorite = styled.svg`
  fill:#FF0000;
`
export default class Slide extends Component {
  state = {
    DestaqueFilmes:[
      {title:"Capitão Fantástico",
      overview:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
      rank:"4/5",
      poster:Img0
      }
    ],
    Carrossel:[
      {id:1,
      title:"Shrek",
      overview:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      rank:"4/5",
      poster:Img4
      },
      {id:2,
      title:"Hoje Eu Quero Voltar Sozinho",
      overview:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      rank:"",
      poster:Img5
      },
      {id:3,
      title:"Spider-man",
      overview:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      rank:"3/5",
      poster:Img3
      },
      {id:4,
      title:"Um Sonho de Liberdade",
      overview:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      rank:"4,5/5",
      poster:Img2
      },
      {id:5,
      title:"Que Horas Ela Volta?",
      overview:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      rank:"",
      poster:Img1
      },
    ],
    colorFav: false,
  }
  isToggleFav = () => {
    this.setState({
      colorFav:!this.state.colorFav
    })
  }
 
  render() {
    const {DestaqueFilmes, Carrossel, colorFav} = this.state
    return (
      <Container>
        <section>
          <BestFilm>
            <figure>
              <img src={DestaqueFilmes[0].poster} alt=""/>
            </figure>
            <BoxDiscription>
              <BtnFav onClick={this.isToggleFav}>
                {colorFav? <Favorite id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                  <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10.5" cy="11" rx="10.5" ry="11" fill="#FF0000"/>
                  <path id="Path_407" data-name="Path 407" d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z" transform="translate(-854.5 1421)" fill="#B22222"/>
                </Favorite> : 
                <svg id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                  <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10.5" cy="11" rx="10.5" ry="11" fill="#717171"/>
                  <path id="Path_407" data-name="Path 407" d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z" transform="translate(-854.5 1421)" fill="#b1b1b1"/>
                </svg>}
                
              </BtnFav>
              <h3>Visto recentemente</h3>
              <h2>{DestaqueFilmes[0].title}</h2>
              <p>{DestaqueFilmes[0].overview}</p>
              <div>
                <p></p>
                <img src="" alt=""/>
              </div>
            </BoxDiscription>
          </BestFilm>
        </section>
        <SectionCarousel style={{color:'white'}}>
        <Carousels pauseOnHover={true} cellAlign={'center'} cellSpacing={10} dragging={false} autoGenerateStyleTag={true} renderBottomCenterControls={false} wrapAround={true} slidesToShow={4} autoplay={true} autoplayInterval={2500} renderCenterLeftControls={({ previousSlide }) => (
                    <Arrow onClick={previousSlide} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></Arrow>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <Arrow onClick={nextSlide} 
                        xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></Arrow>
                )}>
          {Carrossel.map((item) => (
              <div>
                <img src={item.poster} alt={item.title}/>
                <div>
                  <p>{item.title}</p>
                  <p>{item.overview}</p>
                </div>
              </div>
          ))}
        </Carousels>
        </SectionCarousel>
      </Container>
    )
  }
}
