import Lupa from '../../assets/assetsHeader/lupa.svg'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
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
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding:10px;
    background-color: ;
  }
`
export const Body = styled.div`
    
`
export const Container = styled.div`
    background-color: black;
`
export const BoxSection = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
`
export const SectionLogo = styled.div`
    width: 40%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
`
export const Logo = styled(Link)`
  font-size: 38px;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Bebas Neue', cursive;
  color: #E71B27;
  cursor:pointer;
`
export const Btn = styled.p`
  cursor:pointer;

`
export const BtnCat = styled.div`
  width: 100px;
  display:flex;
  justify-content: space-between;
  cursor:pointer;
`
export const Links = styled(Link)`
  margin-top: 5px;
  color: white;
  text-decoration: none;
  cursor:pointer;
  &:hover{
    text-decoration: underline;
  }
`
export const BoxCategorias = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: black;
  position:absolute;
`
export const SectionAdd = styled.div`
    width: 45%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    position:relative;
`
export const BtnAdd = styled.button`
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
export const BoxSearch = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  position:relative;
`
export const Search = styled.input`
    width: 0vw;
    height: 43px;
    background-color: red;
    border-radius: 4px;
    border:none;
    color: white;
    padding:15px 20px 15px 20px;
    visibility: hidden;
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
export const Search2 = styled.input`
    width: 0vw;
    height: 44px;
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
    top: 3.4%;
    left: 66%;
    transition: 0.3s ease all;
    &:focus{
      width: 25vw;
      padding-left:35px;
    } 
`
export const BoxPerfils = styled.div`
  width: 4vw;
  color: white;
`
export const ImgAvatar = styled.svg`
  width: 35px;
`
export const BoxConfig = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
`
export const DivTeste = styled.div`
  display:flex;
`
export const BoxAvatar = styled.div`
  width: 10vw;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: black;
  position:absolute;
  right: 2vw;
`
export const BoxAccount = styled.div`
  display:flex;
  align-items: center;
  margin-top:5px;
  color: white;
  cursor:pointer;
  &:hover{
    border:white solid 1px;
  }
`
export const AvatarUser = styled.svg`
  margin-right: 5px;
`
export const BoxModal = styled.form`
  position: fixed;
  top:10%;
  left:25%;
  z-index: 3;

  width: 50vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  padding: 30px;
  color:white;
  background-color: #000;
  border: 1px #808080 solid;
  border-radius: 10px;
`
export const TitleBox = styled.div`
width: 100%;

`
export const TitleModal = styled.h2`
font-size:20px;
`
export const FormBox = styled.div`
width: 100%;
height: 40%;
display: flex;
justify-content: space-between;
`
export const Form = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const TitleInput = styled.p`
`
export const FormImg = styled.div`
width: 38%;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`
export const InputImg = styled.img`
width: 200px;
border:1px solid #585858;
border-radius: 4px;
`
export const InputName = styled.input`
width: 100%;
height: 7vh;
background: #2C2C2C;
border-radius: 4px;
border: none;
`
export const InputDescription = styled.input`
width: 100%;
height: 14vh;
background: #2C2C2C;
border-radius: 4px;
border: none;
`
export const SectionStatus = styled.div`
width: 100%;
`
export const BoxStatus = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`
export const OptionRadio = styled.div`
display: flex;
`
export const SpanRadio = styled.div`
display: flex;
margin: 5px 18px 5px 0;
`
export const BoxRating = styled.div`
`