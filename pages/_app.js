import "./../styles/globals.scss";
import Layout from "../components/Layout";

import { Provider } from "react-redux";
import store from "./redux/store";
import React, { useContext } from "react";

import { HydrationProvider, Server, Client } from "react-hydration-provider";

function MyApp({ Component, pageProps }) {
  return (
    <HydrationProvider>
      <Client>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Client>
    </HydrationProvider>
  );
}

export default MyApp;
