import styled from 'styled-components' 

const ClasificationSA = () => {
  return (
    <ContainerComponent>
      <Title>
        Próximos partidos de las Eliminatorias a Qatar 2022
      </Title>
      <Bajada>
        ¿Qué partidos faltan, cuáles fueron los resultados anteriores 
        y en qué mes se disputarán las últimas fechas? Todos 
        los detalles aquí.
      </Bajada>
    </ContainerComponent>
  )
}

export default ClasificationSA

const ContainerComponent = styled.div`
  height: 350px;
  width: 100%;
  background-color: skyblue;
`
const Title = styled.h2`
  font-size: 25px;
  text-align: center;
  padding-top: 5px;
`
const Bajada = styled.h3`
  font-size: 15px;
  font-weight: 500;
  width: 80%;
  margin: 10px auto 0;
  font-style: italic;
`