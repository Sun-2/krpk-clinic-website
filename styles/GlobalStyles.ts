import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

  html {
    min-height: 100%;
    font-size: 62.5%;
  }
  
  /* #root for storybook */
  html, body, #__next, #root {
    
    display: flex !important;
    flex-grow: 1 !important;
    flex-direction: column !important;
    
    margin: 0 !important;
    padding: 0 !important;
  }
  
  body {
    position:relative;
    --scrollbar-width: calc(100vw - 100%);
    
    background-color: white;
    background-repeat: repeat;
    background-size: auto;
    
    font-size: calc(16 / 10 * 100%);   
    
    &::after {
    background-image: url("paper.jpg");
    background-repeat: repeat;
    content: "";
    position: absolute;
    z-index: -100;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.25;
  }
  
  }
  
  
`;