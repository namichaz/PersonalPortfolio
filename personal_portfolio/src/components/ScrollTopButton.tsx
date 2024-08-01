/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import topIcon from "../assets/toTopicon.png";

export const ScrollTopButton = () => {
  const buttonStyle = css`
    position: fixed;
    bottom: 30px;
    right: 30px;
    overflow: auto;
    border-radius: 10px;
    cursor: pointer;
  `;

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // スクロールイベントをListen
  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  // Scrollを検知しボタン表示のフラグを切り替え
  const watchScroll = () => {
    const basePosition = 200;
    const scrollPosition = window.scrollY;
    setShowScrollToTop(basePosition <= scrollPosition);
  };

  return (
    <>
      {showScrollToTop ? (
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          css={buttonStyle}
          src={topIcon}
        />
      ) : (
        ""
      )}
    </>
  );
};
