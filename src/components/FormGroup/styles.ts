import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${({ error }) =>
    error &&
    css`
      input {
        border-color: red !important;
      }
    `}

  small {
    margin-top: 4px;
    font-size: 14px;
    color: red;
  }
`;