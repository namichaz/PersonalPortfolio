/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";

export const Line = () => {
  const line_style = css`
    border: none;
    border-bottom: 1px solid #333;
    margin: 10px 0;
    width: 100%;
  `;
  return (
    <Container maxWidth="lg">
      <hr css={line_style} />
    </Container>
  );
};
