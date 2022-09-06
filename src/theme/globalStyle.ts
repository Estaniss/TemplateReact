import { createGlobalStyle } from "styled-components";

//Colors

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
