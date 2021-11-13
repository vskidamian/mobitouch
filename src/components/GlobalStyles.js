import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Ubuntu', sans-serif;
        color: #232233;
        background: #fff;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #43BE8D;
    }
    h3 {
        font-size: 1.3rem;
        padding: 1.5rem 0rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
    }
    a {
        text-decoration: none;
        color: #232233;
    }
    
    hr {
        width: 84px;
        height: 4px;
        background-color: #43BE8D;
        border: none;
        margin: 12px auto 27px auto;
    }
`;

export default GlobalStyles;