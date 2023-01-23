import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalStateContext } from "./contexts/GlobalStateContext";
import { useState } from "react";

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <GlobalStateContext.Provider
        value={{
          cart,
          setCart,
        }}
      >
        <GlobalStyle />
        <Router />
      </GlobalStateContext.Provider>
    </>
  );
};
