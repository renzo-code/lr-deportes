import Layout from "../layout/default"
import styled from 'styled-components'

import Footer from "../components/Footer"
import PortNews from "../components/PortNews"
import TablePosition from "../components/TablePosition"
import ClasificationSA from "../components/Clasification-SD-WC"
import EstadisticasSAWC from "../components/ClasificationWC-SA"
import LastNews from "../components/LastNews"

const Home = () => {
  return (
    <>
      <Layout>
        <Content>
          <PortNews/>
          <TablePosition />
          <ClasificationSA/>
          <EstadisticasSAWC/>
          <LastNews/>
        </Content>
      </Layout>
      <Footer/>
    </>
  )
}

export default Home

const Content = styled.div`
  width: 100%;
  height: auto;
  /* background-color: #252525; */
`