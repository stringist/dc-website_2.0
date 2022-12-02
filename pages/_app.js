import "../styles/globals.scss";
import { StoreProvider } from "../utilities/Store";
import React, { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
