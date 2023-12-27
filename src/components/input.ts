import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 4px 18px 4px 6px;
  background-color: #eee;
  border: 2px solid transparent;
  border-radius: 2px;
  transition: 0.2s;
  text-align: left;
  cursor: auto;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.neutral.c6};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.purple.light} !important;
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.purple.medium} !important;
  }

  ${({ error }) =>
    error
      ? css`
          border-color: #d40f3c;
        `
      : ""}
`;
