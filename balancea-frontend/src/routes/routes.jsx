import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const HomeUser = lazy(() => import("../pages/HomeUser"));

export function MyRoutes() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homeuser" element={<HomeUser />} />
        </Routes>
      </Suspense>
    </>
  );
}
