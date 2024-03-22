import styled from "styled-components";
import BtnSave from "../moleculas/BtnSave";
import Logo from "../../assets/logo2SinBg.png";
import v from "../../styles/variables";

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
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    .version {
      color: #727272;
      text-align: start;
    }
    .frase {
      color: #909090;
      font-size: 1.2rem;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
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

//component
export default function LoginTemplate() {
  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <span className="version">Versión 1.0</span>
        <div>
          <ImageContainer>
            <img src={Logo} alt="Descripción" />
          </ImageContainer>
          <p className="frase">Toma el control de tus 💵gastos e 💰ingresos.</p>
          <ContainerBtn>
            <BtnSave
              titulo="Iniciar con Google"
              funcion={() => console.log(v)}
              icono={<v.iconogoogle />}
              bgcolor={v.colorSecundario}
            />
          </ContainerBtn>
        </div>
      </div>
    </Container>
  );
}
