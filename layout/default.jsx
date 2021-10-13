import styled from 'styled-components'
import NextHead from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => {
  const {
    children
  } = props

const LayoutContent = styled.div`
  display: flex;
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
`
const LayoutBody = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
`

  return (
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/" />
        <title>LR Deportes</title>
      </NextHead>
        <Header />
      <LayoutContent>
        <LayoutBody>
          {children}
        </LayoutBody>
      </LayoutContent>
    </>
  )
}

export default Layout