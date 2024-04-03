// import { createContext } from "react";
// import { ThemeProvider } from "styled-components";
// import { BrowserRouter } from "react-router-dom";
// import { MyRoutes } from "./routes/routes";
// import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/atomos/header';
import Footer from './components/atomos/footer';

const App = () => {

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/service-worker.js").then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }

  return (
    <div>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

