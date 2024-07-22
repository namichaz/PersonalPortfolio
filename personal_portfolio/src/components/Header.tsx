/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "styles/menuButton.css";
import { Hamburger } from "./Hambuger";
import { MenuContainer } from "./Menu";

export const Header = () => {
  const { t } = useTranslation();

  const titleStyle = css`
    @media (max-width: 900px) {
      font-size: 22px;
      width: 350px;
    }
  `;

  const aStyle = css`
    text-decoration: none;
    color: black;
    font-weight: 100;
    letter-spacing: 7px;

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

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-around" }}
      maxWidth="lg"
      fixed
    >
      <h2 css={titleStyle}>
        <a css={aStyle} href="/">
          {t("header.title")}
        </a>
      </h2>
      <div css={menubutton}>
        <Hamburger active={isActive} onClick={toggleActive} />
        <MenuContainer isOpen={isOpen} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">{t("header.nav_about")}</a>
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
