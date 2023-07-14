import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .ant-menu,
  .ant-menu-sub.ant-menu-inline {
    background: inherit !important;
  }

  .ant-menu-root > .ant-menu-item.ant-menu-item-selected,
  .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected
    .ant-menu-submenu-title {
    background: rgba(255, 255, 255, 0.15);
  }

  .ant-menu-submenu .ant-menu-item.ant-menu-item-selected {
    font-weight: bold;
    background: inherit;
  }

  .ant-menu-item {
    font-family: "Popin-Regular";
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Logo = styled.div`
  margin-bottom: 24px;
`;
