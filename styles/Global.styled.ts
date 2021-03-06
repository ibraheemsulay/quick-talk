import { createGlobalStyle } from "styled-components";
import { GlobalProps } from "../ts-types/styleTypes";

const GlobalStyle = createGlobalStyle<GlobalProps>`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}

body {
    color: #555;
}

h1 {
    color: rgba(7, 6, 6, 0.801);
}
`;

export default GlobalStyle;
