import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;

  }
`
const Container = styled.div`
  min-height: 100vh;
  background-color: black;
` 

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle/>
        <Header/>
        <Home/>
        
      </Container>
    )
  }
}

// import React, { Component } from 'react'
// import styled from 'styled-components'

// const Background = styled.div`
//   min-height: 100vh;
//   background-color: black;
// ` 
// const BoxCategorias = styled.div`
//   width: 200px;
//   background-color: red;
//   position:absolute;
// `
// export default class App extends Component {
//   state  = {
//     show:false,
//   }
  
//   Toggle = () => {
//     this.setState({show:!this.state.show})
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.Toggle}>Clique aqui</button>
        // <div>{this.state.show ? (
        //   <BoxCategorias>
        //     <h1>Categorias</h1>
        //     <ul>
        //       <li>Filmes</li>
        //       <li>Séries</li>
        //       <li>Programa de TV</li>
        //     </ul>
        //   </BoxCategorias>): null}
//         </div>
//         <Background/>
//       </div>
//     )
//   }
// }
