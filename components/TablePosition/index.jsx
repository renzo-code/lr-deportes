import styled from 'styled-components'
import Head from 'next/head'
import OptaComp from '../Opta'
import ClasificacionesMundial from '../Estadistica/ClasificacionMundial'

const TablePosition = () => {
  return (
    <>
  <Head>
    <script src="https://secure.widget.cloud.opta.net/2.0/js/widgets.opta.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://secure.widget.cloud.opta.net/2.0/css/widgets.opta.css" type="text/css" />
    <OptaComp/>
  </Head>
  <ContentTable>
    <WrapperTitle>
      <Title>Tabla de posiciones EN VIVO rumbo a Qatar 2022</Title>
    </WrapperTitle>
    <BlackOpta>
      <ClasificacionesMundial/>
    </BlackOpta>
  </ContentTable>
    </>
  )
}

export default TablePosition

const ContentTable = styled.div`
  height: auto;
  width: 100%;
  background-color: #8D1A41;
`
const WrapperTitle = styled.div`
  height: auto;
  padding-top: 5px;
  width: 55%;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(141,26,65,1) 92%, rgba(141,26,65,1) 100%);  
`
const Title = styled.h2`
  font-size: 23px;
  text-align: left;
  /* padding-left: 15px; */
  padding: 2px 0 2px 15px ;
  /* color: white; */
`
const BlackOpta = styled.div`
  width: 65%;
  height: auto;
  padding: 40px;
  margin: 0 auto;
`