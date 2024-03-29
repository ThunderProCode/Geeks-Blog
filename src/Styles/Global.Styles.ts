import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * { 
        font-family: 'Roboto', sans-serif;
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing:inherit;
    }

    ul, li, h1, h2, h3, p, button { margin: 0; padding:0; }
    ul { list-style: none; }
    button { border:0; outline:0 }

    body {
        background: black;
        height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%; 
    }

    #root {
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
