import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import { store } from "./App/Store";
import { Provider } from "react-redux";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)));
