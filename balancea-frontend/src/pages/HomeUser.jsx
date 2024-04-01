import styled from "styled-components";
// import { useAuthStore, UserAuth} from "../store/AuthStore";
const Container = styled.div`
  height: 100vh;
`;

export default function HomeUser() {
  // const{signout} = useAuthStore();
  // const { user } = UserAuth();
  
  return (
    <Container>
    {/* <h1>Bienvenido Home {user.full_name}</h1>
      <img src={user.picture}/>
      <button onClick={signout}>Cerrar</button> */}
      <h1> este el home del home de la app</h1>
    </Container>
  );
}

