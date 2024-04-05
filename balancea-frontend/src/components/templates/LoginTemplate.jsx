import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Btnsave,
  v,
  useAuthStore,
  FormLogin,
  FormRecoveryPsw,
  FormRegister,
  TabLogin,
  TabItem
} from "../../index";
import Logo from "../../assets/logo2SinBg.png";

//Styles
const Container = styled.div`
  background-image: url(${(props) => props.imgfondo});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 50px;
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    .version {
      color: #727272;
      text-align: start;
    }
    .Link {
      text-align: start;
    }
    .frase {
      color: #909090;
      font-size: 1.2rem;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      height: auto;
      background-color: #131313;
    }
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerBtn = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: flotar 1.5s ease-in-out infinite alternate;

  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const ContainerForm = styled.div`
  margin-top: 20px;
`;

//componentexport default function LoginTemplate() {
  export const LoginTemplate = () => {
  const { signInWithGoogle } = useAuthStore();
  // Estado para manejar el formulario activo
  const [activeForm, setActiveForm] = useState();

  const onTabSelected = (tabName) => {
    setActiveForm(tabName);
  };

  // Función para renderizar el formulario activo
  const renderActiveForm = () => {
    switch (activeForm) {
      case 0:
        return <FormRegister />;
      case 1:
        return <FormLogin />;
      case 2:
        return <FormRecoveryPsw />;
      default:
        return null;
    }
  };

  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <Column>
          <span className="version">Versión 1.0</span>
          <ImageContainer>
            <img src={Logo} alt="Descripción" />
          </ImageContainer>
          <p className="frase">Toma el control de tus 💵gastos e 💰ingresos.</p>
          <Link to="http://localhost:5174/" className="backLink">
            Regresar al Inicio
          </Link>
        </Column>
        <Column>
          <TabLogin onTabSelected={onTabSelected}>
            <TabItem>Sing up</TabItem>
            <TabItem>Login</TabItem>
            <TabItem>Recover</TabItem>
          </TabLogin>
          <ContainerForm>{renderActiveForm()}</ContainerForm>
          <ContainerBtn>
            <Btnsave
              titulo="Iniciar con Google"
              icono={<v.iconogoogle />}
              bgcolor={v.colorSecundario}
              funcion={signInWithGoogle}
            />
          </ContainerBtn>
        </Column>
      </div>
    </Container>
  );
}
