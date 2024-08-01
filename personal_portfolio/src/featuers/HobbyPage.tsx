/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import me from "images/me.jpeg";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Line } from "components/Line";
import travel1 from "../images/fujisan.jpeg";
import travel2 from "../images/ny1.jpeg";
import travel3 from "../images/ny2.jpeg";
import coffee1 from "../images/coffee1.jpeg";
import coffee2 from "../images/coffee2.jpeg";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import food3 from "../images/food3.jpeg";
import art1 from "../images/art1.jpeg";
import art2 from "../images/art2.jpeg";

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

  const subContainerStyle = css`
    padding: 40px 100px;
    font-size: 15px;
    @media (max-width: 900px) {
      padding: 20px;
    }
  `;

  const imageStyle = css`
    width: 200px;
    height: 200px;
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
      <Container css={subContainerStyle} maxWidth="lg">
        <div css={title}>
          <h1> {t("title.hobby")}</h1>
        </div>
      </Container>

      {/* TODO travel */}
      <Container css={subContainerStyle} maxWidth="lg">
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
                  fontSize: { xs: "14px", sm: "15px", md: "15px", lg: "20px" },
                  fontWeight: "100",
                  padding: "0",
                }}
              >
                {t("hobby.travel")}
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
                  textAlign: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                  },
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("hobby.description.travelText1")}</Box>
                <Box component="li">{t("hobby.description.travelText2")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container css={subContainerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
          justifyContent="center"
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "start",
                display: "none",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "none",
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
              ></Box>
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
                  display: { xs: "grid", sm: "flex", md: "flex", lg: "flex" },
                  columnGap: "20px",
                  rowGap: "20px",
                  textAlign: "center",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="img" src={travel1} css={imageStyle} />
                <Box component="img" src={travel2} css={imageStyle} />
                <Box component="img" src={travel3} css={imageStyle} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Line />
      {/* TODO coffee */}
      <Container css={subContainerStyle} maxWidth="lg">
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
                  padding: "0",
                }}
              >
                {t("hobby.coffee")}
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
                  textAlign: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                  },
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("hobby.description.coffeeText1")}</Box>
                <Box component="li">{t("hobby.description.coffeeText2")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container css={subContainerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
          justifyContent="center"
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "start",
                display: "none",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "none",
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
              ></Box>
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
                  display: { xs: "grid", sm: "flex", md: "flex", lg: "flex" },
                  columnGap: "20px",
                  rowGap: "20px",
                  textAlign: "center",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="img" src={coffee1} css={imageStyle} />
                <Box component="img" src={coffee2} css={imageStyle} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />

      {/* TODO food */}
      <Container css={subContainerStyle} maxWidth="lg">
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
                  padding: "0",
                }}
              >
                {t("hobby.food")}
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
                  textAlign: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                  },
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("hobby.description.foodText1")}</Box>
                <Box component="li">{t("hobby.description.foodText2")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container css={subContainerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
          justifyContent="center"
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "start",
                display: "none",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "none",
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
              ></Box>
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
                  display: { xs: "grid", sm: "flex", md: "flex", lg: "flex" },
                  columnGap: "20px",
                  rowGap: "20px",
                  textAlign: "center",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="img" src={food1} css={imageStyle} />
                <Box component="img" src={food2} css={imageStyle} />
                <Box component="img" src={food3} css={imageStyle} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />
      {/* TODO art */}
      <Container css={subContainerStyle} maxWidth="lg">
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
                  padding: "0",
                }}
              >
                {t("hobby.art")}
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
                  textAlign: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                  },
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="li">{t("hobby.description.artText1")}</Box>
                <Box component="li">{t("hobby.description.artText2")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container css={subContainerStyle} maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          }}
          justifyContent="center"
        >
          <Grid
            sx={{
              textAlign: "center",
              "@media (max-width:600px)": {
                justifyContent: "start",
                display: "none",
                paddingBottom: "20px",
              },
            }}
            item
            xs={3}
          >
            <Box
              component="div"
              sx={{
                width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
                height: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
                textAlign: "center",
                padding: "10px",
                display: "none",
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
              ></Box>
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
                  display: { xs: "grid", sm: "flex", md: "flex", lg: "flex" },
                  columnGap: "20px",
                  rowGap: "20px",
                  textAlign: "center",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Box component="img" src={art1} css={imageStyle} />
                <Box component="img" src={art2} css={imageStyle} />
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
