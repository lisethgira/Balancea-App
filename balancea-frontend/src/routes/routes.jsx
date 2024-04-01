import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from '../styles/globalStyle';


import styled from "styled-components";
//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const Header = lazy(() => import("../components/atomos/header"));
const Footer = lazy(() => import("../components/atomos/footer"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const AuthRouteWrapper = lazy(() => import("./authRouteWrapper"));

const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const LandingPage = () => (
  <Content>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
  </Content>
);

export function MyRoutes() {
  return (
    <>
       <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<AuthRouteWrapper />} />
      </Routes>
    </Suspense>
    </>
  );
}
