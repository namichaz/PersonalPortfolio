/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import skills_image from "images/skills.jpeg";

export const Skills = () => {
  const { t } = useTranslation();

  const subtitleArea = css`
    position: relative;
  `;

  const subtitleStyle = css`
    /* font-size: 20px; */
    font-weight: 100;
    letter-spacing: 5px;
    margin: 0;
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
    height: 45px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    display: flex;
    position: relative;
    &:before {
      content: "";
      width: 20px;
      height: 1px;
      background: white;
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 35px;
      transform: translateY(-50%);
    }
    &:after {
      content: "";
      width: 5px;
      height: 5px;
      border-left: solid 1px white;
      position: absolute;
      top: 50%;
      right: 36px;
      transform: translateY(-50%) rotate(135deg);
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      &:before {
        right: 25px;
        transition: right 0.5s;
      }
      &:after {
        right: 26px;
        transition: right 0.5s;
      }
    }
    @media (max-width: 900px) {
      width: 100px;
      height: 30px;
      &:before {
        right: 20px;
      }
      &:after {
        right: 21px;
      }
    }
  `;

  const buttonStyle = css`
    font-weight: 100;
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 20px;
    width: 200px;
    @media (max-width: 900px) {
      font-size: 16px;
      padding: 5px;
    }
  `;

  const image_style = css`
    width: 100%;
    animation-name: fadeLeftAnime; /*アニメーションの定義名*/
    animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
    animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
    opacity: 0;
    animation-duration: 0ms.5;
    filter: grayscale(100%);

    @keyframes fadeLeftAnime {
      from {
        opacity: 0;
        transform: translateX(-50px);
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

  const description = css`
    display: block;
    position: relative;
    text-decoration: none;
    ::before {
      content: "";
      display: block;
      width: 95.5%;
      height: 98.8%;
      position: absolute;
      z-index: 2;
      background: #000; /*好みの色に変えてください。*/
      opacity: 0;
      transition: 0.5s;
      @media (max-width: 900px) {
        height: 95%;
      }
    }
    ::after {
      content: "技術について"; /*好みの文章に変更してください。*/
      display: block;
      color: lightgray;
      line-height: 48px;
      width: 180px;
      opacity: 0.5;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -1em;
      margin-left: -90px;
      opacity: 0;
      z-index: 3;
      transition: 0.3s;
      font-weight: bold;
      letter-spacing: 0.2em;
      @media (max-width: 900px) {
        font-size: 10px;
        top: 45%;
      }
    }
    &:hover::before {
      opacity: 0.5;
    }
    &:hover::after {
      opacity: 1;
      margin-top: -0.5em;
    }
  `;

  return (
    <Container css={containerStyle} maxWidth="lg" fixed>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid css={description} item xs={6}>
            <img css={image_style} src={skills_image} alt="skills_image" />
          </Grid>

          <Grid css={gridStyle} item xs={6}>
            <div css={subtitleArea}>
              <h2 css={subtitleStyle}>{t("subtitle.skills")}</h2>
              <hr css={lineStyle} />
            </div>
            <p>
              <div css={buttonArea}>
                <a css={buttonStyle} href="">
                  {t("button.skills")}
                </a>
                <i />
              </div>
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
