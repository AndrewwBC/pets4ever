import styled, { css } from "styled-components";

interface ContentInterface {
  error: OnErrorEventHandler;
  children?: JSX.Element | JSX.Element[];
}

export const Content = styled.div<ContentInterface>`
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

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  small {
    margin-top: 4px;
    font-size: 14px;
    color: red;
  }
`;
