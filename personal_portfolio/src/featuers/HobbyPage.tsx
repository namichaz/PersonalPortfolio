/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import me from "images/me.jpeg";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Line } from "components/Line";

export const HobbyPage = () => {
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
          <h1> {t("title.skills")}</h1>
        </div>
      </Container>
      <Container css={containerStyle} maxWidth="lg">
        <Grid container sx={{ textAlign: "center" }} item xs={true}>
          <Box
            component="div"
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              component="ul"
              sx={{
                display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
                rowGap: "20px",
                columnGap: "4rem",
                textAlign: "start",
                fontWeight: "100",
                listStyle: "none",
                fontSize: { xs: "13px", sm: "15px", md: "15px", lg: "15px" },
              }}
            >
              <Box component="li">{t("skills.levels.a")}</Box>
              <Box component="li">{t("skills.levels.b")}</Box>
              <Box component="li">{t("skills.levels.c")}</Box>
              <Box component="li">{t("skills.levels.d")}</Box>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Box
          component="div"
          sx={{
            display: "flex",
            columnGap: { xs: "110px", sm: "240px", md: "370px", lg: "380px" },
            justifyContent: "end",
            fontSize: "14px",
            fontWeight: "100",
          }}
        >
          <Box component="p" sx={{}}>
            {t("skills.level")}
          </Box>
          <Box component="p" sx={{}}>
            {t("skills.period")}
          </Box>
        </Box>
      </Container>
      <Line />

      {/* TODO frontend */}
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
                justifyContent: "start",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
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
                  fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                }}
              >
                {t("skills.skillsType.frontend")}
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "15px" },
              fontWeight: "100",
            }}
            item
            xs={9}
          >
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.skillsName.javascript")}</Box>
                <Box component="li">{t("skills.skillsName.html")}</Box>
                <Box component="li">{t("skills.skillsName.css")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.levelsType.b")}</Box>
                <Box component="li">{t("skills.levelsType.b")}</Box>
                <Box component="li">{t("skills.levelsType.b")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />

      {/* TODO backend */}
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
                justifyContent: "start",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
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
                  fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                }}
              >
                {t("skills.skillsType.backend")}
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "15px" },
              fontWeight: "100",
              columnGap: "20px",
            }}
            item
            xs={9}
          >
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0 48px 0 0",
                }}
              >
                <Box component="li">{t("skills.skillsName.java")}</Box>
                <Box component="li">{t("skills.skillsName.c#")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.levelsType.c")}</Box>
                <Box component="li">{t("skills.levelsType.c")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />

      {/* TODO framework */}
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
                justifyContent: "start",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
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
                  fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                }}
              >
                {t("skills.skillsType.framework")}
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "15px" },
              fontWeight: "100",
            }}
            item
            xs={9}
          >
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.skillsName.react")}</Box>
                <Box component="li">{t("skills.skillsName.vue")}</Box>
                <Box component="li">{t("skills.skillsName.springboot")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.levelsType.c")}</Box>
                <Box component="li">{t("skills.levelsType.c")}</Box>
                <Box component="li">{t("skills.levelsType.c")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />

      {/* TODO database */}
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
                justifyContent: "start",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
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
                  fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                }}
              >
                {t("skills.skillsType.database")}
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "15px" },
              fontWeight: "100",
            }}
            item
            xs={9}
          >
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.skillsName.postgres")}</Box>
                <Box component="li">{t("skills.skillsName.oracle")}</Box>
                <Box component="li">{t("skills.skillsName.mysql")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.levelsType.b")}</Box>
                <Box component="li">{t("skills.levelsType.b")}</Box>
                <Box component="li">{t("skills.levelsType.c")}</Box>
              </Box>
            </Box>
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
                <Box component="li">3 {t("skills.periodType.years")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />

      {/* TODO certificate */}
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
                justifyContent: "start",
                display: "grid",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                border: "solid 2px",
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
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
                  fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                }}
              >
                {t("skills.skillsType.certification")}
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "15px" },
              fontWeight: "100",
            }}
            item
            xs={9}
          >
            <Box
              textAlign="left"
              component="div"
              lineHeight="30px"
              letterSpacing="3px"
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
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("skills.skillsName.javasilver")}</Box>
                <Box component="li">{t("skills.skillsName.lpic1")}</Box>
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
