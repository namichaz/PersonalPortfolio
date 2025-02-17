/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface HamburgerProps {
  active: boolean;
  onClick: () => void;
}

const hamburgerStyle = (active: boolean) => css`
  width: 25px;
  height: 1px;
  background-color: ${active ? "transparent" : "#333"};
  position: relative;
  transition: all 0.3s ease;
  top: 30px;
  z-index: 9999;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #333;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
    ${active &&
    `
      top: 0;
      transform: rotate(45deg);
    `}
  }

  &::after {
    bottom: -8px;
    ${active &&
    `
      bottom: 0;
      transform: rotate(-45deg);
    `}
  }
`;

const burgerArea = css`
  width: 40px;
  height: 40px;
  z-index: 9999;
  position: relative;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const Hamburger: React.FC<HamburgerProps> = ({ active, onClick }) => (
  <div css={burgerArea} onClick={onClick}>
    <div css={hamburgerStyle(active)} />
  </div>
);
