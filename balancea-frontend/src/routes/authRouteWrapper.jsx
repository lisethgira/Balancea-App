import { lazy, useState } from "react";
// import { AuthContextProvider } from '../context/AuthContext';
import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from '../hooks/ProtectectedRoute';
// import { UserAuth } from "../context/AuthContext";

//--Styles
import styled from "styled-components";
import Device from "../styles/breakpoints"


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background: ${({theme}) => theme.bgtotal};
    transition: 0.3s ease-in-out;
    .contentSidebar{
      display: none;
    }
    .contentMenuHamburguer{
      display: block;
      position: absolute;
      left: 20px;
    }
  @media ${Device.tablet}{
    grid-template-columns: 65px 1fr;
    &.active{
      grid-template-columns: 220px 1fr;
}
    .contentSidebar{
      display: initial;
    }
    .contentMenuHamburguer{
      display: none;
    }
  }
`;
const Containerbody = styled.div`
grid-column: 1;
width: 100%;
@media ${Device.tablet}{
    grid-column: 2;
}
`;
//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const HomeUser = lazy(() => import("../pages/HomeUser"));
const Sidebar = lazy(() => import("../components/organismos/sidebar/sidebar"));
const MenuHamburguer = lazy(() => import("../components/organismos/menuHamburguer"));

const AuthRouteWrapper = () => {
  //  const {user} = UserAuth();
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // <AuthContextProvider>
      <Container className={sidebarOpen ? "active" : " " }>
        <div className="contentSidebar">
        <Sidebar state={sidebarOpen} setState={setSidebarOpen}  />
        </div>
        <div className="contentMenuHamburguer">
        <MenuHamburguer />
        </div>
        <Containerbody>
        <Routes>
          {/* <Route element={<ProtectedRoute user={user} redirectTo="/login" />}> */}
          <Route path="/homeuser" element={<HomeUser />} />
          {/* Puedes añadir más rutas protegidas aquí si es necesario */}
          {/* </Route> */}
          </Routes>
        </Containerbody>
      </Container>
    
    // </AuthContextProvider>
  );
};

export default AuthRouteWrapper;
