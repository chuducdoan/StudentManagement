import { createGlobalStyle } from "styled-components";
import {
  PopinBold,
  PopinLight,
  PopinMedium,
  PopinRegular,
  PopinSemibold,
} from "assets/font/fonts";

const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: 'Popin-Light';
      src: local('Popin-Light'), url(${PopinLight}) format('opentype');
  }

  @font-face {
      font-family: 'Popin-Regular';
      src: local('Popin-Regular'), url(${PopinRegular}) format('opentype');
  }

  @font-face {
      font-family: 'Popin-Medium';
      src: local('Popin-Medium'), url(${PopinMedium}) format('opentype');
  }

  @font-face {
      font-family: 'Popin-Semibold';
      src: local('Popin-Semibold'), url(${PopinSemibold}) format('opentype');
  }

  @font-face {
    font-family: 'Popin-Bold';
    src: local('Popin-Bold'), url(${PopinBold}) format('opentype');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 0.875rem;
    font-family: 'Popin-Regular', sans-serif !important;
  }
  
  #root {
    height: 100%;
  }

  a{
    &:hover{
      text-decoration: none;
    }
  }

  p,
  label {
    line-height: 1.5em;
    margin: 0;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 10px;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    max-width: 230px;
    background-color: #584577;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(180, 185, 171, 0.3);
    background-color: #c6bad9;
  }
`;

export default GlobalStyle;
