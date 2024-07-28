/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import React from "react";
import { useFunctions } from "../utils";

interface MenuContainerProps {
  isOpen: boolean;
}

export const MenuContainer: React.FC<MenuContainerProps> = ({ isOpen }) => {
  const { t } = useTranslation();
  const toOtherPage = useFunctions();

  const menuContainerStyle = (isOpen: boolean) => css`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease;
    z-index: 2;
    opacity: 1;
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

  return (
    <div css={menuContainerStyle(isOpen)}>
      <div css={menuItemStyle}>
        <a css={aStyle} onClick={toOtherPage}>
          {t("header.nav_home")}
        </a>
      </div>
      <div css={menuItemStyle}>
        <a css={aStyle} onClick={toOtherPage}>
          {t("header.nav_about")}
        </a>
      </div>
      <div css={menuItemStyle}>
        <a css={aStyle} onClick={toOtherPage}>
          {t("header.nav_skills")}
        </a>
      </div>
      <div css={menuItemStyle}>
        <a css={aStyle} onClick={toOtherPage}>
          {t("header.nav_hobby")}
        </a>
      </div>
    </div>
  );
};
