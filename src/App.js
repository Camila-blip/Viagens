import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Routes from "./rotas";
import Header from "./components/Header";
import store from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
        </Provider> 
    );
}

