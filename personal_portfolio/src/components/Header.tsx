/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "styles/menuButton.css";
import { Hamburger } from "./Hambuger";
import { MenuContainer } from "./MenuContainer";

type Props = {
  status?: boolean;
};

export const Header = (props: Props) => {
  const { t } = useTranslation();
  const titleStyle = css`
    @media (max-width: 900px) {
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

    &:hover {
      opacity: 0.7;
    }
  `;

  const menubutton = css`
    display: none;
    width: 50px;
    height: 50px;
    @media (max-width: 900px) {
      font-size: 25px;
      display: block;
    }
  `;

  const containerStyle = css`
    display: ${props.status ? "grid" : "flex"};
    justify-content: ${props.status ? "center" : "space-between"};
    text-align: center;
    @media (max-width: 900px) {
      display: flex;
      justify-content: space-between;
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 9999;
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
        <a css={aStyle} href="/PersonalPortfolio.git">
          {t("header.title")}
        </a>
      </h1>
      <div css={menubutton}>
        <Hamburger active={isActive} onClick={toggleActive} />
        <MenuContainer isOpen={isOpen} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="PersonalPortfolio.git/profile">{t("header.nav_about")}</a>
          </li>
          <li>
            <a href="">{t("header.nav_skills")}</a>
          </li>
          <li>
            <a href="">{t("header.nav_hobby")}</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
