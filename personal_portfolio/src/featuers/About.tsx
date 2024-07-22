/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import about_image from "images/about.jpeg";

export const About = () => {
  const { t } = useTranslation();

  const subtitleArea = css`
    position: relative;
  `;

  const subtitleStyle = css`
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 5px;
    @media (max-width: 900px) {
      font-size: 16px;
    }
  `;

  const lineStyle = css`
    position: absolute;
    width: 10rem;
    @media (max-width: 900px) {
      width: 5rem;
    }
  `;

  const buttonArea = css`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: black;
    display: flex;
    position: relative;
    @media (max-width: 900px) {
      width: 100px;
      height: 30px;
    }

    &:hover {
      opacity: 0.7;
      cursor: pointer; /* カーソルが上に来たらポインターに変身 */
    }
  `;

  const buttonStyle = css`
    font-weight: 100;
    color: #fff;
    text-decoration: none;
    padding: 0 5px;
    position: absolute;
    top: 5px;
    @media (max-width: 900px) {
      font-size: 16px;
    }
  `;

  const image_style = css`
    width: 100%;
    animation-name: faderightAnime; /*アニメーションの定義名*/
    animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
    animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
    opacity: 0;
    animation-duration: 0ms.5;
    filter: grayscale(100%);

    &:hover {
      background-color: lightgray;
      opacity: 0.7;
    }

    @keyframes faderightAnime {
      from {
        opacity: 0;
        transform: translateX(50px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  const gridStyle = css`
    display: grid;
    justify-content: center;
  `;

  const containerStyle = css`
    padding: 100px;
    @media (max-width: 900px) {
      padding: 30px;
    }
  `;

  return (
    <Container css={containerStyle} maxWidth="lg" fixed>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid css={gridStyle} item xs={6}>
            <p css={subtitleArea}>
              <div css={subtitleStyle}>{t("subtitle.about")}</div>
              <hr css={lineStyle} />
            </p>
            <p>
              <button css={buttonArea}>
                <a css={buttonStyle} href="">
                  {t("button.about")}
                </a>
                <i />
              </button>
            </p>
          </Grid>
          <Grid item xs={6}>
            <img css={image_style} src={about_image} alt="about_image" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
