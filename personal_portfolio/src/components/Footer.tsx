/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const name = t("header.title");

  const footerArea = css`
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 10px;
  `;

  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "center" }}
        maxWidth={false}
        fixed
      >
        <div css={footerArea}>{`© ${year} ${name}. All Rights Reserved.`}</div>
      </Container>
    </>
  );
};
