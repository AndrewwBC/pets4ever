import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  error: string | undefined;
}

export const Content: React.FC<ContentProps> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ error }: { error: string }) =>
    error &&
    css`
      input {
        border-color: red !important;
      }
    `}

  label {
    display: flex;
    flex-direction: column;
    p {
      align-self: self-start;
      font-size: 12px;
      margin-bottom: 2px;
      font-weight: 500;
      color: ${({ theme }) => theme.neutral.c9};
    }
  }

  small {
    margin-top: 4px;
    font-size: 14px;
    color: red;
    align-self: self-start;
    font-weight: 500;
  }
`;
