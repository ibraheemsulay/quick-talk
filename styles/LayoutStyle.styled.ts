import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const LayoutStyle = styled.main<IStyle>`
  height: 100vh;
  overflow: hidden;
  position: relative;

  .bg__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }

  .children {
    position: absolute;
    bottom: 0;
    width: 100%;
    top: 10%;
    background: transparent;
  }
`;
