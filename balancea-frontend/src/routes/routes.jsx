import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from '../styles/globalStyle';

//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const Header = lazy(() => import("../components/atomos/header"));
const Footer = lazy(() => import("../components/atomos/footer"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const HomeUser = lazy(() => import("../pages/HomeUser"));


const LandingPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
  </>
);

export function MyRoutes() {
  return (
    <>
       <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeuser" element={<HomeUser />} />
      </Routes>
    </Suspense>
    </>
  );
}
