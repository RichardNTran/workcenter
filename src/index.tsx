import React from "react";
import "./index.css";
import AppComponent from "./App";
import DevTools from './config/devtools';
// import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

const store = configureStore();

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const rootEl = document.getElementById("root");

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        {/* If this slows down the app in dev disable it and enable when required  */}
        {devTools}
        <Component/>
      </div>
    </Provider>,
    rootEl
  );

render(AppComponent);

// serviceWorker.unregister();
