/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import me from "images/me.jpeg";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Line } from "components/Line";

export const AboutPage = () => {
  const { t } = useTranslation();
  const title = css`
    letter-spacing: 5px;
    width: 100%;
    justify-content: center;
    text-align: center;
    border: solid 3px black;
    h1 {
      font-weight: 100;
      @media (max-width: 500px) {
        font-size: 20px;
      }
    }
  `;

  const containerStyle = css`
    padding: 100px;
    @media (max-width: 900px) {
      padding: 20px;
    }
  `;

  const mainStyle = css`
    animation-name: faderightAnime; /*アニメーションの定義名*/
    animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
    animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
    opacity: 0;
    animation-duration: 0ms.5;
    display: block;
    min-height: 100vh;
    padding-bottom: 60px; /*←footerの高さ*/
    box-sizing: border-box;
    @keyframes faderightAnime {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div css={mainStyle}>
      <Header status={false} />
      <Container css={containerStyle} maxWidth="lg">
        <div css={title}>
          <h1> {t("title.about")}</h1>
        </div>
      </Container>
      <Container css={containerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column-reverse",
            sm: "row",
            md: "row",
            lg: "row",
          }}
        >
          <Grid sx={{ textAlign: "center" }} item xs={true}>
            <Box
              component="div"
              sx={{
                fontSize: { xs: "20px", sm: "30px", md: "30px", lg: "30px" },
                fontWeight: "100",
              }}
            >
              {t("profile.name")}
            </Box>
            <Box
              component="div"
              sx={{
                paddingTop: "5px",
                fontSize: "14px",
                fontWeight: "100",
                paddingBottom: "20px",
              }}
            >
              {t("profile.en_name")}
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "grid",
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: "grid",
                  rowGap: "15px",
                  textAlign: "start",
                  fontWeight: "100",
                  listStyle: "none",
                }}
              >
                <Box component="li">{t("profile.age")}</Box>
                <Box component="li">{t("profile.born")}</Box>
                <Box component="li">{t("profile.bloodtype")}</Box>
                <Box component="li">{t("profile.hometown")}</Box>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={6}>
            <Box
              component="img"
              sx={{
                width: { xs: "120px", sm: "200px", md: "200px", lg: "200px" },
                height: {
                  xs: "120px",
                  sm: "200px",
                  md: "200px",
                  lg: "200px",
                },
                borderRadius: "110px",
                padding: "10px",
              }}
              alt="me"
              src={me}
            ></Box>
          </Grid>
        </Grid>
      </Container>
      <Line />
      <Container css={containerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "center",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={5}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "100px", sm: "120px", md: "150px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "grid",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "grid",
                  alignItems: "center",
                  fontSize: { xs: "20px", sm: "25px", md: "25px", lg: "25px" },
                  fontWeight: "100",
                }}
              >
                {t("profile.profile")}
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={7}>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
              fontSize="12px"
              display="grid"
              sx={{
                wordBreak: "keep-all",
                justifyContent: {
                  xs: "center",
                  sm: "left",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: "grid",
                  rowGap: "15px",
                  textAlign: "start",
                  fontWeight: "100",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("profile.introduceList.text1")}</Box>
                <Box component="li">{t("profile.introduceList.text2")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />
      <Container css={containerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "center",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={5}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "100px", sm: "120px", md: "150px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "grid",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "grid",
                  alignItems: "center",
                  fontSize: { xs: "20px", sm: "25px", md: "25px", lg: "25px" },
                  fontWeight: "100",
                }}
              >
                {t("profile.history")}
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={7}>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
              fontSize="12px"
              display="grid"
              sx={{
                wordBreak: "keep-all",
                justifyContent: {
                  xs: "center",
                  sm: "left",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: "grid",
                  rowGap: "15px",
                  textAlign: "start",
                  fontWeight: "100",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("profile.historyList.history1")}</Box>
                <Box component="li">{t("profile.historyList.history2")}</Box>
                <Box component="li">{t("profile.historyList.history3")}</Box>
                <Box component="li">{t("profile.historyList.history4")}</Box>
                <Box component="li">{t("profile.historyList.history5")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />
      <Footer />
    </div>
  );
};
