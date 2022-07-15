import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css';

import {store} from "./ReduxStore";

// @ts-ignore
import App from "./App.tsx";


const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
