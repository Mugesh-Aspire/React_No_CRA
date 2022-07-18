import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css';

import { store } from "./ReduxStore";
// @ts-ignore
import App from "./App.tsx";

const persistor = persistStore(store);
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
