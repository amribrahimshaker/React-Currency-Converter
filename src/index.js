import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import Usd from "./components/usd";
// import Yen from "./components/yen";
// import MainApp from "./components/mainApp";
// import MainAppContext from "./context/mainAppContext";
import MainAppRedux from "./redux/mainAppRedux";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(<MainApp />, document.getElementById("root"));
// ReactDOM.render(<MainAppContext />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <MainAppRedux />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
