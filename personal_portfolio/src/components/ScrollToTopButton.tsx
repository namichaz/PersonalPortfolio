/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonStyle = css`
    position: fixed;
    bottom: 20px; /* Adjust the distance from the bottom */
    right: 20px; /* Adjust the distance from the right */
    display: ${isVisible ? "block" : "none"};
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    &:hover {
      background-color: black;
    }
  `;

  return (
    <button css={buttonStyle} onClick={scrollToTop}>
      ▲
    </button>
  );
};

export default ScrollToTopButton;
