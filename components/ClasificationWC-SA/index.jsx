import styled from 'styled-components'

const EstadisticasSAWC = () => {
  return (
    <ContainerEstadistica>
      <Title>
        Estadísticas de las clasificatorias a Qatar 2022
      </Title>
      <Bajada>
        Conoce quiénes lideran la tabla de goleadores, los futbolistas 
        con más asistencias, pero también aquellos que han acumulado más 
        tarjetas amarillas y rojas.
      </Bajada>
    </ContainerEstadistica>
  )
}

export default EstadisticasSAWC

const ContainerEstadistica = styled.div`
  height: 350px;
  width: 100%;
  background-color: tomato;
`
const Title = styled.h2`
  padding-top: 5px;
  font-size: 25px;
  text-align: center;
`
const Bajada = styled.h3`
  font-size: 15px;
  font-style: italic;
  text-align: center;
  margin: 10px auto 0;
  font-weight: 500;
  width: 80%;
`