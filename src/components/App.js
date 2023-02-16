import React from "react";
import { Provider } from "react-redux";
import Form from "./Form";
import List from "./List";

import store from "./store/store";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<h1>Hello World</h1>
				<h3>Add some of your favorite authors to the top writers list.</h3>
				<Form />
				<List className='list' />
			</div>
		</Provider>
	);
}

export default App;
