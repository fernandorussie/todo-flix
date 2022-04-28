import React, { Component } from 'react'
import * as S from './styles/styleApp'

export default class AddModal extends Component {
  render() {
    return (
      <div>
          <S.TitleBox>
            <S.TitleModal>Adicionar Filme</S.TitleModal>
          </S.TitleBox>
          <S.FormBox>
            <S.Form>
              <div>
                <S.TitleInput>Nome</S.TitleInput>
                <S.InputName type="text"/>
              </div>
              <div>
              <S.TitleInput>Descrição</S.TitleInput>
                <S.InputDescription type="text"/>
              </div>
            </S.Form>
            <S.FormImg>
              <S.TitleInput>Imagem de Capa</S.TitleInput>
              <S.InputImg src=""alt=""/>
              <input type="file" name="myImage" accept=".png, .jpg, .jpeg"  onChange={this.handleChange}/>
            </S.FormImg>
          </S.FormBox>
          <S.SectionStatus>
            <S.BoxStatus>
              <S.TitleInput>Status</S.TitleInput>
              <S.OptionRadio>
                <S.SpanRadio>
                  <input type="radio" name="status" value="Já assisti"/>
                  <p>Já assisti</p>
                </S.SpanRadio>
                <S.SpanRadio>
                  <input type="radio" name="status" value="Já assisti"/>
                  <p>Ainda não assisti</p>
                </S.SpanRadio>
              </S.OptionRadio>
            </S.BoxStatus>
            <S.BoxRating>
              <S.TitleInput>Nota</S.TitleInput>
              <p>Estrelas</p>
            </S.BoxRating>
          </S.SectionStatus>
          <div>
            <button onClick={this.isToggleAdd}>Cancelar</button>
            <button>Confirmar</button>
          </div>
      </div>
    )
  }
}
