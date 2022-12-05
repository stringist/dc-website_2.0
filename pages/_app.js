import "./../styles/globals.scss";
import Layout from "../components/layout";
import { StoreProvider } from "../utilities/Store";
import React, { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
