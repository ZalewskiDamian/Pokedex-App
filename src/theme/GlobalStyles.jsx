import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.6rem; 
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 1.4;
        background-color: white;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
    }

    img {
        display: block;
    }
`;

export default GlobalStyle;
