import { useState } from "react";
import styled from "styled-components";
import { Carousel, Btnsave, v, UserAuth, Header } from "../../index";

export function HomeTemplate() {
  const { user } = UserAuth();
  const [state, setState] = useState(false);
  return (
    <Main>
      <Container>
        <header className="header">
          <Header
            stateConfig={{ state: state, setState: () => setState(!state) }}
          />
        </header>
        <Box>
          <Carousel />
        </Box>
        <Title>Hola, {user.name}</Title>
        <SubTitle>
          ¡Bienvenid@! a Balancea <br /> ⚖️💰
        </SubTitle>
        <SubText>
          Balancea nace por las pocas aplicaciones gratis que existen para
          controlar gastos e ingresos.
          <br />
          ❤️Prontamente pondremos anuncios así podremos mantenernos en el
          tiempo,
          <br /> MUCHAS GRACIAS POR APOYAR ESTE PROYECTO
        </SubText>
        <ContainerAutor>
          <div className="contentImg">
            <img src="https://raw.githubusercontent.com/lisethgira/Balancea-App/main/balancea-frontend/src/assets/profile.png" />
          </div>
          <div className="contentDescripcion">
            <b>Liseth Arelis Giraldo Morales</b>
            <span>Tecnología en Análisis y Desarrollo de Software</span>
          </div>
        </ContainerAutor>
        <ButtonContainer>
          <Btnsave
            url="https://api.whatsapp.com/send?phone=+573196178645&text=Tengo+Dudas+sobre+mi+aplicaci%C3%B3n"
            titulo="Escribe a Whatsapp"
            bgcolor="#1B9E67"
            icono={<v.iconowpp />}
          />
          <Btnsave
            url="https://github.com/lisethgira?tab=repositories"
            titulo="Repositorio Github"
            bgcolor="#fb37b7"
            icono={<v.iconogit />}
          />
        </ButtonContainer>
      </Container>
    </Main>
  );
}
const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .header {
    /* background-color: rgba(103, 93, 241, 0.14); */
    position: absolute; /* Posicionamiento absoluto */
    top: 0; /* Alinea al principio verticalmente */
    right: 0;
    @media (max-width: 768px) { 
    display: none;
  }
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center; 
  color: ${({ theme }) => theme.text};
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #8e8c86;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const ContainerAutor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .contentImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .contentDescripcion {
    display: flex;
    flex-direction: column;
    b {
      color: ${(props) => props.theme.text};
    }
    span {
      color: #8c8c8c;
    }
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 20px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;
