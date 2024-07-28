/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import React from "react";

interface MenuContainerProps {
  isOpen: boolean;
}

const menuContainerStyle = (isOpen: boolean) => css`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease;
  z-index: 2;
  opacity: 0.9;
`;

const menuItemStyle = css`
  margin: 20px 0;
  padding: 15px 30px;
  color: black;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
`;
const aStyle = css`
  text-decoration: none;
  color: white;
  font-weight: 100;
  letter-spacing: 5px;
  &:hover {
    opacity: 0.5;
  }
`;

export const MenuContainer: React.FC<MenuContainerProps> = ({ isOpen }) => (
  <div css={menuContainerStyle(isOpen)}>
    <div css={menuItemStyle}>
      <a css={aStyle} href="">
        home
      </a>
    </div>
    <div css={menuItemStyle}>
      <a css={aStyle} href="">
        about
      </a>
    </div>
    <div css={menuItemStyle}>
      <a css={aStyle} href="">
        skills
      </a>
    </div>
    <div css={menuItemStyle}>
      <a css={aStyle} href="">
        hobby
      </a>
    </div>
  </div>
);
