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
    background: rgb(60,130,246);
    background: linear-gradient(135deg, rgba(60,130,246,1) 4%, rgba(84,238,213,0.981127485173757) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
