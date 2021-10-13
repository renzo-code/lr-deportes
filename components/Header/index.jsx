import styled from 'styled-components'

const Header = () => {
  return(
    <ContainerHeader>
      <WrapperImage>
        <Image src="/static/images/LOGO FINAL.png"/>
      </WrapperImage>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
  height: 104px;
  max-width: 1300px;
  width: 100%;
  background-color: #00C521;
  margin: 0 auto;
`
const WrapperImage = styled.div`
  height: auto;
  width: 400px;
  margin: 0 auto;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  padding-left: 50px;
  object-fit: cover;
`