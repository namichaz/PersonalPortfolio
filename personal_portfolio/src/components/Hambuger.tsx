/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface HamburgerProps {
  active: boolean;
  onClick: () => void;
}

const hamburgerStyle = (active: boolean) => css`
  width: 30px;
  height: 3px;
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
    height: 3px;
    background-color: #333;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: -10px;
    ${active &&
    `
      top: 0;
      transform: rotate(45deg);
    `}
  }

  &::after {
    bottom: -10px;
    ${active &&
    `
      bottom: 0;
      transform: rotate(-45deg);
    `}
  }
`;

export const Hamburger: React.FC<HamburgerProps> = ({ active, onClick }) => (
  <div css={hamburgerStyle(active)} onClick={onClick} />
);
