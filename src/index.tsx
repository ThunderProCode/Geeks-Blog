import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import { store } from "./App/Store";
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot( rootElement as Element );


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);