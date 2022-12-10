import React from "react";
import { Routes, Route} from "react-router-dom";
import Reservas from "./pages/Reservas";
import Home from "./pages/Home";

export default function Rotas(){
	return(
		<Routes>
			<Route exact path="/"  element={<Home />} />
			<Route exact path="/reservas/:reservas"  element={<Reservas />} />
		</Routes>
	);
}