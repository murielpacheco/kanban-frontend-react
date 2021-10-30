import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
  }


  body {
    height: 100vh;
    background-color: #444;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
