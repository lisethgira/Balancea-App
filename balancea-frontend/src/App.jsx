import { createContext, useState } from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Light, Dark } from "./styles/themes";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/routes";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

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
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
              <MyRoutes />
              {/* <ReactQueryDevtools initialIsOpen={true} /> */}
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
