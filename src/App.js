import React from "react";
import Routes from "./rotas";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes />
		</BrowserRouter>
	);
}

