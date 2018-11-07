import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from "./store";
import  { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
