import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import { createStore } from "redux";

let initialState = {
  count: 100,
  greeting: "hello",
  posts: [],
};

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function appReducer(state = initialState, action) {
  // if (action.type === "INCREASE_COUNT") {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === "DECREASE_COUNT") {
  //   return { ...state, count: state.count - 1 };
  // }
  // return state;
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, count: state.count + 1 };
    case "DECREASE_COUNT":
      return { ...state, count: state.count - 1 };
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
