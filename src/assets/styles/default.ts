import { css } from "styled-components";

export const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito";
  }

  body {
    background-color: ${({ theme }) => theme.bg};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: initial;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
