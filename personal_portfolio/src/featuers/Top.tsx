/** @jsxImportSource @emotion/react */
import { Container, Grid, css } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import top_image from "images/top.jpeg";
import { Line } from "components/Line";
import { About } from "featuers/About";
import { Skills } from "./Skills";
import { Hobby } from "./Hobby";

export const Top = () => {
  const image_style = css`
    width: 100%;
    height: 700px;
    animation-name: fadeTopAnime; /*アニメーションの定義名*/
    animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
    animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
    opacity: 0;
    animation-duration: 0ms.5;
    filter: grayscale(100%);
    @media (max-width: 900px) {
      height: 250px;
    }

    @keyframes fadeTopAnime {
      from {
        opacity: 0;
        transform: translateY(50px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  const mainStyle = css`
    height: 100%;
    width: 100%;
  `;

  return (
    <div>
      <Header />
      <main css={mainStyle}>
        <Container maxWidth="lg" fixed>
          <img css={image_style} src={top_image} alt="top_image" />
        </Container>
        <About />
        <Skills />
        <Hobby />
      </main>
      <Footer />
    </div>
  );
};
