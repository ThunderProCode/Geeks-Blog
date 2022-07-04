import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App/app";

const rootElement = document.getElementById('root');
const root = createRoot( rootElement as Element );

root.render(
    <App/>
);