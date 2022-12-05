<<<<<<< HEAD
import "./../styles/globals.scss";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
=======
import "../styles/globals.scss";
import { StoreProvider } from "../utilities/Store";
import React, { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
>>>>>>> about
  );
}

export default MyApp;
