import React, { Component } from 'react'
import Slide from '../components/slide'
import * as S from '../components/styles/styleApp'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/todos'>
          <S.Search2 placeholder="Pesquisar" type='text'/>
        </Link>
        <Slide/>
      </div>
    )
  }
}