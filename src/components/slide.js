
import Carousel from 'nuka-carousel';
import styled from 'styled-components'

const Carousels = styled(Carousel)` 
  width: 100%;
  height: 60vh;
  background-color: ;
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

export const nukaCarousel = ({state, img, title}) => {
    return (
        <div>
           <Carousels autoGenerateStyleTag={true} renderBottomCenterControls={false} wrapAround={true} slidesToShow={3} autoplay={true} autoplayInterval={2500} renderCenterLeftControls={({ previousSlide }) => (
                      <Arrow onClick={previousSlide} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></Arrow>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                      <Arrow onClick={nextSlide} 
                      xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></Arrow>
                  )}
            >
              {{state}.map((item) => (
                <div>
                  <div>
                    <img src={{img}} alt=""/>
                  </div>
                  <p>{title}</p>
                </div>
              ))}
            </Carousels>
        </div>
      )
}
   