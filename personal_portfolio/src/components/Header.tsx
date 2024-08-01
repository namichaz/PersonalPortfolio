/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "styles/menuButton.css";
import { Hamburger } from "./Hambuger";
import { MenuContainer } from "./MenuContainer";
import { useFunctions } from "../utils";

type Props = {
  status?: boolean;
};

export const Header = (props: Props) => {
  const { t } = useTranslation();
  const toOtherPage = useFunctions();

  const titleStyle = css`
    @media (max-width: 600px) {
      font-size: 20px;
      width: 350px;
      padding: 10px;
    }
  `;

  const aStyle = css`
    text-decoration: none;
    color: black;
    font-weight: 100;
    letter-spacing: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `;

  const menubutton = css`
    display: none;
    width: 50px;
    height: 50px;
    @media (max-width: 600px) {
      font-size: 25px;
      display: block;
    }
  `;

  const containerStyle = css`
    display: ${props.status ? "grid" : "flex"};
    justify-content: ${props.status ? "center" : "space-between"};
    text-align: center;
    @media (max-width: 600px) {
      display: flex;
      justify-content: space-between;
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 9999;
    }
  `;

  const ulStyle = css`
    text-align: center;
    width: 100%;
    display: flex;
    width: 100%;
    column-gap: 100px;
    font-size: 20px;
    list-style: none;
    text-decoration: none;
    justify-content: right;
    padding: 0;
    @media (max-width: 600px) {
      display: none;
    }
  `;
  const navStyle = css`
    ul {
      li {
        a {
          color: #333;
          padding: 10px;
          display: block;
          letter-spacing: 5px;
          font-weight: lighter;
          font-size: 18px;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  `;

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <Container css={containerStyle} maxWidth="lg" fixed>
      <h1 css={titleStyle}>
        <a css={aStyle} onClick={toOtherPage}>
          {t("header.title")}
        </a>
      </h1>
      <nav css={navStyle}>
        <ul css={ulStyle}>
          <li>
            <a onClick={toOtherPage}>{t("header.nav_about")}</a>
          </li>
          <li>
            <a onClick={toOtherPage}>{t("header.nav_skills")}</a>
          </li>
          <li>
            <a onClick={toOtherPage}>{t("header.nav_hobby")}</a>
          </li>
        </ul>
      </nav>
      <div css={menubutton}>
        <Hamburger active={isActive} onClick={toggleActive} />
        <MenuContainer isOpen={isOpen} />
      </div>
    </Container>
  );
};
