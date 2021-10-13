import styled from 'styled-components'

const Footer = () => {
  return(
    <>
      <ContainerFooter>
        <div>
          <Wrappertitle>
            <TitleFooter>Texto: </TitleFooter>
              <Drafting> Alonso Marín Jiménez</Drafting>
          </Wrappertitle>
          <Wrappertitle>
            <TitleFooter>Desarrollo Web: </TitleFooter>
              <Drafting> Renzo Neira</Drafting>
          </Wrappertitle>
          <Wrappertitle>
            <TitleFooter>Edición General: </TitleFooter>
              <Drafting> Alonso Marín Jiménez</Drafting>
          </Wrappertitle>
        <br /><br />
          <Drafting>© Grupo La República</Drafting>
          <Drafting>Todos los derechos reservados.</Drafting>
        </div>
      </ContainerFooter>
    </>
  )
}

export default Footer

const ContainerFooter = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
const Wrappertitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleFooter = styled.h2`
  font-size: 15px;
  font-weight: bolder;
  padding-right: 5px;
`
const Drafting = styled.h3`
  font-size: 14px;
  font-weight: 100;
  text-align: center;
  color: #545b6a;
`