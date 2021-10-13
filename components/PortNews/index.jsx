import styled from 'styled-components'

const PortNews = () => {
  return (
    <ContentPort>
      <WrapperTitle>
        <ContTitleBajada>
          <Title>
            Así la tabla de las Eliminatorias rumbo a Qatar 2022 en Sudamérica
          </Title>
          <WrapperBajada>
            <Bajada>
              Fecha a fecha. Sigue el fixture, los resultados y la tabla de posiciones de las eliminatorias
              sudamericanas que definirán a los cuatro clasificados para el Mundial Qatar 2022 y a la selección
              que disputará el repechaje.
            </Bajada>
          </WrapperBajada>
        </ContTitleBajada>
      </WrapperTitle>
      <ImagePort
        src='https://delatribuna.com/wp-content/uploads/2020/11/tabla-de-posiciones_eliminatorias_sudamericanas-696x464.jpg'
        alt={'slider'}
      />
    </ContentPort>
  )
}

export default PortNews

const Redirect = styled.a`
  height: 100%;
`
const ContentPort = styled.div`
  position: relative;
`
const ContTitleBajada = styled.div`
  position: absolute;
  bottom: 180px;
  height: auto;
  width: auto;
`
const WrapperTitle = styled.div`
  align-items: center;
  background: rgba(0,0,0,.48);
  display: flex;
  height: 100%;
  padding-left: 50px;
  position: absolute;
  width: 100%;
`
const Title = styled.h1`
  width: auto;
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: start;
  text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
  margin-bottom: 70px;
  line-height: 35px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
const WrapperBajada = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  align-items: center;
  align-items: center;
  max-width: 86%;
  margin: -54px 0px;
  font-size: 15px;
`
const Bajada = styled.h2`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 500;
  font-style: italic;
  text-transform: initial;
  text-align: start;
  line-height: 22px;
  text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
`
const ImagePort = styled.img`
  height: 100%;
  width: 100%;
`