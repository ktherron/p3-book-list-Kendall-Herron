import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Provider } from "react-redux";

import App from "./components/app";
import rootReducer from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// const store = createStore(rootReducers, {}, applyMiddleware());
const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware())
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
