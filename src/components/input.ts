import { HTMLProps } from "react";
import styled, { css } from "styled-components";

interface MyInputProps extends HTMLProps<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<MyInputProps> = styled.input`
  padding: 4px 18px 4px 6px;
  background-color: ${({ theme }) => theme.neutral.c3};
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
    border: 2px solid ${({ theme }) => theme.purple.light};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.purple.medium};
  }

  ${({ error }: { error: string }) =>
    error
      ? css`
          border-color: #d40f3c;
        `
      : ""}
`;
