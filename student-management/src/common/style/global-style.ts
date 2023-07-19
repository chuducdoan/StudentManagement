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

  .language {
    width: 30px;
  }

  .ant-dropdown-menu-item {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover {
    background-color: inherit;
  }

  .ant-select-dropdown .ant-select-item {
    padding-left: 16px;
    font-family: 'Popin-Regular';
    font-size: 16px;
  }
  
  .ant-select-dropdown .ant-select-item-option-selected {
    background-color: rgba(77, 68, 181, 0.1) !important;
    color: #4D44B5 !important;
  }

  .ant-picker-dropdown
    .ant-picker-cell-in-view.ant-picker-cell-selected
    .ant-picker-cell-inner {
    background: #4d44b5;
    border-color: #4D44B5;
    outline: none;
  }

  .ant-picker-dropdown
    .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner {
      &::before {
        border-color: #4D44B5;

      }
    }

    .ant-picker-dropdown .ant-picker-today-btn {
      color: #4D44B5;
    }
`;

export default GlobalStyle;
