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
    text-align: center;
    font-size: 13px;
    padding: 20px;
    font-weight: 100;
    position: absolute;
    bottom: 0;
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
