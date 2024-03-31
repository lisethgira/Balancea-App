import Articles from "../atomos/articles";
import Hero from "../atomos/hero";
import Info from "../atomos/information";

import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-x: hidden;
  min-height: 100vh; // Asegura una altura mínima del 100% de la altura de la ventana
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  flex: 1; // Hace que este div crezca para ocupar el espacio disponible
`;

export default function HomeTemplate() {
  return (
    <div>
      <HomeContainer>
        <Content>
          <Hero />
          <Info />
          <Articles />
        </Content>
      </HomeContainer>
    </div>
  );
}
